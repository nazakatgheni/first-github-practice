import React, { useState } from 'react'

const PropItUp = (props) => {

    const { firstName, lastName, age, hairColor } = props;
    const [getOlder, setGetOlder] = useState(age)

    const addAge = () => {
        setGetOlder(getOlder + 1)
    }

    return (
        <div>
            <h1>{firstName},{lastName}</h1>
            <h2>Age: {getOlder}</h2>
            <h2>Hair Color: {hairColor}</h2>
            <button onClick={addAge}>Birthday Button For {firstName} {lastName}</button>
        </div>
    )
}

export default PropItUp
