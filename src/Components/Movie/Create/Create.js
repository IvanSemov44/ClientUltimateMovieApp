import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as MovieService from '../../../service/MovieService';
import "../Create/Create.css";

function Create() {
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [creator, setCreater] = useState();
    const [actors, setActors] = useState();
    const [country, setCountry] = useState();
    const [image, setImage] = useState();
    const [descriptions, setDescriptions] = useState();
    const [downloadons, setDownload] = useState();
    const [category, setCategory] = useState();

    function OnSubmit(e) {
        e.preventDefault();
        const data = {
            title,
            year,
            creator,
            actors,
            country,
            image,
            descriptions,
            downloadons,
            category,
        };
        console.log(data);

        MovieService.createMovie(data)
        .then(response=>{
            console.log('Status from server' + response.Status);
            console.log(response);
        });

    };



    return (
        <Form className= "form-create-movie" bg="blue" border = "dark" onSubmit={OnSubmit}>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="Year" onChange={(e => setYear(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="creater">
                <Form.Label>Creater</Form.Label>
                <Form.Control type="text" placeholder="Creater" onChange={(e => setCreater(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="actors">
                <Form.Label>Actors</Form.Label>
                <Form.Control type="text" placeholder="Actors" onChange={(e => setActors(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descriptions">
                <Form.Label>Descriptions</Form.Label>
                <Form.Control type="text" placeholder="Descriptions" onChange={(e => setDescriptions(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="imageUrk">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Image" onChange={(e => setImage(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="downloadUrl">
                <Form.Label>Download Url</Form.Label>
                <Form.Control type="text" placeholder="Download" onChange={(e => setDownload(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" onChange={(e => setCountry(e.target.value))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Category" onChange={(e => setCategory(e.target.value))} />
            </Form.Group>

            <Button variant="overline-dark"  type="submit" size="lg">
                Create
            </Button>
        </Form>
    );
};

export default Create;