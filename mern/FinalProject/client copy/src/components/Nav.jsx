import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='navbar navbar-default' style={{ top: 0, left: 0 }}>
            <ul className='ml'>
                <li className='ml'>
                    <Link to='/'>go back home</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
