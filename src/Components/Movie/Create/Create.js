import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as MovieService from '../../../service/MovieService';
import "../Create/Create.css";

function Create() {
    const navigate = useNavigate();


    return (
        <Formik
            initialValues={{
                title: '',
                year: '2022',
                creator: '',
                actors: '',
                descriptions: '',
                imageUrl: '',
                downloadUrl: '',
                country: '',
                category: '',
                trailerUrl: '',
                subtitleUrl: '',
            }}
            validationSchema={
                Yup.object({
                    title: Yup.string()
                        .max(100, 'Must be 15 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    year: Yup.number()
                        .max(2022, 'Must be 2022 year or less')
                        .min(1900, 'Must be 1900 year or more')
                        .required('Required'),
                    creator: Yup.string()
                        .max(100, 'Must be 100 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    actors: Yup.string()
                        .max(100, 'Must be 100 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    descriptions: Yup.string()
                        .max(1000, 'Must be 1000 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    imageUrl: Yup.string()
                        .max(1000, 'Must be 1000 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    downloadUrl: Yup.string()
                        .max(1000, 'Must be 1000 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    country: Yup.string()
                        .max(100, 'Must be 100 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    category: Yup.string()
                        .max(100, 'Must be 100 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    trailerUrl: Yup.string()
                        .max(1000, 'Must be 1000 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    subtitleUrl: Yup.string()
                        .max(1000, 'Must be 1000 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),

                })}
            onSubmit={(values, { setSubmiting }) => {
                MovieService.createMovie(values)
                    .then(response => {
                        console.log(response)
                        navigate(`/view/${response.id}`, { replace: false })
                    });
                setSubmiting(false);
            }}
        >
            {formik => (
                <Form className="form-create-movie" bg="blue" border="dark" onSubmit={formik.handleSubmit}>

                    <Form.Group className="position-relative">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            id="title"
                            type="text"
                            name="title"
                            {...formik.getFieldProps('title')}
                            isInvalid={formik.touched.title && formik.errors.title}
                            isValid={formik.touched.title && !formik.errors.title}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.title}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Year</Form.Label>
                        <Form.Control
                            id="year"
                            type="number"
                            min="1900"
                            max="2022"
                            name="year"
                            {...formik.getFieldProps('year')}
                            isInvalid={formik.touched.year && formik.errors.year}
                            isValid={formik.touched.year && !formik.errors.year}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.firstName}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Creator</Form.Label>
                        <Form.Control
                            id="creator"
                            type="text"
                            name="creator"
                            {...formik.getFieldProps('creator')}
                            isInvalid={formik.touched.creator && formik.errors.creator}
                            isValid={formik.touched.creator && !formik.errors.creator}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.creator}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Actors</Form.Label>
                        <Form.Control
                            id="actors"
                            type="text"
                            name="actors"
                            {...formik.getFieldProps('actors')}
                            isInvalid={formik.touched.actors && formik.errors.actors}
                            isValid={formik.touched.actors && !formik.errors.actors}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.actors}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control
                            id="descriptions"
                            type="text"
                            name="descriptions"
                            {...formik.getFieldProps('descriptions')}
                            isInvalid={formik.touched.descriptions && formik.errors.descriptions}
                            isValid={formik.touched.descriptions && !formik.errors.descriptions}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.descriptions}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Image Url</Form.Label>
                        <Form.Control
                            id="imageUrl"
                            type="text"
                            name="imageUrl"
                            {...formik.getFieldProps('imageUrl')}
                            isInvalid={formik.touched.imageUrl && formik.errors.imageUrl}
                            isValid={formik.touched.imageUrl && !formik.errors.imageUrl}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.imageUrl}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Download Url</Form.Label>
                        <Form.Control
                            id="downloadUrl"
                            type="text"
                            name="downloadUrl"
                            {...formik.getFieldProps('downloadUrl')}
                            isInvalid={formik.touched.downloadUrl && formik.errors.downloadUrl}
                            isValid={formik.touched.downloadUrl && !formik.errors.downloadUrl}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.downloadUrl}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Country</Form.Label>
                        <Form.Control
                            id="country"
                            type="text"
                            name="country"
                            {...formik.getFieldProps('country')}
                            isInvalid={formik.touched.country && formik.errors.country}
                            isValid={formik.touched.country && !formik.errors.country}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.country}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Category</Form.Label>
                        <Form.Control
                            id="category"
                            type="text"
                            name="category"
                            {...formik.getFieldProps('category')}
                            isInvalid={formik.touched.category && formik.errors.category}
                            isValid={formik.touched.category && !formik.errors.category}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.category}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Trailer Url</Form.Label>
                        <Form.Control
                            id="trailerUrl"
                            type="text"
                            name="trailerUrl"
                            {...formik.getFieldProps('trailerUrl')}
                            isInvalid={formik.touched.trailerUrl && formik.errors.trailerUrl}
                            isValid={formik.touched.trailerUrl && !formik.errors.trailerUrl}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.trailerUrl}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="position-relative">
                        <Form.Label>Subtitle Url</Form.Label>
                        <Form.Control
                            id="subtitleUrl"
                            type="text"
                            name="subtitleUrl"
                            {...formik.getFieldProps('subtitleUrl')}
                            isInvalid={formik.touched.subtitleUrl && formik.errors.subtitleUrl}
                            isValid={formik.touched.subtitleUrl && !formik.errors.subtitleUrl}
                        />
                        <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid" tooltip>{formik.errors.subtitleUrl}</Form.Control.Feedback>
                    </Form.Group>

                    <Button variant="outline-light" type="submit" size="lg">
                        Create
                    </Button>
                </Form>
            )}
        </Formik >
    );
};

export default Create;