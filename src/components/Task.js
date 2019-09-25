import React from 'react';
import {Card, Badge, Button} from 'react-bootstrap';
import 'material-icons';
import './Task.css';

function Task(props) {
    let footIcons = [];
    switch(true) {
        case props.button === "Backlog":
            footIcons = [
                <span className="material-icons" title="Edit">edit</span>,
                <span className="material-icons" title="Add">add</span>]
        break;
        case props.button === "Activate":
            footIcons = [
                <span className="material-icons" title="Edit">edit</span>,
                <span className="material-icons" title="Backlog">thumb_down</span>,
                <span className="material-icons" title="Done">thumb_up</span>
            ]
        break;
        case props.button === "Done":
            footIcons = [
                <span className="material-icons" title="Edit">edit</span>,
                <span className="material-icons" title="Reject">close</span>,
                <span className="material-icons" title="Accept">check</span>
            ]
        break;
    }
    return (
        <Card style={{width:'180px', height:'110px', margin:'2px'}} bg={props.bgcolor} text={props.textColor}>
            <Card.Header>
                <Card.Title>{props.title}</Card.Title>
                <Badge pill variant={props.color}>{props.category}</Badge>
            </Card.Header>
            <Card.Body>
                <Card.Text>{props.description}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">{footIcons}</Card.Footer>
        </Card>
    )
}

export default Task;
