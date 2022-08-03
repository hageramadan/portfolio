import React from 'react'
import './contact.css';
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {VscTwitter} from 'react-icons/vsc';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lbd2b07', 'template_fl1bozl', form.current, '4J1yKZncLFforgfrE')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className='contact-icon'/>
              <h4>Email</h4>
              <h5>hagerr440@gmail.com</h5>
              <a href="mailto:hagerramadan440@gmail.com" target='_blank'>Send a message</a>
            </article>
            {/*2*/}
            <article className="contact__option">
              <RiMessengerLine className='contact-icon'/>
              <h4>Messenger</h4>
              <h5>Hager Ramadan</h5>
              <a href="https://www.facebook.com/messages/t/100015091325704" target='_blank'>Send a message</a>
            </article>
            {/*3*/}
            <article className="contact__option">
              <VscTwitter className='contact-icon'/>
              <h4>Twitter</h4>
              <h5>@HaGerRa43213763 </h5>
              <a href="https://twitter.com/HaGerRa43213763" target='_blank'>Send a message</a>
            </article>
          </div>
          {/*end of option*/}
          <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder='Your Full Name' required/>
              <input type="text" name="Email" placeholder='Your Email' required/>
              <textarea name="message" rows="7" placeholder='Yor Message' requared></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
    </section>
  )
}

export default Contact