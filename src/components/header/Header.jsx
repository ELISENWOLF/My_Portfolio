import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/cv_profile.webp'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h4>Hello I'm</h4>
        <h1>Aravind Prakash</h1>
        <h4 className="text-light">Front-end Developer</h4>
        <CTA />
        <HeaderSocial />
        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
       
      </div>
    </header>
  )
}

export default Header