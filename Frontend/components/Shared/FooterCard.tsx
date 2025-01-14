'use client';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  IconX,
  IconArrowBadgeUpFilled,
  IconTrash,
  IconSettings,
} from '@tabler/icons-react';
import { Tab } from '@headlessui/react';
import { Button, Dropdown } from 'react-bootstrap';

interface Props {
  count: number;
  setCount: (count: number) => void;
  isHomeTab: string;
  isCardExpanded: boolean;
  setIsCardExpanded: (isExpanded: boolean) => void;
  matchDetails: any; // You might want to replace `any` with a more specific type if possible
  selectedOption: string;
  setSelectedOption: (option: string) => void;
  currentKey: string;
  setCurrentKey: (option: string) => void;
  handleShowFriendList: () => void;
}

export default function FooterCard({
  count,
  setCount,
  isHomeTab,
  isCardExpanded,
  setIsCardExpanded,
  matchDetails,
  selectedOption,
  setSelectedOption,
  currentKey,
  setCurrentKey,
  handleShowFriendList,
}: Props) {
  const [isChallengeSlider, setIsChallengeSlider] = useState(true);

  const handleSelect = (eventKey: any) => {
    setSelectedOption(eventKey);
  };

  const incrementCount = () => setCount(count + 5);
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 5);
    }
  };

  // const [isCardExpanded, setIsCardExpanded] = useState(false);
  // const toggleCard = () => {
  //     setIsCardExpanded(!isCardExpanded);
  //     console.log("click");
  // };

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

  const items = ['Single', 'Multiple', 'System'];
  const [activeItem, setActiveItem] = useState(items[0]);
  const handleClick = (itemName: string) => {
    setActiveItem(itemName);
  };
  const getItemStyle = (itemName: string) => {
    return {
      backgroundColor: activeItem === itemName ? '#0F1B42' : '#0A1436',
      cursor: 'pointer',
    };
  };

  return (
    <>
      <div
        className={`fixed_footer p3-bg  ${
          isCardExpanded
            ? 'expandedtexta'
            : isChallengeSlider
              ? 'expanded3'
              : 'expanded2'
        }`}
      >
        <div className="fixed_footer__head py-3 px-4">
          <div className="d-flex justify-content-between">
            {!isChallengeSlider ? (
              <>
                <div className="fixed_footer__head-betslip d-flex align-items-center gap-2">
                  <span className="fw-bold">Betslip</span>
                  <span className="fixed_footer__head-n1">1</span>
                  <button
                    onClick={toggleCard}
                    className="footfixedbtn"
                    type="button"
                  >
                    <IconArrowBadgeUpFilled className="ti ti-arrow-badge-down-filled n5-color fs-four fixediconstyle" />
                  </button>
                </div>
                <div className="fixed_footer__head-quickbet d-flex align-items-center gap-1">
                  <span className="fw-bold">Betslip Bet</span>
                  <input type="checkbox" id="switch" />
                  <label>Toggle</label>
                </div>
              </>
            ) : (
              <div className="fixed_footer__head-betslip d-flex align-items-center gap-2">
                <span className="fw-bold">
                  {isHomeTab === 'home' ? 'Place Bet' : 'Place A Wager'}
                </span>
                <button
                  onClick={toggleCard}
                  className="footfixedbtn"
                  type="button"
                >
                  <IconArrowBadgeUpFilled className="ti ti-arrow-badge-down-filled n5-color fs-four fixediconstyle" />
                </button>
              </div>
            )}
          </div>
        </div>
        {isChallengeSlider ? (
          <div className="fixed_footer__content position-relative footer_wager">
            <p className="place_bit">Place a Bit:</p>
            <div className="text_bet_dropdown">
              <p className="mt-2">Choose a team to place bet</p>
              <Dropdown onSelect={handleSelect}>
                <Dropdown.Toggle
                  variant="success"
                  id="dropdown-basic"
                  style={{
                    width: '100%',
                    backgroundColor: '#13A6D4',
                    color: 'white',
                    border: 'none',
                  }}
                >
                  {selectedOption || 'Select an Option'}
                </Dropdown.Toggle>
                <Dropdown.Menu
                  style={{ backgroundColor: '#13A6D4', width: '100%' }}
                >
                  <Dropdown.Item
                    className="text-black"
                    eventKey={matchDetails?.clubNameOne}
                    style={{ color: 'white' }}
                  >
                    {matchDetails?.clubNameOne}
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="text-black"
                    eventKey={matchDetails?.clubNameTwo}
                    style={{ color: 'white' }}
                  >
                    {matchDetails?.clubNameTwo}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div className="mt-5">
              <p>Types of bet</p>
              <div
                style={{
                  backgroundColor: '#161616',
                  borderRadius: '35px',
                  display: 'flex',
                  padding: '5px',
                  fontSize: '14px',
                }}
              >
                <div
                  onClick={() => {
                    setCurrentKey('peer');
                  }}
                  style={{
                    backgroundColor:
                      currentKey === 'peer' ? '#13A6D4' : '#161616',
                    borderRadius: '35px',
                    textAlign: 'center',
                    flex: 1,
                    padding: '10px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  Peer to Peer
                </div>
                <div
                  onClick={() => {
                    setCurrentKey('friend');
                  }}
                  style={{
                    backgroundColor:
                      currentKey === 'friend' ? '#13A6D4' : '#161616',
                    borderRadius: '35px',
                    textAlign: 'center',
                    flex: 1,
                    padding: '10px',
                    cursor: 'pointer',
                    fontSize: '14px',
                  }}
                >
                  Friend to Friend
                </div>
              </div>
            </div>
            <p className="mt-4">Bet Amount </p>
            <div className="d-flex justify-content-center align-items-center">
              <Button onClick={decrementCount} variant="secondary">
                -
              </Button>
              <span
                style={{
                  backgroundColor: '#161616',
                  width: '150px',
                  textAlign: 'center',
                  padding: '10px',
                }}
                className="mx-3"
              >
                {count}
              </span>
              <Button onClick={incrementCount} variant="secondary">
                +
              </Button>
            </div>
            <div
              className="d-flex justify-content-center align-items-center mt-4"
              style={{ fontSize: '5px' }}
            >
              <p>Bets will be placed in increments of 5.</p>
            </div>
            <Button
              className="submit_button"
              onClick={() => {
                handleShowFriendList();
              }}
            >
              Submit
            </Button>
          </div>
        ) : (
          <div className="fixed_footer__content position-relative">
            <Tab.Group>
              <Tab.List className="tab-list">
                {items.map((item) => (
                  <Tab
                    className="tab-item"
                    key={item}
                    onClick={() => handleClick(item)}
                    style={getItemStyle(item)}
                  >
                    <span className="tab-trigger cpoint">{item}</span>
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels className="tab-container n11-bg">
                <Tab.Panel className="">
                  <div className="fixed_footer__content-live px-4 py-5 mb-5">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-content-center gap-1">
                        <Image
                          src="/images/icon/sports-salzburg.png"
                          width={20}
                          height={20}
                          alt="Icon"
                        />
                        <span className="fs-seven cpoint">Salzburg</span>
                        <span className="fs-seven">vs.</span>
                        <span className="fs-seven cpoint">Union Berlin</span>
                      </div>
                      <span className="r1-color fs-seven">Live</span>
                      <IconX className="ti ti-x n4-color cpoint" />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fixed_footer__content-scr py-1 px-2 fs-seven">
                        3.80
                      </span>
                      <div>
                        <span className="fs-seven d-block">over 132.5</span>
                        <span className="fs-nine d-block">
                          Total (incl. overtime)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="fixed_footer__content-formarea px-4">
                    <form>
                      <div className="border-four d-flex align-items-center justify-content-between pe-2 rounded-3 mb-4">
                        <input
                          placeholder="Bet amount"
                          className="place-style"
                          type="text"
                        />
                        <button
                          className="cmn-btn p-1 fs-seven fw-normal"
                          type="button"
                        >
                          Max
                        </button>
                      </div>
                      <div className="fixed_footer__content-selectammount d-flex  align-items-center justify-content-between mb-4">
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active active">
                          25
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          80
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          40
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          100
                        </span>
                      </div>
                      <div className="fixed_footer__content-possible d-flex align-items-center justify-content-between gap-2 mb-7">
                        <span className="fs-seven">Possible win</span>
                        <span className="fs-seven fw-bold">$300</span>
                      </div>
                      <button
                        type="button"
                        className="cmn-btn px-5 py-3 w-100 mb-4"
                      >
                        Place Bet
                      </button>
                      <button
                        type="button"
                        className="cmn-btn third-alt px-5 py-3 w-100 mb-6"
                      >
                        Book
                      </button>
                    </form>
                  </div>
                  <div className="fixed_footer__content-bottom d-flex align-items-center justify-content-between">
                    <div className="right-border d-flex align-items-center gap-2">
                      <IconTrash
                        height={20}
                        width={20}
                        className="ti ti-trash n3-color fs-five cpoint"
                      />
                      <Link href="#" className="n3-color fs-seven">
                        Sign In & Bet
                      </Link>
                    </div>
                    <div className="right-border2 d-flex align-items-center justify-content-end gap-2">
                      <IconSettings
                        height={20}
                        width={20}
                        className="ti ti-settings n3-color fs-five cpoint"
                      />
                      <Link href="#" className="n3-color fs-seven">
                        Settings
                      </Link>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="">
                  <div className="fixed_footer__content-live px-4 py-5 mb-5">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-content-center gap-1">
                        <Image
                          src="/images/icon/sports-salzburg.png"
                          width={20}
                          height={20}
                          alt="Icon"
                        />
                        <span className="fs-seven cpoint">Salzburg</span>
                        <span className="fs-seven">vs.</span>
                        <span className="fs-seven cpoint">Union Berlin</span>
                      </div>
                      <span className="r1-color fs-seven">Live</span>
                      <IconX className="ti ti-x n4-color cpoint" />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fixed_footer__content-scr py-1 px-2 fs-seven">
                        4.80
                      </span>
                      <div>
                        <span className="fs-seven d-block">over 182.5</span>
                        <span className="fs-nine d-block">
                          Total (incl. overtime)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="fixed_footer__content-formarea px-4">
                    <form>
                      <div className="border-four d-flex align-items-center justify-content-between pe-2 rounded-3 mb-4">
                        <input
                          placeholder="Bet amount"
                          className="place-style"
                          type="text"
                        />
                        <button
                          className="cmn-btn p-1 fs-seven fw-normal"
                          type="button"
                        >
                          Max
                        </button>
                      </div>
                      <div className="fixed_footer__content-selectammount d-flex  align-items-center justify-content-between mb-4">
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active active">
                          30
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          60
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          80
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          100
                        </span>
                      </div>
                      <div className="fixed_footer__content-possible d-flex align-items-center justify-content-between gap-2 mb-7">
                        <span className="fs-seven">Possible win</span>
                        <span className="fs-seven fw-bold">$400</span>
                      </div>
                      <button
                        type="button"
                        className="cmn-btn px-5 py-3 w-100 mb-4"
                      >
                        Place Bet
                      </button>
                      <button
                        type="button"
                        className="cmn-btn third-alt px-5 py-3 w-100 mb-6"
                      >
                        Book
                      </button>
                    </form>
                  </div>
                  <div className="fixed_footer__content-bottom d-flex align-items-center justify-content-between">
                    <div className="right-border d-flex align-items-center gap-2">
                      <IconTrash
                        height={20}
                        width={20}
                        className="ti ti-trash n3-color fs-five cpoint"
                      />
                      <Link href="#" className="n3-color fs-seven">
                        Sign In & Bet
                      </Link>
                    </div>
                    <div className="right-border2 d-flex align-items-center justify-content-end gap-2">
                      <IconSettings
                        height={20}
                        width={20}
                        className="ti ti-settings n3-color fs-five cpoint"
                      />
                      <Link href="#" className="n3-color fs-seven">
                        Settings
                      </Link>
                    </div>
                  </div>
                </Tab.Panel>
                <Tab.Panel className="">
                  <div className="fixed_footer__content-live px-4 py-5 mb-5">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div className="d-flex align-content-center gap-1">
                        <Image
                          src="/images/icon/sports-salzburg.png"
                          width={20}
                          height={20}
                          alt="Icon"
                        />
                        <span className="fs-seven cpoint">Salzburg</span>
                        <span className="fs-seven">vs.</span>
                        <span className="fs-seven cpoint">Union Berlin</span>
                      </div>
                      <span className="r1-color fs-seven">Live</span>
                      <IconX className="ti ti-x n4-color cpoint" />
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className="fixed_footer__content-scr py-1 px-2 fs-seven">
                        5.80
                      </span>
                      <div>
                        <span className="fs-seven d-block">over 232.5</span>
                        <span className="fs-nine d-block">
                          Total (incl. overtime)
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="fixed_footer__content-formarea px-4">
                    <form>
                      <div className="border-four d-flex align-items-center justify-content-between pe-2 rounded-3 mb-4">
                        <input
                          placeholder="Bet amount"
                          className="place-style"
                          type="text"
                        />
                        <button
                          className="cmn-btn p-1 fs-seven fw-normal"
                          type="button"
                        >
                          Max
                        </button>
                      </div>
                      <div className="fixed_footer__content-selectammount d-flex  align-items-center justify-content-between mb-4">
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active active">
                          80
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          100
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          180
                        </span>
                        <span className="fs-seven cpoint py-1 px-4 border-four rounded-2 clickable-active">
                          200
                        </span>
                      </div>
                      <div className="fixed_footer__content-possible d-flex align-items-center justify-content-between gap-2 mb-7">
                        <span className="fs-seven">Possible win</span>
                        <span className="fs-seven fw-bold">$900</span>
                      </div>
                      <button
                        type="button"
                        className="cmn-btn px-5 py-3 w-100 mb-4"
                      >
                        Place Bet
                      </button>
                      <button
                        type="button"
                        className="cmn-btn third-alt px-5 py-3 w-100 mb-6"
                      >
                        Book
                      </button>
                    </form>
                  </div>
                  <div className="fixed_footer__content-bottom d-flex align-items-center justify-content-between">
                    <div className="right-border d-flex align-items-center gap-2">
                      <IconTrash
                        height={20}
                        width={20}
                        className="ti ti-trash n3-color fs-five cpoint"
                      />
                      <Link href="#" className="n3-color fs-seven">
                        Sign In & Bet
                      </Link>
                    </div>
                    <div className="right-border2 d-flex align-items-center justify-content-end gap-2">
                      <IconSettings
                        height={20}
                        width={20}
                        className="ti ti-settings n3-color fs-five cpoint"
                      />
                      <Link href="#" className="n3-color fs-seven">
                        Settings
                      </Link>
                    </div>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        )}
      </div>
    </>
  );
}
