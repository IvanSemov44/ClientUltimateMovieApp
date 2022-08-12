import React from 'react';

import { LinkContainer } from 'react-router-bootstrap';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './View.css';
import { Modal } from 'react-bootstrap';

function ViewTrailer({
    show, onHide,movie
}) {
    return (
        <>
       { console.log(movie)}
            <Modal className="view-trailer-modal" show={show} onHide={onHide}>
                    <div className="div-viewItem">
                        <Card bg="dark" text="white" className="card-view" style={{ width: '100rem' }}>
                            <Card.Header className="card-view-header" size="xxl">{movie.title} ({movie.year})</Card.Header>

                            <iframe width="100%" height="680px" src={movie.trailerUrl} title={movie.title} className="view-trailer" frameBorder="10" allowFullScreen></iframe>

                            <LinkContainer className="btn-moreInfo" to={"/view/" + movie.id}>
                            <Button size="lg" variant="outline-info">
                                    More Info
                                </Button>
                            </LinkContainer>

                        </Card>
                    </div>
            </Modal>
        </>
    )
}

export default ViewTrailer;    