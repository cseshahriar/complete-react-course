import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Login = () => {
    const navigate = useNavigate();
    const toSignup = () => {
        navigate('/signup');
    }

    return (
        <div>
            <h1>Login</h1>
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" name="username"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="password"/>
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <Button variant="primary" onClick={toSignup}>Sign up</Button>
        </div>
    )
}

export default Login;