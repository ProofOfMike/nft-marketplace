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

export default function Coin({setIsCoins}: any) {
  const [activeItem, setActiveItem] = useState(tabOne[0]);
  const [isCoinHistory, setIsCoinHistory] = useState(false);

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
                    <div
                      style={{
                        backgroundColor: '#13a6d4',
                        padding: 10,
                        borderRadius: 10,
                      }}
                    >
                      <span className='fs-6 fs-md-5'>Total coins</span>
                      <div className="col d-flex d-center justify-content-between">
                      <span className="fs-3 fs-md-2">120 Coins</span>
                        <button
                          style={{
                            backgroundColor: 'white',
                            padding: 5,
                            color: '#13a6d4',
                            borderRadius: 100,
                          }}
                          onClick={() => setIsCoins(true)}
                          className="px-5"
                        >
                          <span style={{ color: '#13a6d4' }}>+ Buy Now</span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-4 font-thin">
                      <span>Coins History</span>
                    </div>
                    {isCoinHistory ? (
                      <div>
                        <div className="d-flex d-center">
                          <Image
                            width={400}
                            height={400}
                            src="/images/no_purchase_img.png"
                            alt="image"
                          />
                        </div>
                        <div className="d-flex d-center">
                          No coins History Found
                        </div>
                      </div>
                    ) : (
                      <ul
                        className="mt-2"
                        style={{
                          backgroundColor: '#161616',
                          padding: '10px',
                          borderRadius: '15px',
                        }}
                      >
                        <li
                          style={{
                            borderBottom: '1px solid #353535',
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <div>
                            <p className="mt-1 fs-6 fs-md-5  text-white">
                              Coin Purchased
                            </p>
                            <p className="mt-1 fs-7 fs-md-6  text-white">
                              June 21, 2023 3:43 pm
                            </p>
                          </div>
                          <div>
                            <p
                              className="fs-3 fs-md-1"
                              style={{
                                lineHeight: 'unset',
                                textAlign: 'center',
                              }}
                            >
                              50
                            </p>
                            <p
                              className="fs-7 fs-md-6"
                              style={{
                                textAlign: 'center',
                              }}
                            >
                              Coins
                            </p>
                          </div>
                        </li>
                        <li
                          style={{
                            borderBottom: '1px solid #353535',
                            padding: '10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                          }}
                        >
                          <div>
                            <p className="mt-1 fs-6 fs-md-5 text-white">
                              Coin Purchased
                            </p>
                            <p className="mt-1 fs-7 fs-md-6 text-white">
                              June 21, 2023 3:43 pm
                            </p>
                          </div>
                          <div>
                            <p
                            className="fs-3 fs-md-1"
                              style={{
                                lineHeight: 'unset',
                                textAlign: 'center',
                              }}
                            >
                              50
                            </p>
                            <p
                              className="fs-7 fs-md-6"
                              style={{
                                textAlign: 'center',
                              }}
                            >
                              Coins
                            </p>
                          </div>
                        </li>
                      </ul>
                    )}
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
