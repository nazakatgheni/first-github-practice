import React from 'react'

const Display = ({ todoList, setTodoList }) => {

    const handleCheckBox = todo_id => {
        console.log(todo_id)
        let copyTodoList = [...todoList];

        const updatedCopyTodoList = copyTodoList.map((oneTodo, idx) => idx == todo_id ? {
            completed: !oneTodo.completed,
            todo: oneTodo.todo
        } : oneTodo);
        setTodoList(updatedCopyTodoList)
    }


    return (
        <div>
            {
                todoList.map((oneTodo, idx) => (
                    <div key={idx}>
                        <input type="checkbox" onChange={() => handleCheckBox(idx)} />
                        <p>{oneTodo.todo}</p>
                        <input type="submit" value="delete" />
                    </div>
                ))
            }
        </div>
    )
}

export default Display
