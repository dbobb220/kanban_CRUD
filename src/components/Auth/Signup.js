import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }
  onSubmit(e) {
    let credentials = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password
    };
    this.props.userLoading(true);
    this.props.userSignup(credentials);
    this.props.userLoading(false);
  }

  render() {
    return (
      <Form className="signup">
        <Form.Group controlId="signupEmail">
          <Form.Control
            name="name"
            type="name"
            placeholder="Name"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="signupUsername">
          <Form.Control
            name="username"
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="signupPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button
          variant="primary"
          style={{ textAlign: "right" }}
          onClick={this.onSubmit}
        >
          Sign Up
        </Button>
      </Form>
    );
  }
}

export default Signup;
