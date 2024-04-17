import React, { useState } from 'react'

const FormTwo = (props) => {
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirm_pass: ''
    });
    // the reason why we use object is element is in obj

    const handleNewUser = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        setNewUser({ ...newUser, [e.target.name]: e.target.value })

    }
    // we did copied the current value by using spread or rest
    //? The e variable contains all sorts of nifty event information, where e.target is the "target" of the the event, in other words the <input /> element, and e.target.value is the information currently typed into the input.

    const createNewUser = e => {
        e.preventDefault();
        console.log(e)
        setNewUser({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirm_pass: ''
        })
        // we have to reset setNewUser again bc when we enter info it's gonna send everything into backend and not gonna refresh the page, after we enter value={newUser.fn or ls or password} the page gonna refresh the page, unless its not gonna refresh.
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={createNewUser}>
                <div>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" name='firstName' onChange={handleNewUser} value={newUser.firstName} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" name='lastName' onChange={handleNewUser}
                        value={newUser.lastName} />
                </div>
                <div>
                    <label htmlFor="email">Email Address: </label>
                    <input type="email" name='email' onChange={handleNewUser} value={newUser.email} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" name='password' onChange={handleNewUser} value={newUser.password} />
                </div>
                <div>
                    <label htmlFor="confirm_pass">Confirm Password: </label>
                    <input type="password" name='confirm_pass' onChange={handleNewUser} value={newUser.confirm_pass} />
                </div>
                <button>Create</button>
            </form>
            {/* <input type="submit" value="" /> 
                <button type=submit><button/>
            if its outside the form we have to confirm input type is submit*/}
            <div>
                <h1>Welcome, {newUser.firstName} {newUser.lastName}</h1>
                {/* we use newUser.fn ls bc newUser is an obj */}
                <h2>Email: {newUser.email}</h2>
            </div>
        </div>
    )
}

export default FormTwo
