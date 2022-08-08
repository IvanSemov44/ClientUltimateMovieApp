import React from 'react';
import { useContext} from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useNavigate } from "react-router-dom";

import { Formik } from 'formik';
import * as Yup from 'yup';

import { AuthContext } from '../../../context/AuthContext/AuthContext';
import * as UserService from '../../../service/UserService';

const Register = () => {
    const navigation = useNavigate();
    const { login } = useContext(AuthContext);
    // const [show,setShow] = setShow(true);

    return (
        <Formik
            initialValues={{
                username: '',
                password: ''
            }}
            validationSchema={
                Yup.object({
                    username: Yup.string()
                        .max(15, 'Must be 15 character or less')
                        .min(3, 'Must be 3 character or more')
                        .required('Required'),
                    password: Yup.string()
                        .min(6, "Required")
                        .required("Required"),

                })}
            onSubmit={(values, { setSubmiting }) => {
                UserService.login(values).then(result => login(result));

                navigation("/", { replace: true })
            }}
        >
            {formik => (
                <>
                    <Modal show={true}>
                        <Modal.Body>
                        <Form onSubmit={formik.handleSubmit}>

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

                            <Button type="submit">Login</Button>
                        </Form>
                        </Modal.Body>
                    </Modal>
                </>
            )}
        </Formik >
    );
}

export default Register;