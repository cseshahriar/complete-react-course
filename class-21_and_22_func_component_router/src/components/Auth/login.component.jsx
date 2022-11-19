import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Login = () => {
    const navigate = useNavigate();

    const toSignup = () => {
        navigate('/signup');
    }

    // if authenticated
    const athenticateUser = () => {
        navigate('/users');
    }

    return (
        <div>
        <Container>
            <Row>
                <Col>
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
                            <button type="submit" className="btn btn-primary mt-3">Login</button>
                        </div>
                    </form>

                    <p>
                        You did not account, please signup <Button className="btn btn-sm" onClick={toSignup}> Sign up</Button>
                    </p>

                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Login;