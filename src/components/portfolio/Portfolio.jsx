import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/imdb.webp'
import IMG2 from '../../assets/slack.webp'
import IMG3 from '../../assets/puzzle.webp'
import IMG4 from '../../assets/imgur.webp'
import IMG5 from '../../assets/sudoku.webp'
import IMG6 from '../../assets/insurance_plum.webp'
import IMG7 from '../../assets/website Design.webp'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG1} alt='IMDB' />
          </div>
          <h3>Imdb_Clone</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/IMDB_Clone" className='btn' target='_blank'>Github</a>
            <a href="https://elisen-emdb.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG2} alt='SLACK' />
          </div>
          <h3>Slack_Clone</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Slack_Clone" className='btn' target='_blank'>Github</a>
            <a href="http://elisenslack.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG3} alt='IMAGE PUZZLE' />
          </div>
          <h3>Image Puzzle</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Image_Puzzle" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG4} alt='IMGUR' />
          </div>
          <h3>Imgur-Frontend</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Imgur_Frontend" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG5} alt='SUDOKU' />
          </div>
          <h3>Sudoku Solver</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Sudoku" className='btn' target='_blank'>Github</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG6} alt='insurance_plum' />
          </div>
          <h3>INSURE_Design</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Insurance_Plum" className='btn' target='_blank'>Github</a>
            <a href="http://insuranceplum.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item_image">
            <img src={IMG7} alt='SLACK' />
          </div>
          <h3>ACME Frontend Design</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/ELISENWOLF/Responsive_webpage" className='btn' target='_blank'>Github</a>
            <a href="https://mitsogoassessment.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio