import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <h2>Navigation</h2>
            <Link to={'/'}>Go to Landing Page</Link>
            {/* this to is same as hraf in html for link*/}
            <br />
            <Link to={'/home'}>Go to Home</Link>
            <br />
            <Link to={'/unicorn'}>Unicorn</Link>
            <br />
            <Link to={'/form'}>Go to Form</Link>
        </div>
    )
}

export default Nav
