import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskTitle: '',
            taskCategory: '',
            taskDescription: '',
            taskType: '- Select One -'
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = event.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
            <Form className="new_task">
                <Form.Group controlId="taskTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Keep it short!"
                        name="taskTitle"
                        // value={this.state.taskTitle} 
                        // onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="taskCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Which project/component?" 
                        name="taskCategory"
                        value={this.state.taskCategory}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="taskDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows="3" 
                        name="taskDescription"
                        placeholder="Describe task in one sentence."
                        value={this.state.taskDescription}
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control 
                        as="select"
                        name="taskType"
                        value={this.state.taskType}
                        onChange={this.handleChange}
                    >
                        <option selected disabled>- Select One -</option>
                        <option>Bug</option>
                        <option>Feature</option>
                        <option>Tech Debt</option>
                        <option>Improvement</option>
                        <option>Research</option>
                    </Form.Control>
                </Form.Group>
            </Form> 
            </div>
        )
    }
}


