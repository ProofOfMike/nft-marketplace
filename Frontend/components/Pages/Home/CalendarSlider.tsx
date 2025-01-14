'use client';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import './Calendar.css';
import { nflMatch } from '@/public/data/tabOne';

const CalendarSlider = ({onDateChange }: any) => {
  const [dates, setDates] = useState<any>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const datesContainerRef = useRef(null);

  useEffect(() => {
    generateDates();
  }, []);

  useEffect(() => {
    if (datesContainerRef.current) {
      scrollToActiveDate();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (dates.length > 0) {
      onDateChange(dates[activeIndex]);
    }
  }, [activeIndex, dates, onDateChange]);

  const generateDates = () => {
    const today = new Date();
    const endDate = new Date(today.getFullYear(), 11, 31);
    const datesArray = [];

    for (
      let currentDate = new Date(today);
      currentDate <= endDate;
      currentDate.setDate(currentDate.getDate() + 1)
    ) {
      datesArray.push(
        currentDate.toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
        })
      );
    }

    setDates(datesArray);
  };

  const setActive = (index: any) => {
    setActiveIndex(index);
  };

  const scrollToActiveDate = () => {
    const container: any = datesContainerRef.current;
    const activeElement = container.children[activeIndex];

    if (activeElement) {
      const containerRect = container.getBoundingClientRect();
      const activeRect = activeElement.getBoundingClientRect();

      const scrollLeft =
        activeRect.left -
        containerRect.left -
        containerRect.width / 2 +
        activeRect.width / 2;
      container.scrollLeft = scrollLeft;
      updateScrollbarWidth();
    }
  };

  const updateScrollbarWidth = () => {
    const container: any = datesContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;
    const scrollLeft = container.scrollLeft;
    const maxScroll = scrollWidth - clientWidth;

    const scrollRatio = scrollLeft / maxScroll;
    const minLength = 10;
    const maxLength = 50;
    const newLength = maxLength - (maxLength - minLength) * scrollRatio;

    container.style.setProperty('--scrollbar-length', `${newLength}%`);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString('en-us', { month: 'short' });
    const day = date.getDate();
    const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dateW = week[date.getDay()];
    return `${month} ${day} ${dateW}`;
  };

  return (
    <div className="mt-20 container-fluid">
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
                    <div className="calendar-container">
                      <div className="col d-flex gap-2">
                        <Image
                          width={20}
                          height={20}
                          src="/images/icon/calendar_icon.svg"
                          alt="Calendar Icon"
                        />
                        <span>{`${formatDate(dates[activeIndex])}`}</span>
                      </div>
                      <div className="scroll-buttons">
                        <div
                          className="dates-container pay_method__table-scrollbar"
                          ref={datesContainerRef}
                          onScroll={updateScrollbarWidth}
                        >
                          {dates.map((date: any, index: number) => (
                            <div
                              key={index}
                              className={`date-item ${
                                index === activeIndex ? 'active' : ''
                              } row`}
                              onClick={() => setActive(index)}
                            >
                              {formatDate(date).split(' ')[1]}
                              <span
                                className={`week-date ${index === activeIndex ? 'active' : ''}`}
                              >
                                {formatDate(date).split(' ')[2]}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSlider;
