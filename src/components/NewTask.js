import React, {Component} from 'react';
import {Form} from 'bootstrap-4-react';

class NewTask extends Component {
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
            <Form>
                <Form.Group controlId="taskTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
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
                        type="text" 
                        placeholder="What's it under?" 
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
        )
    }
}

export default NewTask;
