import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {RiFacebookCircleFill} from 'react-icons/ri'
import {RiInstagramLine} from 'react-icons/ri'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>PTFOI</a>
      <ul className="permalink">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#servic">Services</a></li>
        <li><a href="#portofolio">Portfolio</a></li>
        <li><a href="#testemonial">Testimonial</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=100015091325704"><RiFacebookCircleFill className='f-icons'/></a>
          <a href="https://www.instagram.com/hagerramadan5/"><RiInstagramLine className='f-icons'/></a>
          <a href="https://twitter.com/HaGerRa43213763"><IoLogoTwitter className='f-icons'/></a>
      </div>
      <div className="footer__copy">
        <small>&copy; PTFOI All Right Reserved 2022</small>
      </div>
        

        

 
    </footer>
  )
}

export default Footer