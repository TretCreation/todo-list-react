import React, { useState } from 'react';
import TodoForm from './components/TodoForm';

function App() {
    // const [todos, setTodos] = useState([
    //     { id: 0, number: 1, description: 'Wake up' },
    //     { id: 1, number: 2, description: 'Find my keys' },
    //     { id: 2, number: 3, description: 'Drive the car' },
    //     { id: 3, number: 4, description: 'Are you winning son?' },
    //     { id: 4, number: 5, description: "No dad It's shame" },
    // ]);

    // const [description, setDescription] = useState('');

    // const addNewTodo = (e) => {
    //     e.preventDefault();
    //     console.log(description);
    // };

    return (
        <div className="App">
            {/* //        <form>
    //             <input
    //                 value={description}
    //                 onChange={(e) => setDescription(e.target.value)}
    //                 type="text"
    //                 placeholder="todo..."
    //             />
    //             <button onClick={addNewTodo}>New Todo</button>
    //         </form> */}
            <TodoForm />
        </div>
    );
}

export default App;
