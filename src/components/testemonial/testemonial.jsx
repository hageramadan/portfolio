import React from 'react'
import './testemonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testemonial = () => {
  return (
    <section id='testemonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testmo__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
               
                pagination={{ clickable: true }}
               
      
      >
          <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR1} alt="avatar1" />
                
              </div>
              <h5 className="client__name">Erent Chiven</h5>
                <small className="client__review">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla.
                </small>
          </SwiperSlide>
          {/*2*/}
          <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR2} alt="avatar2" />
              </div>
              <h5 className="client__name">Chiven Grey</h5>
                <small className="client__review">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla.
                </small>
          </SwiperSlide>
          {/*3*/}
          <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR3} alt="avatar3" />
              </div>
              <h5 className="client__name">Marc Taya</h5>
                <small className="client__review">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla.
                </small>
          </SwiperSlide>
          {/*4*/}
          <SwiperSlide className="testimonial">
              <div className="client__avatar">
                <img src={AVTR4} alt="avatar4" />
              </div>
              <h5 className="client__name">Sofi Aly</h5>
                <small className="client__review">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quos aliquam nisi quo assumenda provident, quaerat temporibus eius labore eligendi omnis impedit dolorum rerum cupiditate facilis quibusdam porro id nulla.
                </small>
          </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testemonial