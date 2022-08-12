import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import './Card.css';



function CardCom({
    data
}) {
    let img = "https://media.comicbook.com/files/img/default-movie.png";
    if (data.ImageUrl !== "") {
        img = data.imageUrl;
    }

    return (
        <div className="zoom">
            <LinkContainer to={"/view/" + data.id}>
                <Card bg="dark" text="white" className="movie-card" style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{data.title}({data.year})</Card.Title>
                        <Card.Text bsPrefix='newClassForText'>{data.descriptions}
                        </Card.Text>
                    </Card.Body>

                </Card>
            </LinkContainer>
        </div>
    );
}


export default CardCom;