import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

export default function SwiperText() {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper text-center">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>wdwafs</SwiperSlide>
      </Swiper>
    </>
  );
}
