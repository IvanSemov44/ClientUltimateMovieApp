import React from 'react';
import { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

import { LinkContainer } from 'react-router-bootstrap';

import { AuthContext } from '../../../context/AuthContext/AuthContext';
import * as movieService from '../../../service/MovieService';
import './View.css';

const deaultMovieImg = "https://media.comicbook.com/files/img/default-movie.png";


//const img = "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg";

function View() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        movieService.getMovie(movieId)
            .then(result => { setMovie(result) });
    }, [])

    function OnDelete(e) {
        e.preventDefault();
        movieService.deleteMovie(movieId);
        navigate('/', { replace: true });
    }

    console.log(user.id,movie.movieOwnerId);
    return (
        <div className="div-viewItem">
            <Card bg="dark" text="white" className="card-view" style={{ width: '45rem' }}>
                <Card.Header className="card-view-header" size="xxl">{movie.title} ({movie.year})</Card.Header>

                {
                    movie.imageUrl !== ""
                        ? <Card.Img src={movie.imageUrl} alt="Movie Picter" className='imgView' />
                        : <Card.Img src={deaultMovieImg} alt="Movie Picter" className='imgView' />
                }

                <Card.Subtitle className="card-view-subtitle" bsPrefix>Dicrector: {movie.creator}</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">actiors:{movie.actors}</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Country:{movie.country}</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Description:{movie.descriptions}</Card.Subtitle>

                {
                    movie.trailerUrl !== ""
                        ? < Card.Subtitle className="card-view-subtitle">Trailer</Card.Subtitle>
                        : ""
                }
                {
                    movie.imageUrl !== ""
                        ? <Card.Img src={movie.imageUrl} alt="Movie Picter" className='imgView' />
                        : <Card.Img src={deaultMovieImg} alt="Movie Picter" className='imgView' />
                }

                <Card.Subtitle className="card-view-subtitle">Category: {movie.category}</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Long: No suport for now </Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Downloands: No suport for now</Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Size: No suport for now </Card.Subtitle>

                <Card.Subtitle className="card-view-subtitle">Imgd: No suport for now</Card.Subtitle>

                {user.id === movie.movieOwnerId
                    ?
                    <>
                        <LinkContainer to={"/Edit/" + movie.id}>
                            <Button variant="outline-light">Edit</Button>
                        </LinkContainer>
                        <LinkContainer to="/">
                            <Button onClick={OnDelete} variant="outline-light">Delete</Button>
                        </LinkContainer>

                        <Button variant="outline-light">Download</Button>
                        <Button variant="outline-light">Subtitle</Button>

                        <Button variant="outline-light">Comment</Button>
                        <Button variant="outline-light">Like</Button>
                    </>
                    : <></>
                }
            </Card>
        </div>
    )
}

export default View;