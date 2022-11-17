import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import UserProfile from '../components/userprofile.component';
import { useNavigate } from "react-router-dom";
 
const DataCard = (props) => {
    const {id, name, email} = props.user;
    const navigate = useNavigate();

    const showDetails = () => {
        navigate(
            `/users/${id}`, {
                state: {id, name, email}
            }
        )
    }

    return (
        <Col>
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src="https://robohash.org/{id}"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                    <Button variant="primary" onClick={showDetails}>Detail</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default DataCard;