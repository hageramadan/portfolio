import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
const Portofolio = () => {
  const blank="_blank";
  return (
    <section id='portofolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
              <img src={IMG1} alt="port1" />
          </div>
          <h3>Blood Bank</h3>
          <div className="portfolio__item-cta">
              <a href="https://github.com/hageramadan/bloodbank" className="btn" target={blank}>GitHub</a>
              <a href="https://hageramadan.github.io/bloodbank/" className='btn btn-primary' target={blank}>Live Demo</a>
          </div>
         
        </article>
        {/*2*/}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
              <img src={IMG2} alt="port1" />
          </div>
          <h3>Chinese Food</h3>
          <div className="portfolio__item-cta">
              <a href="https://github.com/hageramadan/restaurant" className="btn" target={blank}>GitHub</a>
              <a href="https://hageramadan.github.io/restaurant/" className='btn btn-primary' target={blank}>Live Demo</a>
          </div>
        
        </article>
        {/*3*/}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
              <img src={IMG3} alt="port1" />
          </div>
          <h3>Fashion Clothing Store</h3>
          <div className="portfolio__item-cta">
              <a href="https://github.com/hageramadan/e-commerce" className="btn" target={blank}>GitHub</a>
              <a href="https://hageramadan.github.io/e-commerce/" className='btn btn-primary' target={blank}>Live Demo</a>
          </div>
        
        </article>
        {/*4*/}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
              <img src={IMG4} alt="port1" />
          </div>
          <h3>Hospital</h3>
          <div className="portfolio__item-cta">
              <a href="https://github.com/hageramadan/bloodbank" className="btn" target={blank}>GitHub</a>
              <a href="https://hageramadan.github.io/bloodbank/" className='btn btn-primary' target={blank}>Live Demo</a>
          </div>
         
        </article>
        {/*5*/}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
              <img src={IMG5} alt="port1" />
          </div>
          <h3>Restaurant</h3>
          <div className="portfolio__item-cta">
              <a href="https://github.com/hageramadan/restaurant" className="btn" target={blank}>GitHub</a>
              <a href="https://hageramadan.github.io/restaurant/" className='btn btn-primary' target={blank}>Live Demo</a>
          </div>
       
        </article>
        {/*6*/}
        <article className="portfolio__item">
          <div className="portfolio__item-img">
              <img src={IMG6} alt="port1" />
          </div>
          <h3>E-commerce Store</h3>
          <div className="portfolio__item-cta">
              <a href="https://github.com/hageramadan/e-commerce" className="btn" target={blank}>GitHub</a>
              <a href="https://hageramadan.github.io/e-commerce/" className='btn btn-primary' target={blank}>Live Demo</a>
          </div>
       
        </article>
      </div>
    </section>
  )
}

export default Portofolio


/*=================Link in github=========*/
/*
https://github.com/hageramadan
<a href="https://hageramadan.github.io/bloodbank/index.html" className="btn" target='_blank'>bloodbank</a>
         <a href="https://hageramadan.github.io/restaurant/ " className='btn btn-primary' target='_blank'>Live Demo restaurant</a>
        <a href="https://hageramadan.github.io/e-commerce/index.html">e-commerce</a>


*/