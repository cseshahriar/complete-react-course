import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Login from './login.component';
import Registration from './registration.component';

const AuthComponent = () => {
    const navigate = useNavigate();

    const toSignup = () => {
        // navigate('/signup');
    }

    return (  
        <div>
        <Container>
            <Row>
                <Col>
                    <Login/>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default AuthComponent;