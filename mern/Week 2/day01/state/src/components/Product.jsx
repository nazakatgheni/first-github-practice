import React, { useState } from 'react'

// useState is 2 element array getter AND setter, props is for display it's object
const Product = (props) => {
    const { productName, price, desc, inStock } = props
    //       getter        setter
    const [allInStock, setAllInStock] = useState(inStock);

    // for the setter always begins with set and it has to be camel case, getter will get the most current data, setter will update and display the data.
    // useState is method, we have to use (), it returns array

    const h1Alert = () => {
        alert("You click on this event")
    }
    // either this or arrow function in h1 tag
    return (
        <div>
            {/* <h1 onClick={() => { alert("You click on this event") }}>This is a component</h1> */}
            {/* onClick event arrow function - event */}
            <h1>{productName}</h1>
            <h2>${price}</h2>
            <h2>{desc}</h2>
            <h3>In Stock: {allInStock}</h3>
            <button onClick={() => { setAllInStock(allInStock - 1) }}>Buy {productName}</button>
        </div>
    )
}

export default Product
