'use client';

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './style.css'; // Custom CSS for additional styles
import CustomModal from '../Modals/CustomModal';

const FilterModal = ({ show, setShow, isBetPage }: any) => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [activeResult, setActiveResult] = useState<string | null>(null);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter === activeFilter ? null : filter); // Toggle filter state
  };

  const handleResultClick = (result: string) => {
    setActiveResult(result === activeResult ? null : result); // Toggle result state
  };

  return (
    <>
      <CustomModal
        open={show}
        handleClose={() => setShow(false)}
        title={'Filter'}
        desc={''}
        width={'500'}
        btn1Text={'Apply'}
        btn2Text={''}
        btn1Handler={() => setShow(false)}
        btn2Handler={() => {}}
        btn1Type={'success'}
        btn2Type={''}
        btn2Disable={false}
        backgroundColor={'#292929'}
      >
        <div>
          <h6 className="text-start">Coins</h6>
          <div className="mt-2">
            <div className="filter-options">
              <Button
                variant="outline-info"
                className={`filter-button ${activeFilter === 'less-than-100' ? 'active' : ''}`}
                onClick={() => handleFilterClick('less-than-100')}
              >
                Less than 100 coins
              </Button>
              <Button
                variant="outline-info"
                className={`filter-button ${activeFilter === '100-300' ? 'active' : ''}`}
                onClick={() => handleFilterClick('100-300')}
              >
                100-300 coins
              </Button>
            </div>
            <div className="filter-options mt-2 mt-sm-0">
              <Button
                variant="outline-info"
                className={`filter-button ${activeFilter === '300-500' ? 'active' : ''}`}
                onClick={() => handleFilterClick('300-500')}
              >
                300-500 coins
              </Button>
              <Button
                variant="outline-info"
                className={`filter-button ${activeFilter === 'greater-than-500' ? 'active' : ''}`}
                onClick={() => handleFilterClick('greater-than-500')}
              >
                Greater than 500 coins
              </Button>
            </div>
          </div>
          {isBetPage && (
            <>
              <h6 className="text-start">Results</h6>
              <div className="mt-2">
                <div className="filter-options">
                  <Button
                    variant="outline-info"
                    className={`filter-button ${activeResult === 'win' ? 'active' : ''}`}
                    onClick={() => handleResultClick('win')}
                  >
                    Win
                  </Button>
                  <Button
                    variant="outline-info"
                    className={`filter-button ${activeResult === 'loss' ? 'active' : ''}`}
                    onClick={() => handleResultClick('loss')}
                  >
                    Loss
                  </Button>
                  <Button
                    variant="outline-info"
                    className={`filter-button ${activeResult === 'waiting' ? 'active' : ''}`}
                    onClick={() => handleResultClick('waiting')}
                  >
                    Waiting
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default FilterModal;
