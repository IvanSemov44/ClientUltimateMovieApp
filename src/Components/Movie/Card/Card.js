import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import './Card.css';



function CardCom({
    data
}) {
    let img = "https://media.comicbook.com/files/img/default-movie.png";
    if(data.ImageUrl !== "") {
        img = data.imageUrl;
    }
    
    return (
        <Card bg="dark" text="white" style={{ width: '18rem' }}>
            <Card.Img className="cardImg" variant="top" src={img} />
            <Card.Body>
                <Card.Title>{data.title}({data.year})</Card.Title>
                <Card.Text bsPrefix='newClassForText'>{data.descriptions}
                </Card.Text>
                <LinkContainer to={"/view/"+data.id}>
                    <Button variant="outline-light" text="grey">View</Button>
                </LinkContainer>
            </Card.Body>
        </Card>
    );
}


export default CardCom;