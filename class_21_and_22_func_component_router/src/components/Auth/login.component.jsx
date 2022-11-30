// third party libraries
import { useNavigate } from "react-router-dom";

// apps import
import ClickHoc from '../../core/compoents/click-hoc.component';


const Login = ({clickCount, onClicked}) => { 
    const navigate = useNavigate();

    const toSignup = () => {
        // return signup component
        navigate('/signup');
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
                            <button type="submit" className="btn btn-primary mt-3" onClick={onClicked}>Login</button>
                        </div>
                    </form>
                    <p>
                        You did not account, please signup <button onClick={toSignup}> Sign up</button>
                    </p>
            </div>
        }
        </div>
    )
}

// const NewLogin = ClickHoc(Login);

export default ClickHoc(Login);