import React from 'react'

const Person = (props) => {
    return (
        <div>
            <h1>Hello People</h1>
            <h2>{props.personFirstName}</h2>
            <h2>{props.personLastName}</h2>
        </div>
    )
}

export default Person
