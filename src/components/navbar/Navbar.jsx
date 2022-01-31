import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.navbaritems}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </div>
      <div>
        <button className={style.request}>Request invite</button>
      </div>
    </div>
  )
}

export default Navbar
