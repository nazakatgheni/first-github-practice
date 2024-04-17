import React from 'react'

const Assignment = (props) => {
    const todoList = [
        "Learn React",
        "Climb Mt.Everest",
        "Run a marathon",
        "Feed a dogs"
    ];
    {
        todoList.map((todo) => (<li>{todo}</li>
        ))
    }
    return (
        <div>
            <h1>Hello TechCircle</h1>
            <h2>Things i need to do:</h2>
            <ul>{todoList.map((todo) => (<li>{todo}</li>
            ))}</ul>
        </div>
    )
}


export default Assignment
