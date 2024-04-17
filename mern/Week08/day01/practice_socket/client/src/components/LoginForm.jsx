import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginForm = ({ userName, setUserName }) => {

    const navigate = useNavigate()

    const submitHandler = e => {
        e.preventDefault();
        navigate('/chat')
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <label htmlFor="username">Username:</label>
                <input type="text" onChange={e => { setUserName(e.target.value) }} />
                <button type='submit'>Login</button>
            </form>

        </div>
    )
}

export default LoginForm
