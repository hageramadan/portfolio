import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from'react-icons/fa'
import {FiUsers} from'react-icons/fi'
import {AiOutlineFolderOpen} from'react-icons/ai'
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt="about me" />
            </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
                 <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years Worrking</small>
            </article>

            <article className='about__card'>
                 <FiUsers className='about__icon'/>
                <h5>Clients</h5>
                <small>200+ WorldWide</small>
            </article>

            <article className='about__card'>
                 <AiOutlineFolderOpen className='about__icon'/>
                <h5>Projects</h5>
                <small>40+ Completed</small>
            </article>

          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod harum nesciunt asperiores qui voluptate, nihil necessitatibus optio ullam praesentium 
            labore reiciendis, repudiandae, aliquam amet quia reprehenderit quo pariatur. Dolore.
         </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;