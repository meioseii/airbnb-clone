import React from 'react'
import logo from '../public/assets/airbnb-logo.png'

function Navbar() {
    return (
        <nav className='navbar'>
            <img src={logo} className='navbar-logo'></img>
        </nav>
    )
}

export default Navbar
