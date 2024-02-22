import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
 
// import required modules
import { Navigation } from 'swiper/modules';

 const Swipper = ({ children, items = 1 }) => {
  return (
    <Swiper 
      // navigation={true} modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={items}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)} 
    >
      { 
        children.map(c => (
          <SwiperSlide>{c}</SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default Swipper