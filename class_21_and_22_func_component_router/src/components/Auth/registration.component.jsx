import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const Signup = () => {
    const navigate = useNavigate();

    const toLogin = () => {
        navigate('/login');
    }

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h1>Signup</h1>
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
                                <button type="submit" className="btn btn-primary mt-3">Signup</button>
                            </div>
                        </form>

                        <p>
                            If already have an account, please login <Button className="btn btn-sm" onClick={toLogin}> Login</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Signup;