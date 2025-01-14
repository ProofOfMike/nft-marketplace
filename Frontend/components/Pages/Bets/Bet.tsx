'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { IconBallFootball } from '@tabler/icons-react';
import { Tab } from '@headlessui/react';
import {
  tabOne,
  soccerMatch,
  basketballMatch,
  iceHockeyMatch,
} from '@/public/data/tabOne';
import { tabBet } from '@/public/data/tabBet';
import { useState } from 'react';

export default function TopSlider() {
  const [activeItem, setActiveItem] = useState(tabBet[0]);
  const options = [
    {
      label: <span>Peer To Peer</span>,
      value: 'p2p',
      selectedBackgroundColor: '#0097e6',
    },
    {
      label: 'Friend To Friend',
      value: 'f2f',
      selectedBackgroundColor: '#0097e6',
    },
  ];

  const onChange = (newValue: any) => {
    console.log(newValue);
  };

  const initialSelectedIndex = options.findIndex(
    ({ value }) => value === 'bar'
  );
  const handleClick = (itemName: any) => {
    setActiveItem(itemName);
  };
  const getItemStyle = (itemName: any) => {
    return {
      border: `1px solid ${activeItem === itemName ? '#35C31E' : '#2C3655'}`,
    };
  };
  return (
    <>
      <section className="top_matches">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-lg-4">
              <div className="top_matches__main">
                <div className="row w-100">
                  <div className="col-12">
                    <div className="top_matches__content">
                      <div className="singletab"></div>
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
