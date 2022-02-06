import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <header>
                <Link to='/'>Logo</Link>
                <nav>
                        <Link to="/">Home</Link>
                        <Link to="blogs/">Blogs</Link>
                        <Link to="contact/">Contact</Link>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
