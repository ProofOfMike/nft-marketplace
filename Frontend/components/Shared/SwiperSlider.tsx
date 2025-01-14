'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/navigation'; // For App Router
import { nflMatch } from '@/public/data/tabOne';
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from 'swiper/modules';
import Team1 from '@/public/images/team1.png';
import Team2 from '@/public/images/team2.png';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './swiper.css'; // Import your custom CSS

const SwiperComponent = ({filteredMatched}: any) => {
  const router = useRouter(); // Initialize useRouter

  const handleSlideClick = (id: string) => {
    router.push(`/details/${id}`); // Navigate to the details page with the ID
  };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      loop={true} // Loop enabled
      pagination={{ clickable: true }}
      // navigation={true}
      // scrollbar={{ draggable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
    >
      {filteredMatched?.map(
        ({ id, times, clubone, clubtwo, clubNameOne, clubNameTwo }: any) => (
          <SwiperSlide
            key={id}
            onClick={() => handleSlideClick(id)}
            style={{
              // backgroundColor: '#13A6D4',
              height: '13.5rem',
              borderRadius: '20px',
              cursor: 'pointer',
            }}
          >
            <div style={{ color: 'white' }}>
              <div className="d-flex justify-content-between mt-3">
                <div className="ps-10 d-flex align-items-center gap-1">
                  <Image
                    src="/images/icon/team_icon.png"
                    width={20}
                    height={20}
                    alt="Team Icon"
                  />
                  <span className="fs-eight cpoint">NFL</span>
                </div>
                <div className="d-flex align-items-center gap-4 pe-10 flex-nowrap flex-xl-wrap">
                  <span className="fs-eight cpoint">{times}</span>
                </div>
              </div>
              <div className="mt-5 container d-flex justify-content-between align-items-center col-12">
                <div className='m-2 m-sm-5'>
                  <div
                    style={{
                      padding: '5px',
                      backgroundColor: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      width={80}
                      height={80}
                      src={Team1}
                      alt={'team1'}
                      style={{
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                      }}
                    />
                  </div>
                  <p className="text-center">{clubNameOne}</p>
                </div>
                <div
                className='m-2 m-sm-5'
                  style={{
                    border: '1px solid #1F1F1F',
                    padding: '8px',
                    borderRadius: '50%',
                  }}
                >
                  <h1 className="fs-6 text-center">VS</h1>
                </div>
                <div className='m-2 m-sm-5'>
                  <div
                    style={{
                      padding: '5px',
                      backgroundColor: 'white',
                      width: '80px',
                      height: '80px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Image
                      width={80}
                      height={80}
                      src={Team2}
                      alt={'team2'}
                      style={{
                        borderRadius: '50%',
                        width: '80px',
                        height: '80px',
                      }}
                    />
                  </div>
                  <p className="text-center">{clubNameTwo}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default SwiperComponent;
