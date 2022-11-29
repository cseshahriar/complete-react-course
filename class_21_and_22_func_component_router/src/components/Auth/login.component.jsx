import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Login = () => {
    const [clickCount, setClickCount] = useState(0);
    
    const navigate = useNavigate();

    const toSignup = () => {
        navigate('/signup');
    }

    const authenticateUser = (event) => {
        event.preventDefault();
        console.log('authenticateUser')
        setClickCount(clickCount + 1);
    }

    return(
        <div>
        {
            clickCount >= 3 ? <h1>Too many wrong attempt</h1> : <div>
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
                            <button type="submit" className="btn btn-primary mt-3" onClick={authenticateUser}>Login</button>
                        </div>
                    </form>
                    <p>
                        You did not account, please signup <a href="#" onClick={toSignup}> Sign up</a>
                    </p>
            </div>
        }
        </div>
    )
}

export default Login;