import React from 'react';
import { Card } from 'react-bootstrap';

const TodoItem = (props) => {
    return (
        <div>
            <Card>
                <Card.Header>{props.todo.number}</Card.Header>
                <Card.Body>
                    {props.todo.description}
                </Card.Body>
            </Card>
        </div>
    );
};

export default TodoItem;
