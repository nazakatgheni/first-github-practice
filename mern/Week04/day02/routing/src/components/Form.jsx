import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Form = () => {

    const navigate = useNavigate();
    const [word, setWord] = useState("");
    const [color, setColor] = useState("");

    const handleSubmit = e => {
        e.preventDefault()
        navigate(`/${word}/${color}`)
    }

    return (
        <div>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="word">Word</label>
                    <input type="text" onChange={e => setWord(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <input type="text" onChange={e => setColor(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default Form
