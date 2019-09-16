import React from 'react';
import {Card, Badge} from 'bootstrap-4-react';
import './Task.css';

function Task(props) {
    return (
        <Card style={{width:'18rem', margin:'2px'}} bg={props.bgcolor} text={props.textColor}>
            <Card.Header>
                <Card.Title>{props.title}</Card.Title>
                <Badge pill dark>{props.category}</Badge>
            </Card.Header>
            <Card.Body>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Task;
