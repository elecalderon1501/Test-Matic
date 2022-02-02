import React from 'react'
import  './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbaritems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <button className="request">Request invite</button>
      </div>
    </div>
  )
}

export default Navbar
