import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <h1>Sign up</h1>
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
                    <button type="submit" className="btn btn-primary">Sign up</button>
                </div>
            </form>
            <Button variant="primary" onClick={toLogin}>Sign up</Button>
        </div>
    )
}

export default Signup;