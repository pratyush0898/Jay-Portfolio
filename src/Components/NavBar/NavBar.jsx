import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='NavBar'>
      <div className="right">
        <div className="logo">
            <span>JAY</span>
        </div>
      </div>
      <div className="left">
        <ul className='NavLinks'>
          <li className='NavLink'>Home</li>
          <li className='NavLink'>About</li>
          <li className='NavLink'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
