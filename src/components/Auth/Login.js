import React from 'react';
import {Form, Button} from 'react-bootstrap'

const Login = (props) => {
    return (
        <Form className="login">
            <Form.Group controlId="formBasicUsername">
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="secondary">Login</Button>
        </Form>
    )
}

export default Login;