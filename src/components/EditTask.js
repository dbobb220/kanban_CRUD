import React, {Component} from 'react';
import {Card, Badge} from 'react-bootstrap';

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
            color:''
        }
    }
    componentDidMount() {
        this.setState({
            title: this.props.editTask.title,
            id: this.props.editTask._id,
            description: this.props.editTask.description,
            category: this.props.editTask.category,
            type: this.props.editTask.type,
            status: this.props.editTask.status,
            color: this.props.editTask.color
        })
    }
    componentWillReceiveProps() {
        this.setState({
            title: this.props.editTask.title,
            id: this.props.editTask._id,
            description: this.props.editTask.description,
            category: this.props.editTask.category,
            type: this.props.editTask.type,
            status: this.props.editTask.status,
            color: this.props.editTask.color
        })
    }
    render() {
        return(
            <div>
                <Card style={{width:'180px', height:'110px', margin:'2px'}} bg="light" text="dark">
                    <Card.Header>
                        <Card.Title>{this.state.title}</Card.Title>
                        <Badge pill variant={this.state.color}>{this.state.category}</Badge>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{this.state.description}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted"></Card.Footer>
                </Card>
            </div>
        )
    }
}

export default EditTask;