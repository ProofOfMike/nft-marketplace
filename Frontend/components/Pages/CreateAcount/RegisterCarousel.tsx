// components/SwiperCarousel.js
'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const RegisterCarousel: React.FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      // pagination={{ clickable: true }} // Enable pagination
      // navigation={true} // Enable navigation
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false, // Autoplay will not be disabled on interaction
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    >
      <SwiperSlide>
        <Image
          src="/images/login.png"
          alt="Login Image 1"
          width={996}
          height={945}
          layout="responsive"
          className="w-100"
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/images/login.png"
          alt="Login Image 2"
          width={996}
          height={945}
          layout="responsive"
          className="w-100"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default RegisterCarousel;
