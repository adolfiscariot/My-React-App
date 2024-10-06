import React from 'react'
import Logo from '../Assets/adept logo.png'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='logo'>
            <img src = {Logo} />
        </div>
        <div className='nav-items'>
            <a href = ''>Courses</a>
            <a href = ''>About Us</a>
            <a href = ''>Pricing</a>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar