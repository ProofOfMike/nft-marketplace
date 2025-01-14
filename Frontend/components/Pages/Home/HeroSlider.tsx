'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IconBallFootball } from '@tabler/icons-react';
import Calendar from './Calendar';
import SwiperComponent from '@/components/Shared/SwiperSlider';

export default function TopSlider({filteredMatched}: any) {
  return (
    <>
      <SwiperComponent filteredMatched={filteredMatched} />
    </>
  );
}
