import React from 'react'
import style from './Footer.modules.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className='easy'>Easybank</div>
      <div className='about'>
        <p>About Us</p>
        <p>Contact</p>
        <p>Blog</p>
      </div>
      <div className='careers'>
        <p>Careers</p>
        <p>Suport</p>
        <p>Privacy</p>
      </div>
      <div >
        <button className="request">Request invite</button>
      </div>
    </div>
  )
}

export default Footer
