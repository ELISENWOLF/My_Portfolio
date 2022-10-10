import React from 'react'
import {BsLinkedin,BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com/in/elisenwolf/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/ELISENWOLF' target="_blank" rel='noreferrer'><FaGithub/></a>
        <a href='https://www.instagram.com/elisen_wolf' target="_blank" rel='noreferrer'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial