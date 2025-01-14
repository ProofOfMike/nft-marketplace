'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IconBallFootball } from '@tabler/icons-react';

const matchData = [
  {
    venue: 'Stamford Bridge',
    week: 'Week 10',
    homeTeam: {
      name: 'Chelsea',
      icon: '/images/icon/chelsea.png',
      status: 'Home',
    },
    awayTeam: {
      name: 'Man Utd',
      icon: '/images/icon/man-utd.png',
      status: 'Away',
    },
    score: '1 : 1',
    time: '90+4',
  },
];

const MatchCard = ({ match }: any) => (
  <div className="hero_area__topslider-card swiper-slide p-4 p-md-6">
    <div className="hero_area__topslider-cardtop text-center mb-4 mb-md-6">
      <span className="fs-ten d-block mb-1">{match.venue}</span>
      <span className="n3-color cpoint">{match.week}</span>
    </div>
    <div className="hero_area__topslider-cardbody d-flex align-items-center justify-content-between mb-4 mb-md-6">
      <div className="hero_area__topslider-flag d-center flex-column">
        <Image
          className="mb-2"
          src={match.homeTeam.icon}
          width={64}
          height={64}
          alt="Icon"
        />
        <span className="cpoint fs-seven mb-1">{match.homeTeam.name}</span>
        <span className="n3-color fs-eight">{match.homeTeam.status}</span>
      </div>
      <div className="hero_area__topslider-scr">
        <h3 className="mb-2">{match.score}</h3>
        <span className="fs-seven py-1 px-2 rounded-5 cpoint">
          {match.time}
        </span>
      </div>
      <div className="hero_area__topslider-flag text-end d-flex flex-column justify-content-center align-items-center">
        <Image
          className="mb-2"
          src={match.awayTeam.icon}
          width={64}
          height={64}
          alt="Icon"
        />
        <span className="cpoint fs-seven mb-1">{match.awayTeam.name}</span>
        <span className="n3-color fs-eight">{match.awayTeam.status}</span>
      </div>
    </div>
  </div>
);

export default function MiddleSlider() {
  return (
    <section className="top_matches py-6">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 gx-0 gx-sm-4">
            <div className="top_matches__main">
              <div className="row w-100">
                <div className="col-12">
                  <div className="live-playing2">
                    <div className="hero_area__topslider swiper-wrapper">
                      <Swiper
                        className="slider_hero"
                        loop
                        speed={5000}
                        autoplay={{ delay: 0 }}
                        slidesPerView="auto"
                        modules={[Autoplay]}
                        breakpoints={{
                          0: { slidesPerView: 1 },
                          480: { slidesPerView: 1.5, spaceBetween: 20 },
                          575: { slidesPerView: 2, spaceBetween: 20 },
                          991: { slidesPerView: 2, spaceBetween: 20 },
                          1499: { slidesPerView: 3, spaceBetween: 24 },
                          1799: { slidesPerView: 3.5, spaceBetween: 24 },
                        }}
                      >
                        {matchData.map((match, index) => (
                          <SwiperSlide key={index}>
                            <MatchCard match={match} />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
