/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Chloe Allen',
    review: 'Veniam aliquip id eu pariatur sunt culpa. Tempor nostrud sunt ad sunt exercitation. Est est ad ullamco et in dolore voluptate ullamco. Do ullamco adipisicing ut cillum adipisicing nostrud. Ea anim eiusmod aute aute. Aliqua commodo amet officia officia sit ex reprehenderit laboris eiusmod cupidatat fugiat nostrud consectetur.'
  },
  {
    avatar: AVTR2,
    name: 'Harry Davidson',
    review: 'Veniam aliquip id eu pariatur sunt culpa. Tempor nostrud sunt ad sunt exercitation. Est est ad ullamco et in dolore voluptate ullamco. Do ullamco adipisicing ut cillum adipisicing nostrud. Ea anim eiusmod aute aute. Aliqua commodo amet officia officia sit ex reprehenderit laboris eiusmod cupidatat fugiat nostrud consectetur.'
  },
  {
    avatar: AVTR3,
    name: 'Thomas Nixon',
    review: 'Veniam aliquip id eu pariatur sunt culpa. Tempor nostrud sunt ad sunt exercitation. Est est ad ullamco et in dolore voluptate ullamco. Do ullamco adipisicing ut cillum adipisicing nostrud. Ea anim eiusmod aute aute. Aliqua commodo amet officia officia sit ex reprehenderit laboris eiusmod cupidatat fugiat nostrud consectetur.'
  },
  {
    avatar: AVTR4,
    name: 'Isabella Dwivedi',
    review: 'Veniam aliquip id eu pariatur sunt culpa. Tempor nostrud sunt ad sunt exercitation. Est est ad ullamco et in dolore voluptate ullamco. Do ullamco adipisicing ut cillum adipisicing nostrud. Ea anim eiusmod aute aute. Aliqua commodo amet officia officia sit ex reprehenderit laboris eiusmod cupidatat fugiat nostrud consectetur.'
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
      </section>
  )
}

export default Testimonials