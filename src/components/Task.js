import React from 'react';

function Task(props) {
    return (
        <div>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default Task;
