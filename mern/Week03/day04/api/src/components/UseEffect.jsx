import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        // most of the time we use api in useeffect
        // inside the arrow function is side effect
        // alert("THIS IS USEEFFECT")
        // never use setCount in sideEffect, other vise it will infinitely looping 
        console.log("UseEffect is running")
    }, [])
    // [] dependency array/effect 

    return (
        <div>
            <h1>This is From UseEffect Component</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click here</button>
        </div>
    )
}

export default UseEffect
