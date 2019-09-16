import React from 'react';

function Board(props) {
    let backlog = [];
    let active = [];
    let done = [];
    return (
        <section className="board">
            <article className="column backlog">
                <h3>Backlog</h3>
                <div>{backlog}</div>
            </article>
            <article className="column active">
                <h3>Active</h3>
                <div>{active}</div>
            </article>
            <article className="column done">
                <h3>Done</h3>
                <div>{done}</div>
            </article>
        </section>
    )
}

export default Board