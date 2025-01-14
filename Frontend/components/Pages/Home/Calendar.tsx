'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './Calendar.css';
import { nflMatch } from '@/public/data/tabOne';
import { useRouter } from 'next/navigation';
import Team1 from '@/public/images/team1.png';
import Team2 from '@/public/images/team2.png';
import HeroSlider from './HeroSlider';

const Calendar = ({activeDate}: any) => {
  const router = useRouter();

  const handleSlideClick = (id: string) => {
    router.push(`/details/${id}`);
  };

  const getMatchDate = (time: string) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    if (time.toLowerCase().includes('today')) {
      return today.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    } else if (time.toLowerCase().includes('tomorrow')) {
      return tomorrow.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
      });
    } else {
      try {
        const matchDate = new Date(time);
        return matchDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        });
      } catch (error) {
        console.error('Invalid date format:', time);
        return '';
      }
    }
  };

  const filteredMatches = nflMatch.filter(({ times }) => {
    const matchDate = getMatchDate(times);
    return matchDate === activeDate;
  });

  return (
    <>
      {filteredMatches.length === 0 ? (
        <div className="row d-flex d-center">
          <div className="col-10 mx-auto d-flex d-center">
            <Image
              width={300}
              height={300}
              src="/images/home.png"
              alt="No Matches"
            />
          </div>
          <p className="mt-md-5 d-center">No Matches Available</p>
        </div>
      ) : (
        <>
            <HeroSlider filteredMatched={filteredMatches} />
          <div className="row">
            <div className="calendar-container">
              <div className="top_matches__content">
                {filteredMatches.map(
                  ({
                    id,
                    times,
                    clubNameOne,
                    clubNameTwo,
                  }) => (
                    <div
                      className="top_matches__cmncard p2-bg p-4 rounded-3 mb-4 cursor-pointer"
                      key={id}
                      onClick={() => handleSlideClick(id)}
                    >
                      <div className="row gx-0 gy-xl-0 gy-7">
                        <div className="top_matches__clubname">
                          <div className="top_matches__cmncard-right d-flex align-items-start justify-content-between pb-4 mb-4 gap-4">
                            <div className="d-flex align-items-center gap-1">
                              <Image
                                src="/images/icon/team_icon.png"
                                width={20}
                                height={20}
                                alt="Team Icon"
                              />{' '}
                              <span className="fs-eight cpoint">NFL</span>
                            </div>
                            <div className="d-flex align-items-center gap-4 pe-xl-15 flex-nowrap flex-xl-wrap">
                              <span className="fs-eight cpoint">{times}</span>
                            </div>
                          </div>
                          <div className="top_matches__cmncard-left d-flex align-items-center justify-content-between">
                            <div className="col-12 d-flex gap-4 gap-sm-10 d-center">
                              <div className="col-5 d-flex justify-content-end align-items-center gap-1 gap-sm-4">
                                <span
                                className='fs-7 fs-sm-4'
                                  style={{
                                    fontWeight: 500,
                                  }}
                                >
                                  {clubNameOne}
                                </span>
                                <Image
                                  src={Team1}
                                  width={24}
                                  height={24}
                                  alt="Club One Icon"
                                  style={{ width: '24px', height: '24px' }}
                                  className="rounded-circle"
                                />
                              </div>
                              <div
                                className="col-2 d-flex d-center"
                                style={{ width: 10 }}
                              >
                                VS
                              </div>
                              <div className="col-5 d-flex justify-content-start  align-items-center gap-1 gap-sm-4">
                                <Image
                                  src={Team2}
                                  width={24}
                                  height={24}
                                  alt="Club Two Icon"
                                  style={{ width: '24px', height: '24px' }}
                                  className="rounded-circle"
                                />
                                <span
                                className='fs-7 fs-sm-4'
                                  style={{
                                    fontWeight: 500,
                                  }}
                                >
                                  {clubNameTwo}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Calendar;
