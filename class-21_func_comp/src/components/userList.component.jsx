import DataCard from './card.component';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const UserList = (props) => {
    return (

        <div>
            <Container>
                <Row>
                    {
                        props.users.length > 0 ? 
                        props.users.map((user) => {
                            return <DataCard user={user}/>
                        }) : <h1>Fetching user infos!</h1>
                    }
                </Row>
            </Container>
        </div>
    )
};

export default UserList;