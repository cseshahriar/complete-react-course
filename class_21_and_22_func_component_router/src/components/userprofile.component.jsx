import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { useLocation } from 'react-router-dom';

const UserProfile = () => {
    const {state} = useLocation();

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://robohash.org/{id}" />
        <Card.Body>
            <Card.Title>{state.name}</Card.Title>
            <Card.Text>{state.email}</Card.Text>
        </Card.Body>
        </Card>
    )
}

export default UserProfile;