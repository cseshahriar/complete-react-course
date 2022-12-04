// third party libraries
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

// apps import
import ClickHoc from '../../core/compoents/click-hoc.component';
import Form from '../Auth/form.component';

const Login = ({clickCount, onClicked}) => { 
    const navigate = useNavigate();
    const toSignup = () => {
        navigate('/signup');
    }
    return(
        <div>
            {
                clickCount >= 3 ? <h1>Too many wrong attempt</h1> : <h1>Login Component</h1>
            }
            <Form/>
            <Button variant="primary" onClick={onClicked} className="mt-2">Login</Button>
            <p>
                If already have an account, please login <Button className="btn btn-sm" onClick={toSignup}>Signup</Button>
            </p>
        </div>
    )
}

// const NewLogin = ClickHoc(Login);

export default ClickHoc(Login);