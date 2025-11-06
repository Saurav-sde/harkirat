import React, { useState } from "react";

export default function App() {
    // useRef, react-hook-form :- move to this for managing form
    // or by using more state variables : - avoid this 
    const [todos, setTodos] = useState([
        {
            title: "Go to Gym",
            description: "Hit the Gym regularly",
            done: false
        }
    ]);

    function addTodo() {
        setTodos([...todos, {
            title: document.getElementById('title').value,
            description: document.getElementById('description').value,
            done: true
        }]);
    }
    return (
        <div>
            <input id="title" type="text" placeholder="Title"></input>
            <input id="description" type="text" placeholder="description"></input>
            <br />
            <button onClick={addTodo}>Add Todo</button>
            <br />
            {
                todos.map((todo) => (
                    <Todo title={todo.title} description={todo.description} done={todo.done}></Todo>
                ))
            }
        </div>
    )
}

function Todo(props) {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.desciption}</h2>
            <h3>{props.done ? "Task is done" : "Task is not done"}</h3>
        </div>
    )
}