import React, { useState } from 'react'

const Form = ({ todoList, setTodoList }) => {

    // initialize state for a new todo item
    //       either can pass empty string or obj
    //     thi sis gonna store single todoList
    const [newTodo, setNewTodo] = useState({
        todo: "",
        completed: false
    })

    const handleSubmit = e => {
        e.preventDefault();
        // add new todo item to the todo list
        setTodoList([...todoList, newTodo])
        //  reset the input field
        setNewTodo({
            todo: "",
            completed: false
        })
    }

    // Function to update the todo text as user types
    const createTodo = e => {
        setNewTodo({
            todo: e.target.value,
            completed: false
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="todo" className="form-label" style={{ marginRight: "25px" }}>Add Todo</label>
                    <input type="text" className="form-control" onChange={createTodo} value={newTodo.todo} />
                </div>
                <input type="submit" value="Add" style={{ marginTop: "25px" }} className="btn btn-success" />
            </form>
        </div>
    )
}

export default Form
