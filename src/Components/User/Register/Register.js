import React from 'react';
import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';

import { useNavigate } from "react-router-dom";
import { Formik } from 'formik';
import * as Yup from 'yup';

import "../Register/Register.css";
import * as UserService from '../../../service/UserService';

const Register = ({
    show,
    close
}) => {
    const navigation = useNavigate();
    const [showToggle, setShowToggle] = useState(false);
    const [errors, setErrors] = useState([]);

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                username: '',
                email: '',
                password: '',
                repeatPassword: ''
            }}
            validationSchema={
                Yup.object({
                    firstName: Yup.string()
                        .max(15, 'Must be 15 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    lastName: Yup.string()
                        .max(15, 'Must be 15 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    username: Yup.string()
                        .max(15, 'Must be 15 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, "Required")
                        .required("Required"),
                    repeatPassword: Yup.string()
                        .required("Please confirm your password")
                        .oneOf([Yup.ref("password")], "Passwords do not match"),

                })}
            onSubmit={(values, { resetForm }) => {
                UserService.register(values)
                    .then(result => {
                        close();
                        resetForm();
                        navigation("/", { replace: true })
                    })
                    .catch(
                        result => {
                            setShowToggle(true);
                            setErrors(Object.values(result));
                        })

            }}
        >
            {formik => (
                <>
                    <Modal show={show} onHide={close}>
                        <Modal.Body>

                            {
                                errors.map(x =>
                                    <Toast key={x} show={showToggle} onClose={() => setShowToggle(false)} bg='danger' >
                                        <Toast.Body className='Danger'>
                                            {x}
                                        </Toast.Body>
                                    </Toast>
                                )
                            }

                            <Form className="register-text" onSubmit={formik.handleSubmit}>
                                <Form.Group className="position-relative">
                                    <Form.Label htmlFor="firstName">First Name</Form.Label>
                                    <Form.Control
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        {...formik.getFieldProps('firstName')}
                                        isInvalid={formik.touched.firstName && formik.errors.firstName}
                                        isValid={formik.touched.firstName && !formik.errors.firstName}
                                    />
                                    <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.firstName}</Form.Control.Feedback>
                                </Form.Group >

                                <Form.Group className="position-relative">
                                    <Form.Label htmlFor="lastName">Last Name</Form.Label>
                                    <Form.Control
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        {...formik.getFieldProps('lastName')}
                                        isInvalid={formik.touched.lastName && formik.errors.lastName}
                                        isValid={formik.touched.lastName && !formik.errors.lastName}
                                    />
                                    <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.lastName}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="position-relative">
                                    <Form.Label htmlFor="username">Username</Form.Label>
                                    <Form.Control
                                        id="username"
                                        type="text"
                                        name="username"
                                        {...formik.getFieldProps('username')}
                                        isInvalid={formik.touched.username && formik.errors.username}
                                        isValid={formik.touched.username && !formik.errors.username}
                                    />
                                    <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.username}</Form.Control.Feedback>

                                </Form.Group>

                                <Form.Group className="position-relative">
                                    <Form.Label htmlFor="email">Email</Form.Label>
                                    <Form.Control
                                        id="email"
                                        type="email"
                                        name="email"
                                        {...formik.getFieldProps('email')}
                                        isInvalid={formik.touched.email && formik.errors.email}
                                        isValid={formik.touched.email && !formik.errors.email}
                                    />
                                    <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.email}</Form.Control.Feedback>

                                </Form.Group>

                                <Form.Group className="position-relative">
                                    <Form.Label htmlFor="password">Password</Form.Label>
                                    <Form.Control
                                        id="password"
                                        type="password"
                                        name="password"
                                        {...formik.getFieldProps('password')}
                                        isInvalid={formik.touched.password && formik.errors.password}
                                        isValid={formik.touched.password && !formik.errors.password}
                                    />
                                    <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.password}</Form.Control.Feedback>

                                </Form.Group>

                                <Form.Group className="position-relative">
                                    <Form.Label htmlFor="repeatPassword">Repeat password</Form.Label>
                                    <Form.Control
                                        id="repeatPassword"
                                        type="password"
                                        name="repeatPassword"
                                        {...formik.getFieldProps('repeatPassword')}
                                        isInvalid={formik.touched.repeatPassword && formik.errors.repeatPassword}
                                        isValid={formik.touched.repeatPassword && !formik.errors.firstNrepeatPasswordame}
                                    />
                                    <Form.Control.Feedback type="isvalid" tooltip></Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid" tooltip>{formik.errors.repeatPassword}</Form.Control.Feedback>

                                </Form.Group>

                                <Button size="lg" variant="success" type="submit">Register</Button>
                            </Form>

                        </Modal.Body>
                    </Modal>
                </>
            )}
        </Formik >
    );
}

export default Register;