import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
const dotenv = require('dotenv').config;

export default class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskTitle: '',
            taskCategory: '',
            taskDescription: '',
            taskType: '- Select One -',
            taskColor: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
        [name]: value
        });
    }

    submitForm(e) {
        let bodySubmit = {
            title: this.state.taskTitle,
            description: this.state.taskDescription,
            category: this.state.taskCategory,
            status: {
                isBacklog: true,
                isActive: false,
                isAssigned: false,
                isDone: false,
                isArchived: false
            },
            type: this.state.taskType,
            color: this.state.taskColor,
            assignee: null,
            priority: 3,
            isArchived: false
        };
        fetch(`http://localhost:8080/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodySubmit)
        })
            .then(res => res.json())
            .then(data => console.log(data))
                .catch(err => `Error: ${err}`)
    }

    render() {
        let colorType = {
            Bug: "warning",
            Feature: "success",
            TechDebt: "warning",
            Improvement: "primary",
            Research: "info"
        }
        return (
            <div>
            <Form className="new_task">
                <Form.Group controlId="taskTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                        required
                        type="text" 
                        placeholder="Keep it short!"
                        name="taskTitle"
                        value={this.state.taskTitle} 
                        onChange={this.handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="taskCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control 
                        required
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
                        required
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
                        required
                        as="select"
                        name="taskType"
                        value={this.state.taskType}
                        onChange={(e)=> {
                            this.handleChange(e)
                            let colorOption = colorType[e.target.value];
                            this.setState({
                                taskColor: colorOption
                            })
                        }}
                    >
                        <option value="- Select One -" disabled>- Select One -</option>
                        <option id="danger" value="Bug">Bug</option>
                        <option id="success" value="Feature">Feature</option>
                        <option id="warning" value="TechDebt">Tech Debt</option>
                        <option id="primary" value="Improvement">Improvement</option>
                        <option id="info" value="Research">Research</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={this.submitForm}>
                    Submit
                </Button>
            </Form>
            </div>
        )
    }
}


