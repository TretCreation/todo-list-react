import React, { useState } from 'react';
import {
    Button,
    Form,
    InputGroup,
} from 'react-bootstrap';

const TodoInput = () => {
    const [description, setDescription] = useState('asfas')

    const adddNewTodo = () => {
        // const newPost = {
        //     number,
        // }
    }

    return (
        <div>     
            <InputGroup className="mb-3">
                <Form.Control
                    placeholder="Todo..."
                    aria-label="Todo..."
                    aria-describedby="basic-addon2"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Button onChange={adddNewTodo} variant="outline-secondary" id="button-addon2">
                    Click
                </Button>
            </InputGroup>
        </div>
    );
};

export default TodoInput;