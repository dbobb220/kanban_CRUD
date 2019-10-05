import React, {Component} from 'react';
import {Card, Badge, Form, Button} from 'react-bootstrap';

class EditTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            id: '',
            description: '',
            category: '',
            type: '',
            status: '',
            color: '',
            assignee: null,
            priority: 3
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.colorType = {
            Bug: "danger",
            Feature: "success",
            TechDebt: "warning",
            Improvement: "primary",
            Research: "info"
        }
    }

    handleChange = (e) => {
        let target = e.target;
        let value = target.value;
        let name = target.name;
        name === "type" 
            ? this.setState({type: value, color: this.colorType[value]})
            : this.setState({[name]: value});
    }

    static getDerivedStateFromProps(props, state) {
        if (props.editTask._id !== state.id) {
          return {
            title: props.editTask.title,
            id: props.editTask._id,
            description: props.editTask.description,
            category: props.editTask.category,
            type: props.editTask.type,
            status: props.editTask.status,
            color: props.editTask.color
          };
        }
        // Return null to indicate no change to state.
        return null;
      }

    onSubmit(id) {
        let payload = this.state;
        this.props.fetchLoading(true);
        this.props.fetchPut(`/tasks/${id}`, payload);
        this.props.fetchLoading(false);
        this.props.closeAside(false);
    }

    onDelete(id, value) {
        this.props.fetchLoading(true);
        this.props.updateStatus(id, value);
        this.props.fetchLoading(false);
        this.props.closeAside(false);
    }

    render() {
        return(
            <div className="edit-task">
                <Card style={{width:'180px', height:'110px'}} bg="light" text="dark">
                    <Card.Header>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Badge pill variant={this.state.color}>{this.state.category}</Badge>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{this.state.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
                <Form>
                <Form.Group controlId="taskTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="title"
                            value={this.state.title} 
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="taskCategory">
                        <Form.Label>Category</Form.Label>
                        <Form.Control 
                            required
                            type="text" 
                            name="category"
                            value={this.state.category}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="taskDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            required
                            as="textarea" 
                            rows="3" 
                            name="description"
                            value={this.state.description}
                            onChange={this.handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Type</Form.Label>
                        <Form.Control 
                            required
                            as="select"
                            name="type"
                            value={this.state.type}
                            onChange={this.handleChange}
                        >
                            <option value="- Select One -" disabled>- Select One -</option>
                            <option id="danger" value="Bug">Bug</option>
                            <option id="success" value="Feature">Feature</option>
                            <option id="warning" value="TechDebt">Tech Debt</option>
                            <option id="primary" value="Improvement">Improvement</option>
                            <option id="info" value="Research">Research</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <div className="buttons">
                    <Button variant="primary" type="submit" onClick={()=>{this.onSubmit(this.state.id)}}>Submit</Button>
                    <Button variant="danger" type="submit" onClick={()=>{this.onDelete(this.state.id, 'isDeleted')}}>Delete</Button>
                </div>
            </div>
        )
    }
}

export default EditTask;