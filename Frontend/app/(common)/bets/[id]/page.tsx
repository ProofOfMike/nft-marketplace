// pages/bet/[id].tsx
'use client';
import HeaderMain from '@/components/Shared/HeaderMain';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import StartIcon from '@/public/images/icon/starts.svg';
import CustomModal from '@/components/Modals/CustomModal';
import BetSuccessImage from '@/public/images/icon/BetSuccessModal.svg';
import CrownIcon from '@/public/images/icon/crown-icon.svg';
import BetRequestAccept from '@/public/images/icon/bet-request-accept.svg';
import Team1 from '@/public/images/team1.png';
import Team2 from '@/public/images/team2.png';
const BetResultPage = () => {
  const { id } = useParams();
  const [isRequestRejectModal, setIsRequestRejectModal] = useState(false);
  const [isRequestAcceptModal, setIsRequestAcceptModal] = useState(false);
  const [isBetSuccessModal, setBetSuccessModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div>
      <HeaderMain />
      <section className="hero_area pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-sm-4">
              <div className="hero_area__main">
                <div className="row">
                  <div className="col-11 mx-auto">
                    <div className="container d-flex justify-content-center align-items-start align-items-sm-center col-12">
                      <div className="m-5">
                        <div
                          style={{
                            padding: '5px',
                            backgroundColor: 'white',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Image
                            className="w-50"
                            width={80}
                            height={80}
                            src={Team1}
                            alt={'team1'}
                            style={{
                              borderRadius: '50%',
                              width: '80px',
                              height: '80px',
                            }}
                          />
                        </div>
                        <p className="text-center">Baltimore Ravens</p>
                      </div>
                      <div className="d-none d-sm-block">
                        <h1 className="text-center">2 - 1</h1>
                        <p className="text-center">June 21, 2023</p>
                      </div>
                      <div className="m-5">
                        <div
                          style={{
                            padding: '5px',
                            backgroundColor: 'white',
                            width: '100px',
                            height: '100px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Image
                            width={80}
                            height={80}
                            src={Team2}
                            alt={'team2'}
                            style={{
                              borderRadius: '50%',
                              width: '80px',
                              height: '80px',
                            }}
                          />
                        </div>
                        <p className="text-center">Atlanta</p>
                      </div>
                    </div>
                      <div className="d-block d-sm-none">
                        <h1 className="text-center">2 - 1</h1>
                        <p className="text-center">June 21, 2023</p>
                      </div>

                    <div className="mt-4 mt-sm-0 container d-flex justify-content-between align-items-center col-12">
                      <p>Total Bets: 20</p>
                      <p>5:30</p>
                    </div>
                    <div className="container my-4">
                      <p>Location: Arrowhead Stadium, Kansas City </p>
                    </div>
                    {id === 'winner' ? (
                      <div
                        style={{
                          background: '#419E3F',
                          borderRadius: '10px',
                          padding: '20px 0px',
                          width: '100%',
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <Image
                                src={StartIcon}
                                alt="StartIcon"
                                height={29}
                                width={96}
                                className="mx-auto"
                              />
                            </div>
                            <p className="text-center fs-4 fw-bold">Winner</p>
                            <div className="mt-3 d-flex justify-content-center align-items-center gap-6 gap-md-12">
                              <div className="position-relative">
                                <Image
                                  src={'/images/jack.png'}
                                  alt="StartIcon"
                                  height={60}
                                  width={60}
                                />
                                <span
                                  style={{
                                    position: 'absolute',
                                    width: '100%',
                                    top: '-20px',
                                    left: '10px',
                                  }}
                                >
                                  <Image
                                    src={CrownIcon}
                                    alt={'CrownIcon'}
                                    height={26}
                                    width={38}
                                  />
                                </span>
                                <p className="text-center fw-bold">You</p>
                                <p className="text-center fw-normal">
                                  Baltimore
                                </p>
                              </div>
                              <span className="text-center fs-4 fw-bold">
                                VS
                              </span>
                              <div>
                                <Image
                                  src={'/images/jack.png'}
                                  alt="StartIcon"
                                  height={60}
                                  width={60}
                                />

                                <p className="text-center fw-bold">John</p>
                                <p className="text-center fw-normal">Atlanta</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="w-100 mt-3 text-white"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white background
                            backdropFilter: 'blur(10px)', // Adjust the blur value as needed
                          }}
                        >
                          <p className="text-center text-white">
                            Bet Amount:{' '}
                            <span className="text-white fw-bold">200</span>
                          </p>
                        </div>
                      </div>
                    ) : id === 'loss' ? (
                      <div
                        style={{
                          background: '#f55555',
                          borderRadius: '10px',
                          padding: '20px 0px',
                          width: '100%',
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <Image
                                src={StartIcon}
                                alt="StartIcon"
                                height={29}
                                width={96}
                                className="mx-auto"
                              />
                            </div>
                            <p className="mb-5 mb-md-0 text-center fs-4 fw-bold">
                              Better luck next time
                            </p>
                            <div className="mt-3 d-flex justify-content-center align-items-center gap-6 gap-md-12">
                              <div>
                                <Image
                                  src={'/images/jack.png'}
                                  alt="StartIcon"
                                  height={60}
                                  width={60}
                                />
                                <p className="text-center fw-bold">You</p>
                                <p className="text-center fw-normal">
                                  Baltimore
                                </p>
                              </div>
                              <span className="text-center fs-4 fw-bold">
                                VS
                              </span>
                              <div className="position-relative">
                                <Image
                                  src={'/images/jack.png'}
                                  alt="StartIcon"
                                  height={60}
                                  width={60}
                                />
                                <span
                                  style={{
                                    position: 'absolute',
                                    width: '100%',
                                    top: '-20px',
                                    left: '10px',
                                  }}
                                >
                                  <Image
                                    src={CrownIcon}
                                    alt={'CrownIcon'}
                                    height={26}
                                    width={38}
                                  />
                                </span>
                                <p className="text-center fw-bold">John</p>
                                <p className="text-center fw-normal">Atlanta</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="w-100 mt-3 text-white"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white background
                            backdropFilter: 'blur(10px)', // Adjust the blur value as needed
                          }}
                        >
                          <p className="text-center text-white">
                            Bet Amount:{' '}
                            <span className="text-white fw-bold">200</span>
                          </p>
                        </div>
                      </div>
                    ) : id === 'waiting' ? (
                      <div
                        style={{
                          background: '#49b0be',
                          borderRadius: '10px',
                          padding: '20px 0px',
                          width: '100%',
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <Image
                                src={StartIcon}
                                alt="StartIcon"
                                height={29}
                                width={96}
                                className="mx-auto"
                              />
                            </div>
                            <p className="text-center fs-4 fw-bold">
                              Match in progress
                            </p>
                            <div className="mt-3 d-flex justify-content-center align-items-center gap-6 gap-md-12">
                              <div>
                                <Image
                                  src={'/images/jack.png'}
                                  alt="StartIcon"
                                  height={60}
                                  width={60}
                                />
                                <p className="text-center fw-bold">You</p>
                                <p className="text-center fw-normal">
                                  Baltimore
                                </p>
                              </div>
                              <span className="text-center fs-4 fw-bold">
                                VS
                              </span>
                              <div>
                                <Image
                                  src={'/images/jack.png'}
                                  alt="StartIcon"
                                  height={60}
                                  width={60}
                                />
                                <p className="text-center fw-bold">John</p>
                                <p className="text-center fw-normal">Atlanta</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="w-100 mt-3 text-white"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white background
                            backdropFilter: 'blur(10px)', // Adjust the blur value as needed
                          }}
                        >
                          <p className="text-center text-white">
                            Bet Amount:{' '}
                            <span className="text-white fw-bold">200</span>
                          </p>
                        </div>
                      </div>
                    ) : id === 'take-action' ? (
                      <div
                        style={{
                          background: '#D3B0FF',
                          borderRadius: '10px',
                          padding: '20px 0px',
                          width: '100%',
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <div>
                            <div className="d-flex justify-content-center">
                              <Image
                                src={StartIcon}
                                alt="StartIcon"
                                height={29}
                                width={96}
                                className="mx-auto"
                              />
                            </div>
                            <p className="text-center fs-4 fw-bold">
                              Take Action Now
                            </p>
                            <div className="mt-3 d-flex justify-content-center align-items-center gap-6 gap-md-12">
                              <div>
                                <Image
                                  src={'/images/jack.png'}
                                  alt="StartIcon"
                                  height={60}
                                  width={60}
                                />
                                <p className="text-center fw-bold">You</p>
                                <p className="text-center fw-normal">
                                  Baltimore
                                </p>
                              </div>
                              <span className="text-center fs-4 fw-bold">
                                VS
                              </span>
                              <div>
                                <p className="text-center fw-bold">
                                  No one has <br /> joined yet
                                </p>
                                <button
                                  onClick={() => setIsRequestAcceptModal(true)}
                                  className="mt-1 rounded-5 px-5 py-1 bg-white text-black"
                                >
                                  Accept
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="w-100 mt-3 text-white"
                          style={{
                            backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white background
                            backdropFilter: 'blur(10px)', // Adjust the blur value as needed
                          }}
                        >
                          <p className="text-center text-white">
                            Bet Amount:{' '}
                            <span className="text-white fw-bold">200</span>
                          </p>
                        </div>
                      </div>
                    ) : (
                      id === 'waiting-for-wager' && (
                        <div
                          style={{
                            background: '#746388',
                            borderRadius: '10px',
                            padding: '20px 0px',
                            width: '100%',
                          }}
                        >
                          <div className="d-flex justify-content-center align-items-center">
                            <div>
                              <div className="d-flex justify-content-center">
                                <Image
                                  src={StartIcon}
                                  alt="StartIcon"
                                  height={29}
                                  width={96}
                                  className="mx-auto"
                                />
                              </div>
                              <p className="text-center fs-4 fw-bold">
                                Waiting for Wager
                              </p>
                              <div className="mt-3 d-flex justify-content-center align-items-center gap-6 gap-md-12">
                                <div>
                                  <Image
                                    src={'/images/jack.png'}
                                    alt="StartIcon"
                                    height={60}
                                    width={60}
                                  />
                                  <p className="text-center fw-bold">You</p>
                                  <p className="text-center fw-normal">
                                    Baltimore
                                  </p>
                                </div>
                                <span className="text-center fs-4 fw-bold">
                                  VS
                                </span>
                                <div>
                                  <p className="text-center fw-bold">
                                    No one has <br /> joined yet
                                  </p>
                                  <button
                                    onClick={() =>
                                      setIsRequestAcceptModal(true)
                                    }
                                    className="mt-1 rounded-5 px-5 py-1 bg-white text-black"
                                  >
                                    Accept
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="w-100 mt-3 text-white"
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.4)', // Semi-transparent white background
                              backdropFilter: 'blur(10px)', // Adjust the blur value as needed
                            }}
                          >
                            <p className="text-center text-white">
                              Bet Amount:{' '}
                              <span className="text-white fw-bold">200</span>
                            </p>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                  {(id === 'take-action' || id === 'waiting-for-wager') && (
                    <div className="mt-8 d-flex justify-content-center align-items-center">
                      <button
                        onClick={() => setIsRequestRejectModal(true)}
                        className="px-20 py-3 rounded-5 fw-bold"
                        style={{ background: '#17C047' }}
                      >
                        Reject Request
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CustomModal
        open={isRequestRejectModal}
        handleClose={() => setIsRequestRejectModal(false)}
        title={''}
        desc={''}
        width={''}
        btn1Text={'Cancel'}
        btn2Text={'Accept'}
        btn1Handler={() => setIsRequestRejectModal(false)}
        btn2Handler={() => {}}
        btn1Type={'close'}
        btn2Type={'success'}
        btn2Disable={false}
        backgroundColor={''}
        textColor={''}
      >
        <p className="text-black mb-5 text-center">
          Are sure you want to reject this request to join a bet with your
          friend?
        </p>
      </CustomModal>

      <CustomModal
        open={isBetSuccessModal}
        handleClose={() => setBetSuccessModal(false)}
        title={''}
        desc={''}
        width={''}
        btn1Text={'Done'}
        btn2Text={''}
        btn1Handler={() => setBetSuccessModal(false)}
        btn2Handler={() => {}}
        btn1Type={'success'}
        btn2Type={''}
        btn2Disable={false}
        backgroundColor={''}
        textColor={''}
      >
        <Image
          src={BetSuccessImage}
          alt="BetSuccessImage"
          height={144}
          width={144}
        />
        <p className="text-black mb-1 text-center">
          Thank you for placing your bet on the Baltimore vs. Arizona match on
          June 21, 2023 at 3:00 PM. Your bet of 50 coins on Arizona has been
          placed.
        </p>
        <p className="text-black mb-5 text-center">Good Luck!</p>
      </CustomModal>
      <CustomModal
        open={isRequestAcceptModal}
        handleClose={() => setIsRequestAcceptModal(false)}
        title={''}
        desc={''}
        width={''}
        btn1Text={'Cancel'}
        btn2Text={'Accept'}
        btn1Handler={() => setIsRequestAcceptModal(false)}
        btn2Handler={() => {
          setIsRequestAcceptModal(false), setBetSuccessModal(true);
        }}
        btn1Type={'cancel'}
        btn2Type={'success'}
        btn2Disable={false}
        backgroundColor={''}
      >
        <Image
          src={BetRequestAccept}
          alt="BetWarningImage"
          height={144}
          width={144}
        />
        <p className="mt-4 text-black mb-5 text-center">
          You are about to place a bet of 50 coins on Atlanta team against John
          Doe. So do you want to place a bet now?
        </p>
      </CustomModal>
    </div>
  );
};

export default BetResultPage;
