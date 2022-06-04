import React from 'react'
import './about.css'
import CODE from '../../assets/code.png'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={CODE} alt='Error' />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ years programming </small>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
           <p>
           Hi, I’m a Front-end developer with a knack in ReactJS, Javascript, HTML, CSS, GitHub and NodeJS. 
           I completed product engineering from School of Accelerated Learning (SOAL) and got my BCA degree fron Mahatma Gandhi University. 
           I like problem solving and creating art in my free time.
           </p> 
           <a href='#contact' className='btn btn-primary'>Let's Chat</a>
        </div>
      </div>
    </section>
  )
}

export default About