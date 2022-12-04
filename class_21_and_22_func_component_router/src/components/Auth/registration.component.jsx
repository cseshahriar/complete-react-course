import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import ClickHoc from '../../core/compoents/click-hoc.component';
import Form from '../Auth/form.component';

const Signup = ({clickCount, onClicked}) => {
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
                        <Form/>
                        <Button variant="primary" onClick={onClicked} className="mt-2">Signup</Button>
                        <p>
                            If already have an account, please login <Button className="btn btn-sm" onClick={toLogin}>Login</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default ClickHoc(Signup);