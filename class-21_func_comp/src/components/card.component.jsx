import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

const DataCard = (props) => {
    const {id, name, email} = props.user;
    console.log('card component ', id, name, email);
    return (
        <Col>
            <Card style={{ width: '18rem' }} key={id}>
                <Card.Img variant="top" src="https://robohash.org/{id}"/>
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{email}</Card.Text>
                    <Button variant="primary">Detail</Button>
                </Card.Body>
            </Card>
        </Col>
    )
};

export default DataCard;