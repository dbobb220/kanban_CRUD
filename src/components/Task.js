import React from 'react';
import {Card, Badge} from 'react-bootstrap';
import 'material-icons';
import './Task.css';
import EditTask from '../containers/EditTask';

function Task(props) {
    let updateStatus = (id, value) => {
        props.fetchLoading(true);
        let setStatus = {status: value};
        fetch(`/tasks/${id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(setStatus)
        })
        props.fetchCall('/tasks');
        props.fetchLoading(false);
    }

    let editTaskClick = (id) => {
        let task = props.tasks.find(t => t._id === id);
        props.editClick(task);
        props.changeAside(['']);
        props.changeAside(<EditTask />);
        props.openAside(true);
    } 
    let footIcons = [];
    switch(true) {
        case props.status === "isBacklog":
            footIcons = [
                <span className="material-icons" title="Edit" key="Edit" onClick={()=>{editTaskClick(props.taskId)}}
                    >edit</span>,
                <span className="material-icons" title="Activate" key="Activate" 
                        onClick={()=>{updateStatus(props.taskId, "isActive")}}>add</span>
            ]
        break;
        case props.status === "isActive":
            footIcons = [
                <span className="material-icons" title="Edit" key="Edit" onClick={()=>{editTaskClick(props.taskId)}}>edit</span>,
                <div key="Action">
                    <span className="material-icons" title="Backlog" key="Backlog" onClick={()=>{updateStatus(props.taskId, "isBacklog"); console.log(props.taskId, "isDone")}}>thumb_down</span>
                    <span className="material-icons" title="Done" key="Done" onClick={()=>{updateStatus(props.taskId, "isDone"); console.log(props.taskId, "isDone");}}>thumb_up</span>
                </div>
            ]
        break;
        case props.status === "isDone":
            footIcons = [
                <span className="material-icons" title="Edit" key="Edit" onClick={()=>{editTaskClick(props.taskId)}}>edit</span>,
                <div key="Action">
                    <span className="material-icons" title="Reject" onClick={()=>{updateStatus(props.taskId, "isActive");}}>close</span>
                    <span className="material-icons" title="Accept" onClick={()=>{updateStatus(props.taskId, "isArchive"); }}>check</span>
                </div>
            ]
        break;
        default:
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
