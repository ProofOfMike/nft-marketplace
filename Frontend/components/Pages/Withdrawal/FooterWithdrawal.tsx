'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  IconArrowBadgeUpFilled,
} from '@tabler/icons-react';
import { Button } from 'react-bootstrap';

interface Props {
  coin: number;
  setCoin: (count: number) => void;
  usd: number;
  setUsd: (usd: number) => void;
  isCardExpanded: boolean;
  setIsCardExpanded: (isCardExpanded: boolean) => void;
  setIsConfirmationModal: (value: boolean) => void;
}

export default function FooterWithdrawal({
  coin,
  setCoin,
  usd,
  setUsd,
  isCardExpanded,
  setIsCardExpanded,
  setIsConfirmationModal,
}: Props) {

  const coinsToUSDRate = 100 / 40; // Conversion rate

  const incrementCount = () => setCoin(coin + 5);
  const decrementCount = () => {
    if (coin > 0) {
      setCoin(coin - 5);
    }
  };

  useEffect(() => {
    setUsd(coin * coinsToUSDRate);
  }, [coin]);

  const toggleCard = () => {
    setIsCardExpanded(!isCardExpanded);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (isCardExpanded && !event.target.closest('.fixed_footer')) {
        setIsCardExpanded(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, [isCardExpanded]);

  return (
    <>
      <div
        className={`fixed_footer p3-bg ${
          isCardExpanded
            ? 'expandedtexta'
              : 'expanded3'
        }`}
      >
        <div className="fixed_footer__head py-3 px-4">
          <div className="d-flex justify-content-between">
            <div className="fixed_footer__head-betslip d-flex align-items-center gap-2">
              <span className="fw-bold">Withdrawan</span>
              <button
                onClick={toggleCard}
                className="footfixedbtn"
                type="button"
              >
                <IconArrowBadgeUpFilled className="ti ti-arrow-badge-down-filled n5-color fs-four fixediconstyle" />
              </button>
            </div>
          </div>
        </div>
        <div className="fixed_footer__content position-relative withdrawal_footer">
          <p className="place_bit">Coins to be withdrawn:</p>
          <p className="mt-4">Bet Amount </p>
          <div className="d-flex justify-content-center align-items-center">
            <Button onClick={decrementCount} variant="secondary">
              -
            </Button>
            <span
              style={{
                backgroundColor: '#161616',
                width: '100px',
                textAlign: 'center',
                padding: '10px',
              }}
              className="mx-3"
            >
              {coin}
            </span>
            <Button onClick={incrementCount} variant="secondary">
              +
            </Button>
          </div>
          <div
            className="d-flex justify-content-center align-items-center mt-4"
            style={{ fontSize: '5px' }}
          >
            <p>Minimum coins need to be more than 100 coins.</p>
          </div>
          <p className='mt-4 text-center'>Coins Amount in Dollar</p>
          <p className='mt-4 fs-5 fw-bold text-center'>${usd}</p>
          <div className='my-4 d-flex d-center'>
            <Button className="submit_button" onClick={() => setIsConfirmationModal(true)}>
              Submit
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
