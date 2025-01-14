'use client'
import HeaderMain from '@/components/Shared/HeaderMain';
import HeroSlider from '@/components/Pages/Home/HeroSlider';
import HeroMatches from '@/components/Pages/Home/HeroMatches';
import LiveMatches from '@/components/Pages/Home/LiveMatches';
import MiddleSlider from '@/components/Pages/Home/MiddleSlider';
import UpComingEvents from '@/components/Pages/Home/UpComingEvents';
import SwiperComponent from '@/components/Shared/SwiperSlider';
import CalendarSlider from '@/components/Pages/Home/CalendarSlider';
import { useState } from 'react';

export default function Home() {
  const [activeDate, setActiveDate] = useState('');

  return (
    <>
      <HeaderMain />
      {/* <SwiperComponent /> */}
      <CalendarSlider onDateChange={setActiveDate} />
      <HeroMatches activeDate={activeDate} setActiveDate={setActiveDate } />
      {/* <LiveMatches /> */}
      {/* <MiddleSlider /> */}
      {/* <UpComingEvents /> */}
    </>
  );
}
