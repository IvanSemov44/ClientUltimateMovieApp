import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Create() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" placeholder="Title" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="year">
                <Form.Label>Year</Form.Label>
                <Form.Control type="number" placeholder="Year" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="creater">
                <Form.Label>Creater</Form.Label>
                <Form.Control type="text" placeholder="Creater" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="actors">
                <Form.Label>Actors</Form.Label>
                <Form.Control type="text" placeholder="Actors" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descriptions">
                <Form.Label>Descriptions</Form.Label>
                <Form.Control type="text" placeholder="Descriptions" />

            </Form.Group><Form.Group className="mb-3" controlId="imageUrk">
                <Form.Label>Image</Form.Label>
                <Form.Control type="text" placeholder="Image" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="downloadUrl">
                <Form.Label>Download Url</Form.Label>
                <Form.Control type="text" placeholder="Download" />
            </Form.Group>
            
            <Form.Group className="mb-3" controlId="country">
                <Form.Label>Country</Form.Label>
                <Form.Control type="text" placeholder="Country" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control type="text" placeholder="Category" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    );
}

export default Create;