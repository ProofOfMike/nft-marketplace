import React, { useEffect, useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import './style.css';
import Image from 'next/image';
import FriendListModal from './FriendListModal';
import FilterModal from './FilterModal';
import NoBetComponent from './NoBetComponent';

interface props {
  currentKey: string;
  isHomeTab: string;
  setIsHomeTab: (option: string) => void;
  setIsCardExpanded: (value: boolean) => void;
}

const TabsComponent: React.FC<props> = ({
  currentKey,
  isHomeTab,
  setIsHomeTab,
  setIsCardExpanded,
}) => {
  const [isBetAvailable, setIsBetAvailable] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);

  const handleShowFilter = () => {
    setShowFilterModal(false);
  };
  useEffect(() => {
    if (isBetAvailable === false) {
      setTimeout(() => {
        setIsBetAvailable(true);
      }, 3000);
    }
  }, [isBetAvailable]);

  return (
    <>
      <Tab.Container
        id="tabs-example"
        activeKey={isHomeTab}
        onSelect={(isHomeTab) => setIsHomeTab(isHomeTab as string)}
      >
        <Nav
          variant="tabs"
          className="w-100 custom-tabs"
          style={{
            backgroundColor: '#161616',
            border: 'none',
            borderRadius: '35px',
            padding: '10px',
          }}
        >
          <Nav.Item className="flex-fill">
            <Nav.Link
              eventKey="home"
              className="text-center fs-6 fs-sm-5"
              style={{
                border: 'none',
                backgroundColor:
                  isHomeTab === 'home' ? '#13A6D4' : 'transparent',
                color: '#fff',
                borderRadius: '35px',
              }}
            >
              Baltimore Ravens
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-fill">
            <Nav.Link
              eventKey="profile"
              className="text-center  fs-6 fs-sm-5"
              style={{
                border: 'none',
                backgroundColor:
                  isHomeTab === 'profile' ? '#13A6D4' : 'transparent',
                color: '#fff',
                borderRadius: '35px',
              }}
            >
              Atlanta
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="pt-3">
          <Tab.Pane eventKey="home">
            {!isBetAvailable ? (
              <NoBetComponent
                title={
                  'No one has placed a bet yet. Place your bet now and join the action.'
                }
              />
            ) : (
              <>
                <div className="mt-5">
                  <div className="d-flex justify-content-between mb-5">
                    {/* <p>Open Wagers (20)</p> */}
                    <p>Bat Status</p>
                    <p
                      onClick={() => setShowFilterModal(true)}
                      className="cursor-pointer"
                    >
                      Filters
                    </p>
                  </div>

                  <div
                    style={{ backgroundColor: '#161616', borderRadius: '20px' }}
                  >
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p className="text-white">May 29 11:49 AM</p>
                        </div>
                      </div>
                      <div>
                        <p style={{ color: '#15CCE5', textAlign: 'center' }}>
                          +140 Coins
                        </p>
                        <div
                          style={{
                            backgroundColor: '#13A6D4',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            height: '30px',
                            padding: '10px 20px',
                            fontSize: '14px',
                          }}
                        >
                          Matched
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p className="text-white">May 29 11:49 AM</p>{' '}
                        </div>
                      </div>
                      <div>
                        <p style={{ color: '#15CCE5', textAlign: 'center' }}>
                          +140 Coins
                        </p>
                        <div
                          style={{
                            backgroundColor: '#13A6D4',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            height: '30px',
                            padding: '10px 20px',
                            fontSize: '14px',
                            color: 'black',
                          }}
                        >
                          Awaiting
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p className="text-white">May 29 11:49 AM</p>{' '}
                        </div>
                      </div>
                      <div>
                        <p style={{ color: '#15CCE5', textAlign: 'center' }}>
                          +140 Coins
                        </p>
                        <div
                          style={{
                            backgroundColor: '#13A6D4',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            height: '30px',
                            padding: '10px 20px',
                            fontSize: '14px',
                          }}
                        >
                          Matched
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p className="text-white">May 29 11:49 AM</p>
                        </div>
                      </div>
                      <div>
                        <p style={{ color: '#15CCE5', textAlign: 'center' }}>
                          +140 Coins
                        </p>
                        <div
                          style={{
                            backgroundColor: '#13A6D4',
                            display: 'flex',
                            alignItems: 'center',
                            borderRadius: '20px',
                            height: '30px',
                            padding: '10px 20px',
                            fontSize: '14px',
                            color: 'black',
                          }}
                        >
                          Awaiting
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {currentKey === 'abc' && (
                  <div className="mt-5">
                    <div className="d-flex align-items-center justify-content-between mb-5">
                      <p>Matched Wagers (10)</p>
                      <p
                        onClick={() => setShowFilterModal(true)}
                        className="cursor-pointer"
                      >
                        Filters
                      </p>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#161616',
                        borderRadius: '20px',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: '#161616',
                          padding: '10px',
                          borderRadius: '15px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <Image
                            className="logo"
                            width={50}
                            height={50}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <div className="mx-3">
                            <p>John</p>
                            <p>May 26 11:49 AM</p>
                          </div>
                        </div>
                        <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#161616',
                          padding: '10px',
                          borderRadius: '15px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <Image
                            className="logo"
                            width={50}
                            height={50}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <div className="mx-3">
                            <p>John</p>
                            <p>May 26 11:49 AM</p>
                          </div>
                        </div>
                        <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#161616',
                          padding: '10px',
                          borderRadius: '15px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <Image
                            className="logo"
                            width={50}
                            height={50}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <div className="mx-3">
                            <p>John</p>
                            <p>May 26 11:49 AM</p>
                          </div>
                        </div>
                        <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                      </div>

                      <div
                        style={{
                          backgroundColor: '#161616',
                          padding: '10px',
                          borderRadius: '15px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                        }}
                      >
                        <div className="d-flex">
                          <Image
                            className="logo"
                            width={50}
                            height={50}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <div className="mx-3">
                            <p>John</p>
                            <p>May 26 11:49 AM</p>
                          </div>
                        </div>
                        <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </Tab.Pane>
          <Tab.Pane eventKey="profile">
            {!isBetAvailable ? (
              <NoBetComponent
                title={
                  'No one has placed a bet yet. Place your bet now and join the action.'
                }
              />
            ) : (
              <>
                <div className="mt-5">
                  <div className="d-flex justify-content-between mb-5">
                    <p>Open Wagers (20)</p>
                    <p
                      onClick={() => setShowFilterModal(true)}
                      className="cursor-pointer"
                    >
                      Filters
                    </p>
                  </div>
                  <div
                    style={{ backgroundColor: '#161616', borderRadius: '20px' }}
                  >
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                        </div>
                      </div>
                      <div
                        onClick={() => setIsCardExpanded(true)}
                        style={{
                          backgroundColor: '#13A6D4',
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: '20px',
                          height: '30px',
                          padding: '10px 10px',
                          cursor: 'pointer',
                          fontSize: "14px"
                        }}
                      >
                        Accept Now
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                        </div>
                      </div>
                      <div
                        onClick={() => setIsCardExpanded(true)}
                        style={{
                          backgroundColor: '#13A6D4',
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: '20px',
                          height: '30px',
                          padding: '10px 10px',
                          cursor: 'pointer',
                          fontSize: "14px"
                        }}
                      >
                        Accept Now
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                        </div>
                      </div>
                      <div
                        onClick={() => setIsCardExpanded(true)}
                        style={{
                          backgroundColor: '#13A6D4',
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: '20px',
                          height: '30px',
                          padding: '10px 10px',
                          cursor: 'pointer',
                          fontSize: "14px"
                        }}
                      >
                        Accept Now
                      </div>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex align-items-center">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                        </div>
                      </div>
                      <div
                        onClick={() => setIsCardExpanded(true)}
                        style={{
                          backgroundColor: '#13A6D4',
                          display: 'flex',
                          alignItems: 'center',
                          borderRadius: '20px',
                          height: '30px',
                          padding: '10px 10px',
                          cursor: 'pointer',
                          fontSize: "14px"
                        }}
                      >
                        Accept Now
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <div className="d-flex justify-content-between mb-5">
                    <p>Matched Wagers (10)</p>
                    <p
                      onClick={() => setShowFilterModal(true)}
                      className="cursor-pointer"
                    >
                      Filters
                    </p>
                  </div>
                  <div
                    style={{ backgroundColor: '#161616', borderRadius: '20px' }}
                  >
                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p>May 26 11:49 AM</p>
                        </div>
                      </div>
                      <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p>May 26 11:49 AM</p>
                        </div>
                      </div>
                      <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p>May 26 11:49 AM</p>
                        </div>
                      </div>
                      <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                    </div>

                    <div
                      style={{
                        backgroundColor: '#161616',
                        padding: '10px',
                        borderRadius: '15px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #1F1F1F',
                      }}
                    >
                      <div className="d-flex">
                        <Image
                          className="logo"
                          width={50}
                          height={50}
                          src="/images/image_placeholder.png"
                          alt="Logo"
                        />
                        <div className="mx-3">
                          <p>John</p>
                          <p>May 26 11:49 AM</p>
                        </div>
                      </div>
                      <p style={{ color: '#15CCE5' }}>+140 Coins</p>
                    </div>
                  </div>
                </div>
                {/* <div className="mt-5">
              <div className="d-flex justify-content-between mb-5">
                <p>Matched Wagers (10)</p>
                <p
                  onClick={() => setShowFilterModal(true)}
                  className="cursor-pointer"
                >
                  Filters
                </p>
              </div>
              <div style={{ backgroundColor: "#161616", borderRadius: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#161616",
                    padding: "10px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="d-flex">
                    <Image
                      className="logo"
                      width={50}
                      height={50}
                      src="/images/image_placeholder.png"
                      alt="Logo"
                    />
                    <div className="mx-3">
                      <p>John</p>
                      <p style={{ color: "#15CCE5" }}>+140 Coins</p>
                    </div>
                  </div>
                  <div
                  onClick={() => setIsCardExpanded(true)}
                    style={{
                      backgroundColor: "#13A6D4",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "20px",
                      height: "30px",
                      padding: "10px 10px",
                      cursor: "pointer"
                    }}
                  >
                    Accept Now
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#161616",
                    padding: "10px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="d-flex">
                    <Image
                      className="logo"
                      width={50}
                      height={50}
                      src="/images/image_placeholder.png"
                      alt="Logo"
                    />
                    <div className="mx-3">
                      <p>John</p>
                      <p style={{ color: "#15CCE5" }}>+140 Coins</p>
                    </div>
                  </div>
                  <div
                  onClick={() => setIsCardExpanded(true)}
                    style={{
                      backgroundColor: "#13A6D4",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "20px",
                      height: "30px",
                      padding: "10px 10px",
                    }}
                  >
                    Accept Now
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#161616",
                    padding: "10px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="d-flex">
                    <Image
                      className="logo"
                      width={50}
                      height={50}
                      src="/images/image_placeholder.png"
                      alt="Logo"
                    />
                    <div className="mx-3">
                      <p>John</p>
                      <p style={{ color: "#15CCE5" }}>+140 Coins</p>
                    </div>
                  </div>
                  <div
                  onClick={() => setIsCardExpanded(true)}
                    style={{
                      backgroundColor: "#13A6D4",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "20px",
                      height: "30px",
                      padding: "10px 10px",
                      cursor: "pointer"
                    }}
                  >
                    Accept Now
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "#161616",
                    padding: "10px",
                    borderRadius: "15px",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div className="d-flex">
                    <Image
                      className="logo"
                      width={50}
                      height={50}
                      src="/images/image_placeholder.png"
                      alt="Logo"
                    />
                    <div className="mx-3">
                      <p>John</p>
                      <p style={{ color: "#15CCE5" }}>+140 Coins</p>
                    </div>
                  </div>
                  <div
                  onClick={() => setIsCardExpanded(true)}
                    style={{
                      backgroundColor: "#13A6D4",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "20px",
                      height: "30px",
                      padding: "10px 10px",
                      cursor: "pointer"
                    }}
                  >
                    Accept Now
                  </div>
                </div>
              </div>
            </div> */}
              </>
            )}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      {showFilterModal && (
        <FilterModal
          show={showFilterModal}
          setShow={handleShowFilter}
          isBetPage={false}
        />
      )}
    </>
  );
};

export default TabsComponent;
