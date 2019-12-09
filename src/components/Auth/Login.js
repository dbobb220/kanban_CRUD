import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      username: this.state.username,
      password: this.state.password
    };
    this.props.userLoading(true);
    this.props.userLogin(credentials);
    this.props.userLoading(false);
  }

  render() {
    return (
      <Form className="login">
        <Form.Group controlId="loginUsername">
          <Form.Control
            name="username"
            type="text"
            placeholder="Enter username"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="loginPassword">
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Button variant="secondary" onClick={this.onSubmit}>
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
