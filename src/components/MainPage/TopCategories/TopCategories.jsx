import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css";
import "./TopCategories.css";

// import Swiper core and required modules
import SwiperCore, { Pagination } from "swiper/core";
import Container from "../../../Container/Container";
import { NavLink } from "react-router-dom";

// ?Imgs 
import top1 from "../../../assets/home-imgs/top1.jpg";
import top2 from "../../../assets/home-imgs/top2.jpg";
import top3 from "../../../assets/home-imgs/top3.jpg";
import top4 from "../../../assets/home-imgs/top4.jpg";
import top5 from "../../../assets/home-imgs/top5.jpg";
import top6 from "../../../assets/home-imgs/top6.jpg";
import top7 from "../../../assets/home-imgs/top7.jpg";
import top8 from "../../../assets/home-imgs/top8.jpg";
import top9 from "../../../assets/home-imgs/top9.jpg";

// install Swiper modules
SwiperCore.use([Pagination]);


export default function TopCategories({setBrowsShow}) {
  return (
    <div className="top-category">
      <h2 className="top_cat_h2">Top Categories</h2>
      <Container>
        <Swiper
          slidesPerView={6}
          slidesPerColumn={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          className="mySwiper sw"
        >
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="milks">
              <div><img src={top1} alt="img" /></div> <h4>Milk and Creams</h4>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="fruits">
              <div><img src={top2} alt="img" /></div> <h4>Fruits</h4>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="vegetables">
              <div><img src={top3} alt="" /></div> <h4>Vegetables</h4>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="nuts">
              <div><img src={top4} alt="img" /></div> <h4>Nut Gifts</h4>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="nuts">
              <div><img src={top5} alt="" /></div> <h4>Nutt and Seeds</h4>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="nuts">
              <div><img src={top6} alt="img" /></div> <h4>Fresh Tomatoes</h4>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="nuts">
              <div><img src={top7} alt="" /></div> <h4>Fresh Organic</h4>
            </NavLink>
          </SwiperSlide >
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="butters">
              <div><img src={top8} alt="" /></div> <h4>Butter and Eggs</h4>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide1" onClick={()=> setBrowsShow(false)}>
            <NavLink to="no-products">
              <div><img src={top9} alt="" /></div> <h4>Fresh Meat</h4>
            </NavLink>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
