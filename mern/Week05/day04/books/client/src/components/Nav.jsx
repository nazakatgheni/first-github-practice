import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='d-flex justify-content-between align-items-center'>
            <h1>First Full-Stack App</h1>
            {/*                                   this is width */}
            <div className='d-flex justify-content-around w-30'>
                {/* <Link to='/'>Home</Link> &nbsp;|&nbsp;
                <Link to='/books/create'>Create a New Book</Link> */}
                {/* <Link to='/books/:id'>Display One Book</Link> */}

                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link active'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/books/create' className='nav-link'>Create a New Book</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
