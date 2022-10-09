import React from 'react'
import './footer.css'
import {FaFacebookF, FaGithub} from 'react-icons/fa'
import {BsInstagram, BsLinkedin} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'
import logo from '../../assets/wolf_logo.webp'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'><h3 className='footer_logo_head'>elisenwolf</h3><img src={logo} alt='logo' className='img'/></a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href='https://facebook.com/Elisenwolf25' target='_blank'><FaFacebookF /></a>
        <a href='https://www.instagram.com/elisen_wolf' target='_blank'><BsInstagram /></a>
        <a href='https://twitter.com/Elisenwolf' target='_blank'><IoLogoTwitter /></a>
        <a href='https://linkedin.com/in/elisenwolf/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/ELISENWOLF' target="_blank"><FaGithub/></a>
      </div>
    </footer>
  )
}

export default Footer