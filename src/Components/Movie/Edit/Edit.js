import React, { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as MovieService from '../../../service/MovieService';
import "../Create/Create.css";

function Edit() {
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [creator, setCreater] = useState();
    const [actors, setActors] = useState();
    const [country, setCountry] = useState();
    const [image, setImage] = useState();
    const [descriptions, setDescriptions] = useState();
    const [downloadons, setDownload] = useState();
    const [category, setCategory] = useState();
    const [trailer, setTrailer] = useState();
    const [subtitle, setSubtitle] = useState();
    const navigate = useNavigate();

    const[movie, setMovie] = useState({});
    const { movieId } = useParams();

    useEffect(() => {
        MovieService.getMovie(movieId)
            .then(result => setMovie(result));
    }, [])

    function OnSubmit(e) {
        e.preventDefault();
        const data = {
            title,
            year,
            creator,
            actors,
            country,
            imageUrl: image,
            descriptions,
            downloadUrl: downloadons,
            category,
            subtitleUrl: subtitle,
            trailerUrl: trailer
        };
        console.log(data);

        MovieService.createMovie(data)
        .then(response=>{
            navigate(`/view/${movieId}`)
        });

    };



    return (
        <Form className= "form-create-movie" bg="blue" border = "dark" onSubmit={OnSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" defaultValue = {movie.title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="Year" defaultValue={movie.year} onChange={(e => setYear(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="creater">
                <Form.Label>Creater</Form.Label>
                <Form.Control type="text" placeholder="Creater" defaultValue={movie.creater} onChange={(e => setCreater(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="actors">
                <Form.Label>Actors</Form.Label>
                <Form.Control type="text" placeholder="Actors" defaultValue={movie.actors} onChange={(e => setActors(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descriptions">
                <Form.Label>Descriptions</Form.Label>
                <Form.Control type="text" placeholder="Descriptions" defaultValue={movie.descriptions} onChange={(e => setDescriptions(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrl">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Image" defaultValue={movie.imageUrl} onChange={(e => setImage(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="downloadUrl">
                <Form.Label>Download Url</Form.Label>
                <Form.Control type="text" placeholder="Download" defaultValue={movie.downloadUrl} onChange={(e => setDownload(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" defaultValue={movie.country} onChange={(e => setCountry(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Category" defaultValue={movie.category} onChange={(e => setCategory(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="trailer">
                <Form.Label>Trailer Url</Form.Label>
                <Form.Control type="text" placeholder="trailer" defaultValue={movie.trailerUrl} onChange={(e => setTrailer(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="subtitle">
                <Form.Label>Subtitle Url</Form.Label>
                <Form.Control type="text" placeholder="trailer" defaultValue={movie.subtitleUrl} onChange={(e => setSubtitle(e.target.value))} />
            </Form.Group>


            <Button variant="overline-dark"  type="submit" size="lg">
                Create
            </Button>
        </Form>
    );
};

export default Edit;