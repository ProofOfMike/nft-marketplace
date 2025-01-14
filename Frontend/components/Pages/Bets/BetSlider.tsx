'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import FilterIcon from '@/public/images/icon/filter.svg';
import BetTabComponent from './BetTabComponnet';
import FilterModal from '@/components/Shared/FilterModal';

export default function BetSlider() {
  const [isHomeTab, setIsHomeTab] = useState('bet-peer');
  const [isFilterModal, setIsFilterModal] = useState(false);
  return (
    <>
      <section className="hero_area pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-sm-4">
              <div className="hero_area__main">
                <div className="row">
                  <div className="col-11 mx-auto">
                    <div className="live-playing">
                      <div className="mb-6 hero_area__topslider swiper-wrapper">
                        <h3>My Bets</h3>
                        <button onClick={() => setIsFilterModal(true)}>
                          <Image
                            src={FilterIcon}
                            alt="FilterIcon"
                            width={30}
                            height={30}
                          />
                        </button>
                      </div>
                      <BetTabComponent
                        isHomeTab={isHomeTab}
                        setIsHomeTab={setIsHomeTab}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FilterModal show={isFilterModal} setShow={setIsFilterModal} isBetPage={true} />
    </>
  );
}
