import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import '../Card/Card.css';
const img = "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg";


function CardCom() {
    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Img className = "cardImg" variant="top" src= {img}/>
            <Card.Body>
                <Card.Title>Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="outline-light" text="grey">View</Button>
            </Card.Body>
        </Card>
    );
}


export default CardCom;