// app/(common)/details/[id]/page.tsx

'use client'; // Ensure this is a client component

import CustomModal from '@/components/Modals/CustomModal';
import CounterModal from '@/components/Shared/CounterModel';
import FooterCard from '@/components/Shared/FooterCard';
import FriendListModal from '@/components/Shared/FriendListModal';
import HeaderMain from '@/components/Shared/HeaderMain';
import TabsComponent from '@/components/Shared/TabsComponent';
import { nflMatch } from '@/public/data/tabOne';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // Use next/navigation for App Router
import React, { useState } from 'react';
import BetSuccessImage from '@/public/images/icon/BetSuccessModal.svg';
import BetWarningImage from '@/public/images/icon/BetWarningModal.svg';
import Team1 from '@/public/images/team1.png'
import Team2 from '@/public/images/team2.png'
const Page = () => {
  const [isBetConfirmModal, setIsBetConfirmModal] = useState(false);
  const [isBetSuccessModal, setBetSuccessModal] = useState(false);
  const [isBetWarningModal, setBetWarningModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [betConfirmed, setBetConfirmed] = useState(false); // New state to track if bet has been confirmed
  const [count, setCount] = useState(0);
  const [currentKey, setCurrentKey] = useState('peer');
  const [isHomeTab, setIsHomeTab] = useState('home');

  const handleYesClick = () => {
    if (betConfirmed) {
      // Show warning modal if bet has already been confirmed
      setBetWarningModal(true);
    } else {
      // Show success modal and update state to indicate bet has been confirmed
      setBetSuccessModal(true);
      setBetConfirmed(true);
    }
    setIsBetConfirmModal(false);
  };

  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const { id } = useParams();
  const [show, setShow] = useState(false); // State to control modal visibility
  const [showFriendListModal, setShowFriendListModal] = useState(false);

  const handleShowFriendList = () => {
    if (currentKey === 'friend') {
      setShowFriendListModal(true);
    } else {
      setIsBetConfirmModal(true);
    }
  };

  // Fetch data based on `id` if needed
  const matchDetails = nflMatch.find((match) => match.id === id);
  console.log('Match detail s ', matchDetails);

  return (
    <div>
      <HeaderMain />
      <section className="hero_area pb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-sm-4">
              <div className="hero_area__main">
                <div className="row">
                  <div className="col-12 mx-auto">
                    <div className="live-playing">
                      <div className="hero_area__topslider swiper-wrapper">
                        <div className="container-fluid">
                          <h3>Match Details</h3>

                          {matchDetails ? (
                            <div className="container d-flex justify-content-center align-items-center col-12">
                              <div className='m-2 m-sm-5'>
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
                                    src={Team1}
                                    alt={matchDetails?.clubNameOne}
                                    style={{ borderRadius: '50%', width: "80px", height: "80px" }}
                                  />
                                </div>
                                <p className='text-center'>{matchDetails?.clubNameOne}</p>
                              </div>
                              <div className='m-2 m-sm-5'>
                                <h3 className='text-center'>TBD</h3>
                                <p className='text-center'>{matchDetails?.times}</p>
                              </div>
                              <div className='m-2 m-sm-5'>
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
                                    alt={matchDetails?.clubNameTwo}
                                    style={{ borderRadius: '50%', width: "80px", height: "80px" }}
                                  />
                                </div>
                                <p className='text-center'>{matchDetails?.clubNameTwo}</p>
                              </div>
                            </div>
                          ) : (
                            <p>No details available.</p>
                          )}
                        </div>
                      </div>
                      <div className="container d-flex justify-content-between align-items-center col-12">
                        <p>Total Bets: 20</p>
                        <p>5:30</p>
                      </div>
                      <div className="container my-4">
                        <p>Location: Arrowhead Stadium, Kansas City </p>
                      </div>
                      <div className="container">
                        <TabsComponent
                          currentKey={currentKey}
                          isHomeTab={isHomeTab}
                          setIsHomeTab={setIsHomeTab}
                          setIsCardExpanded={setIsCardExpanded}
                        />
                      </div>

                      <div className="mb-10 container pt-5 d-flex justify-content-center">
                        <button
                          onClick={() => {
                            setIsCardExpanded(true);
                          }}
                          style={{
                            backgroundColor: '#17C047',
                            width: '200px',
                            height: '50px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '35px',
                            cursor: 'pointer',
                          }}
                        >
                          {isHomeTab === 'home' ? 'Place Bet' : 'Place A Wager'}
                        </button>
                      </div>
                      {/* <CounterModal
                        setShow={setShow}
                        show={show}
                        onSubmit={handleShowFriendList}
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showFriendListModal && (
        <FriendListModal
          show={showFriendListModal}
          setShow={setShowFriendListModal}
          setIsBetConfirmModal={setIsBetConfirmModal}
        />
      )}
      <FooterCard
        count={count}
        setCount={setCount}
        isHomeTab={isHomeTab}
        isCardExpanded={isCardExpanded}
        setIsCardExpanded={setIsCardExpanded}
        matchDetails={matchDetails}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        currentKey={currentKey}
        setCurrentKey={setCurrentKey}
        handleShowFriendList={handleShowFriendList}
      />
      <CustomModal
        open={isBetConfirmModal}
        handleClose={() => setIsBetConfirmModal(false)}
        title={''}
        desc={''}
        width={''}
        btn1Text={'No'}
        btn2Text={'Yes'}
        btn1Handler={() => setIsBetConfirmModal(false)}
        btn2Handler={handleYesClick}
        btn1Type={'close'}
        btn2Type={'success'}
        btn2Disable={false}
        backgroundColor={''}
        textColor={''}
      >
        <p className="text-black mb-5 text-center">
          Are you sure, you want to place <strong>{count} coins</strong> coins
          bet on <strong>{selectedOption}</strong> team.
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
          Thank you for placing your bet on the{' '}
          <strong>{matchDetails?.clubNameOne}</strong> vs{' '}
          <strong>{matchDetails?.clubNameTwo}</strong> match on June 21, 2023 at
          3:00 PM. Your bet of <strong>{count} coins</strong> on{' '}
          <strong>{selectedOption}</strong> has been placed.
        </p>
        <p className="text-black mb-5 text-center">Good Luck!</p>
      </CustomModal>
      <CustomModal
        open={isBetWarningModal}
        handleClose={() => setBetWarningModal(false)}
        title={''}
        desc={''}
        width={''}
        btn1Text={'Cancel'}
        btn2Text={'Buy Now'}
        btn1Handler={() => setBetWarningModal(false)}
        btn2Handler={() => {}}
        btn1Type={'cancel'}
        btn2Type={'success'}
        btn2Disable={false}
        backgroundColor={''}
      >
        <Image
          src={BetWarningImage}
          alt="BetWarningImage"
          height={144}
          width={144}
        />
        <p className="text-black mb-5 text-center">
          Sorry, It looks like you don&apos;t have enough coins to place a bet,
          Please purchase more coins to continue playing, Click button below to
          purchase coins.
        </p>
      </CustomModal>
    </div>
  );
};

export default Page;
