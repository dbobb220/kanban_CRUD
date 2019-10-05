import React from 'react';
import {Form, Button} from 'react-bootstrap'

const Signup = (props) => {
    return (
            <Form className="signup">
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="name" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formBasicUsername">
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" style={{textAlign: 'right'}}>Sign Up</Button>
            </Form>
    )
}

export default Signup;