import React from 'react';
import { useState, useEffect, useContext } from "react";

import { useParams, useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

import { LinkContainer } from 'react-router-bootstrap';

import { AuthContext } from '../../../context/AuthContext';

import ConfirmDialog from '../../Common/ConfirmDialog/ConfirmDialog';
import * as movieService from '../../../service/MovieService';

import './View.css';

// const deaultMovieImg = "https://media.comicbook.com/files/img/default-movie.png";


//const img = "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg";

function View() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);

    useEffect(() => {
        movieService.getMovie(movieId)
            .then(result => { setMovie(result) });
    }, [])

    function OnDelete(e) {
        e.preventDefault();
        movieService.deleteMovie(movieId);
        navigate('/', { replace: true });
    }

    const deleteClickHandler = (e) => {
        e.preventDefault()
        setShowDeleteDialog(true);
    }

    return (
        <>
            <ConfirmDialog className="view-btn" show={showDeleteDialog} onClose={() => setShowDeleteDialog(false)} saveChanges={OnDelete} />
            <div className="div-viewItem">
                <Card bg="dark" text="white" className="card-view" style={{ width: '45rem' }}>
                    <Card.Header className="card-view-header" size="xxl">{movie.title} ({movie.year})</Card.Header>

                    <Card.Img src={movie.imageUrl} alt="Movie Picter" className='imgView' />

                    <div className="view-text">
                        <Card.Subtitle className="card-view-subtitle"><span className="view-par">Dicrector:</span> {movie.creator}</Card.Subtitle>

                        <Card.Subtitle className="card-view-subtitle"><span className="view-par">Actiors:</span> {movie.actors}</Card.Subtitle>

                        <Card.Subtitle className="card-view-subtitle"><span className="view-par">Country:</span> {movie.country}</Card.Subtitle>

                        <Card.Subtitle className="card-view-subtitle"><span className="view-par">Description:</span> {movie.descriptions}</Card.Subtitle>
                    </div>
                    <Card.Subtitle className="card-view-subtitle view-trailer"><span className="view-par">Trailer</span></Card.Subtitle>
                    <iframe width="100%" height="480" src={movie.trailerUrl} title={movie.title} className="view-trailer" frameBorder="10" /*allow="accelerometer autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/ allowFullScreen></iframe>

                    {console.log(movie.trailerUrl)}
                    {/* <Card.Subtitle className="card-view-subtitle">Category: {movie.category}</Card.Subtitle>

                    <Card.Subtitle className="card-view-subtitle">Long: No suport for now </Card.Subtitle>

                    <Card.Subtitle className="card-view-subtitle">Downloands: No suport for now</Card.Subtitle>

                    <Card.Subtitle className="card-view-subtitle">Size: No suport for now </Card.Subtitle>

                    <Card.Subtitle className="card-view-subtitle">Imgd: No suport for now</Card.Subtitle> */}
                    <div className="view-btn">
                    {user.id === movie.movieOwnerId
                        ?
                        <>
                            <LinkContainer to={"/Edit/" + movie.id}>
                                <Button variant="outline-danger" size="lg">Edit</Button>
                            </LinkContainer>
                            <LinkContainer to="/">
                                <Button onClick={deleteClickHandler} variant="outline-danger" size="lg">Delete</Button>
                            </LinkContainer>
                        </>
                        : <></>
                    }
                    {
                        user.id && movie.downloadUrl !== undefined
                            ?
                            <>
                                    <a href={movie.downloadUrl} target="_backet">
                                    <Button variant="outline-success" size="lg">
                                        Download
                                    </Button>
                                </a>
                                {movie.subtitleUrl !== "No " && movie.subtitleUrl !== undefined
                                    ?
                                    <a href={movie.subtitleUrl} target="_backet">
                                        <Button variant="outline-info" size="lg">Subtitle</Button>
                                    </a>
                                    : <></>
                                }
                            </>
                            : <></>
                    }
                    </div>
                </Card>
            </div>
        </>
    )
}

export default View;