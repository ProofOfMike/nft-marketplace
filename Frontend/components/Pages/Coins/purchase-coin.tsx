import Image from 'next/image';
import React, { useState } from 'react';
import CoinsBag from '@/public/images/icon/coins-bag.svg';
import FiveStars from '@/public/images/icon/five-stars.svg';
import { useRouter } from 'next/navigation';
import { coins } from '@/public/data/coins';

const PurchaseCoinComponent = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setSelectedIndex(index);
  };

  // Inline styles
  const liStyle: React.CSSProperties = {
    border: '2px solid transparent', // Default border to be transparent
    transition: 'border-color 0.3s', // Smooth transition for border color
    cursor: 'pointer', // Change cursor to pointer
    backgroundColor: 'white',
    borderRadius: '12px',
    padding: '20px 0px',
    width: "130px",
    margin: '10px 20px',
    display: 'inline-block',
    position: 'relative', // Ensure this is a valid type in TypeScript
  };

  const liHoverStyle: React.CSSProperties = {
    borderColor: '#13a6d4', // Change to your desired hover border color
  };

  const liSelectedStyle: React.CSSProperties = {
    borderColor: 'blue', // Change to your desired selected border color
  };

  const popularBadgeStyle: React.CSSProperties = {
    backgroundColor: '#13a6d4',
    color: 'white',
    padding: '0px 16px',
    borderRadius: '12px',
    position: 'absolute',
    top: '-14px',
    left: '50%',
    transform: 'translateX(-50%)',
  };
  const router = useRouter();
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
                      <div className="d-flex flex-column align-items-center justify-content-center">
                        <Image
                          src={CoinsBag}
                          alt="CoinsBag"
                          width={160}
                          height={160}
                        />
                        <Image
                          src={FiveStars}
                          alt="FiveStars"
                          className="mt-3"
                          width={160}
                          height={160}
                        />
                      </div>
                      <p className="mt-5 text-center fs-3 fw-bolder">
                        Purchase{' '}
                        <span
                          className="fs-3 fw-bolder"
                          style={{ color: '#13a6d4' }}
                        >
                          Coins
                        </span>
                      </p>
                      <p className="mt-5 mx-auto text-center col-11 col-md-8">
                        Unlock even more fun and excitement with our premium
                        coins. Purchase now and receive a special offer.
                        Don&apos;t miss out on the chance to enhance your game
                        play and increase your chances of winning big
                      </p>
                      <ul className='mt-4 row justify-content-center' style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {coins.map((item, index) => (
                          <li
                          className='col-2'
                            key={index}
                            style={{
                              ...liStyle,
                              ...(selectedIndex === index
                                ? liSelectedStyle
                                : {}),
                            }}
                            onClick={() => handleClick(index)}
                            onMouseOver={(e) => {
                              (
                                e.currentTarget as HTMLLIElement
                              ).style.borderColor = '#13a6d4';
                            }}
                            onMouseOut={(e) => {
                              if (selectedIndex !== index) {
                                (
                                  e.currentTarget as HTMLLIElement
                                ).style.borderColor = 'transparent';
                              }
                            }}
                          >
                            <div style={{ textAlign: 'center' }}>
                              <p
                                style={{
                                  color: 'black',
                                  fontSize: '28px',
                                  lineHeight: 'unset',
                                }}
                              >
                                {item.coins}
                              </p>
                              <p style={{ color: 'black' }}>Coins</p>
                            </div>
                            <p
                              style={{
                                fontWeight: '700',
                                color: 'black',
                                textAlign: 'center',
                              }}
                            >
                              ${item.price}
                            </p>
                            {index === 1 && (
                              <span style={popularBadgeStyle}>Popular</span>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10 container d-flex justify-content-center">
                        <div
                        className='py-3 py-md-4 fs-6 fs-md-5'
                          style={{
                            backgroundColor: '#17C047',
                            width: '200px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '35px',
                            cursor: 'pointer',
                          }}
                        >
                          Continue
                        </div>
                      </div>
                      <p
                        onClick={() => router.push('/')}
                        style={{
                          textDecoration: 'underline',
                          cursor: 'pointer',
                        }}
                        className="fs-7 fs-md-6 text-center mt-5"
                      >
                        Or continue with a limited version
                      </p>
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
};

export default PurchaseCoinComponent;
