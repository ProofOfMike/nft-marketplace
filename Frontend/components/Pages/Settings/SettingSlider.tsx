'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IconBallFootball } from '@tabler/icons-react';

export default function SettingSlider() {
  return (
    <>
      <section className="hero_area pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-sm-4">
              <div className="hero_area__main">
                <div className="row w-100">
                  <div className="col-12">
                    <div className="live-playing">
                      <div className="hero_area__topslider swiper-wrapper">
                        <h3 className='ps-2 ps-md-0'>Settings</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
