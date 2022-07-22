import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import './View.css';

const deaultMovieImg = "https://media.comicbook.com/files/img/default-movie.png";

const img = "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg";

function View() {

    return (
        <div className="div-viewItem">
            <Card bg="dark" text="white" className="card-view" style={{ width: '45rem' }}>
                <Card.Header className="card-view-header" size="xxl">Harry Potter (2020)</Card.Header>

                <Card.Img variant="top" src={img} alt="Movie Picter" className='imgView' />

                <Card.Subtitle className="card-view-subtitle" bsPrefix>Dicrector: JJ</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">actiors:Ema Wontsun</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Country</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Description:Movie for wizzar and him drama</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Trailer</Card.Subtitle>

                <Card.Img src={deaultMovieImg} alt="Movie Picter" className='imgView' />

                <Card.Subtitle className="card-view-subtitle">Category: Fantacy, Drama</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Long: </Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Downloands</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Size</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Imgd</Card.Subtitle>


                <Button variant="outline-light">Edit</Button>
                <Button variant="outline-light">Delete</Button>

                <Button variant="outline-light">Download</Button>
                <Button variant="outline-light">Subtitle</Button>
                
                <Button variant="outline-light">Comment</Button>
                <Button variant="outline-light">Like</Button>
            </Card>
        </div>
    )
}

export default View;