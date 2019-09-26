import React from 'react';
import {Row, Col} from 'bootstrap-4-react';
import Task from './Task';

const Board = (props) => {
    let backlog = [];
    let active = [];
    let done = [];

    // eslint-disable-next-line
    props.tasks.map((card, i) => {
        switch(true) {
            case card.status === 'isBacklog' : backlog.push(<Task 
                    id={card._id}
                    title={card.title}
                    category={card.category}
                    description={card.description}
                    key={i}
                    bgcolor={"light"}
                    textColor={"dark"}
                    color={card.color}
                    status={card.status}
                    loadTasks={props.loadTasks}
                />)
            break 
            case card.status === 'isActive' : active.push(<Task 
                    id={card._id}
                    title={card.title}
                    category={card.category}
                    description={card.description}
                    key={i}
                    bgcolor={"light"}
                    textColor={"dark"}
                    color={card.color}
                    status={card.status}
                    loadTasks={props.loadTasks}
                />)
            break
            case card.status === 'isDone' : done.push(<Task 
                    id={card._id}
                    title={card.title}
                    category={card.category}
                    description={card.description}
                    key={i}
                    bgcolor={"light"}
                    textColor={"dark"}
                    color={card.color}
                    status={card.status}
                    loadTasks={props.loadTasks}
                />)
            break
            default:
    }});

    return (
            <Row>
                <Col>
                    <h3>Backlog</h3>
                    <div className="column backlog">{backlog}</div>
                </Col>
                <Col>
                    <h3>Active</h3>
                    <div className="column active">{active}</div>
                </Col>
                <Col>
                    <h3>Done</h3>
                    <div className="column done">{done}</div>
                </Col>
            </Row>
        // <section className="board">
        //     <article className="column backlog">
        //         <h3>Backlog</h3>
        //         <div>{backlog}</div>
        //     </article>
        //     <article className="column active">
        //         <h3>Active</h3>
        //         <div>{active}</div>
        //     </article>
        //     <article className="column done">
        //         <h3>Done</h3>
        //         <div>{done}</div>
        //     </article>
        // </section>
    )
}

export default Board