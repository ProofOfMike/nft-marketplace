'use client';
import Image from 'next/image';
import { Tab } from '@headlessui/react';
import {
  tabOne,
  soccerMatch,
  basketballMatch,
  iceHockeyMatch,
} from '@/public/data/tabOne';
import { useState } from 'react';
import Calendar from './Calendar';

export default function HeroMatches({activeDate, setActiveDate }: any) {
  const [activeItem, setActiveItem] = useState(tabOne[0]);

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
                    {/* <div className="top_matches__title d-flex align-items-center gap-2 mb-4">
                      <Image
                        width={32}
                        height={32}
                        src="/images/icon/king.png"
                        alt="Icon"
                      />
                      <h3>Top Matches</h3>
                    </div> */}
                    <div className="top_matches__content">
                      <div className="singletab">
                        <p className="text-white font-bold my-3">{`Today’s matches`}</p>
                        <Calendar activeDate={activeDate} />
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
