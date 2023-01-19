import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cali from './Cali.jpg';
import './App.css';

function Profile() {
    return (
        <Card style={{ width: '20em', height: '40.3em', backgroundColor: 'lightblue' , margin: 'auto'}}  >
            <Card.Img variant='top' src={Cali} alt="Cali"></Card.Img>
            <Card.Body>
                <Card.Title>Portfolio</Card.Title>
                <Card.Text>
                    Hello my name is Kenny. At the moment i'm learning software development.
                </Card.Text>
                <Button variant="primary">Button</Button>
            </Card.Body>
        </Card>
    )
}

export default Profile