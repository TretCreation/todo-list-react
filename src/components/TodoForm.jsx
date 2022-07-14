import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import {
    Card,
    Col,
    Container,
    Row,
} from 'react-bootstrap';

const TodoForm = () => {
    
    const [todos, setTodos] = useState([
        {id: 0, number: 1, description: 'Wake up'},
        {id: 1, number: 2, description: 'Find my keys'},
        {id: 2, number: 3, description: 'Drive the car'},
        {id: 3, number: 4, description: 'Are you winning son?'},
        {id: 4, number: 5, description: "No dad It's shame"},
    ])

    return (
        <div>
            <Container className="mt-5" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Row style={{ width: '720px'}}>
                    <Col>
                        <Card className="shadow-lg text-center">
                        <Card.Header
                            className="p-3"
                            style={{ backgroundColor: 'orange' }}
                        >
                            <h4>Todo list</h4>
                        </Card.Header>
                        <Card.Body>
                            <TodoInput/>

                            {/* <TodoItem todo={{number: 0, description: 'One Two Three'}}/> */}
                            {todos.map((e) => <TodoItem todo={e} key={e.id}/>)}

                        </Card.Body>
                        </Card> 
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TodoForm;