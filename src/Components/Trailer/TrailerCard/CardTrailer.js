import React from 'react';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


import ViewTrailer from '../View/View';
import './CardTrailer.css';



function CardTrailer({
    data
}) {

    const [trailer, setTrailer] = useState(false);

    function trailerHandler() {
        setTrailer(true);
    }

    return (
        <div className="zoom">
            <ViewTrailer movie={data} show={trailer} onHide={() => setTrailer(false)} />
            <Button variant="non" classame="btn-for-view" onClick={trailerHandler}>
                <Card bg="dark" text="white" className="movie-card-trailer" style={{ width: '18rem' }}>
                    <Card.Img className="cardImg" variant="top" src={data.imageUrl} />
                    <Card.ImgOverlay>
                        <Card.Title className="card-trailer-text">Trailer: {data.title}({data.year})</Card.Title>
                    </Card.ImgOverlay>
                </Card>
            </Button>
        </div>
    );
}


export default CardTrailer;