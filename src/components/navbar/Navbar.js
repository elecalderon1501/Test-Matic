import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>
        {/* <h2>easy bank</h2> */}
      </div>
      <div className={style.items}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <button>Request invite</button>
    </div>
  )
}

export default Navbar
