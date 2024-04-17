import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <h1>Nav Bar</h1>
            <div>
                <Link to={'/'}>Go to Home</Link> | <Link to={'/people'}>Go to People</Link>
            </div>
        </div>
    )
}

export default Nav
