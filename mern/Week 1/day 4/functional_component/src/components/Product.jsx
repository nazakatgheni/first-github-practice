import React from 'react'

const Product = (props) => {
    return (
        <div>
            <h1>Hello Product Component</h1>
            {/* <h2>Water</h2>
            <p>Discription; Just add 2 cups of water</p>
            <p>Price: $4.99</p> */}
            <h2><props className="product"></props></h2>
        </div>
    )
}

export default Product
