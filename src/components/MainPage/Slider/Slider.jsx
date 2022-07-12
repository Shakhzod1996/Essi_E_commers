import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";


import "./Slider.css";

import slider1 from '../../../assets/home-imgs/organic-slider1.jpg';
import slider2 from '../../../assets/home-imgs/organic-slider2.jpg';
import slider3 from '../../../assets/home-imgs/organic-slider3.jpg';


// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        // spaceBetween={30}
        effect={"fade"}
        navigation={true}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} />
          <div className='slider-header'>
            <h4>Shop Our freshest</h4>
            <h2>Fresh Hand-Picked Vegetables <span>Everyday!</span></h2>
            <a href="/">SHOP NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} />

          <div className='slider-header'>
          <h4>ELLESI STORE</h4>
            <h2>Fresh Vegetables Sale up to 30% off</h2>
            <a href="/">SHOP NOW</a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} />

          <div className='slider-header'>
            <h4>Daily Promotion</h4>
            <h2>Fresh Lemon up <span>40% off</span></h2>
            <a href="/">SHOP NOW</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
