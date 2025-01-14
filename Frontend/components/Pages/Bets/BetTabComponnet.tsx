import Image from 'next/image';
import React, { useState } from 'react';
import { Tab, Nav } from 'react-bootstrap';
import DeleteIcon from '@/public/images/icon/delete-icon.svg';
import Link from 'next/link';
import NoBetComponent from '@/components/Shared/NoBetComponent';

const BetTabComponnet = ({ isHomeTab, setIsHomeTab }: any) => {
  const [isRequest, setIsRequest] = useState('ongoing');
  const [isBetAvailable, setIsBetAvailable] = useState(false);
  const [rows, setRows] = useState([
    {
      id: 1,
      name: 'Warner',
      match: 'Las vegas vs Jaguars',
      status: 'Waiting for wager',
      coins: 500,
      resultColor: '#F15EE3',
      link: '/bets/waiting-for-wager',
    },
    {
      id: 2,
      name: 'John Willom',
      match: 'Baltimore vs Atlanta',
      status: 'Decline',
      coins: 500,
      resultColor: '#BD4848',
      link: '/bets/declined-wager',
    },
    // Add more rows as needed
  ]);

  const handleDelete = (id: any) => {
    setRows(rows.filter((row) => row.id !== id));
  };

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
              eventKey="bet-peer"
              className="text-center"
              style={{
                fontSize: "14px",
                border: 'none',
                backgroundColor:
                  isHomeTab === 'bet-peer' ? '#13A6D4' : 'transparent',
                color: '#fff',
                borderRadius: '35px',
              }}
            >
              Peer To Peer
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="flex-fill">
            <Nav.Link
              eventKey="bet-friend"
              className="text-center"
              style={{
                fontSize: "14px",
                border: 'none',
                backgroundColor:
                  isHomeTab === 'bet-friend' ? '#13A6D4' : 'transparent',
                color: '#fff',
                borderRadius: '35px',
              }}
            >
              Friend To Friend
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content className="pt-3">
          <Tab.Pane eventKey="bet-peer">
            {!isBetAvailable ? (
              <NoBetComponent title={'No Bet History Found'} />
            ) : (
              <span></span>
            )}
          </Tab.Pane>
          <Tab.Pane className="pt-5" eventKey="bet-friend">
            <Tab.Container
              id="tabs-example"
              activeKey={isRequest}
              onSelect={(isRequest) => setIsRequest(isRequest as string)}
            >
              <Nav
                variant="pills"
                className=" w-100 gap-3 custom-tabs"
                style={{
                  borderRadius: '10px',
                }}
              >
                <Nav.Item className="flex">
                  <Nav.Link
                    eventKey="ongoing"
                    className="text-center"
                    style={{
                      backgroundColor:
                        isRequest === 'ongoing' ? '#13A6D4' : 'transparent',
                      color: '#fff',
                      border: '2px solid #13A6D4',
                      borderRadius: '10px',
                      fontSize: '14px',
                    }}
                  >
                    Ongoing
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex">
                  <Nav.Link
                    eventKey="request-received"
                    className="text-center"
                    style={{
                      backgroundColor:
                        isRequest === 'request-received'
                          ? '#13A6D4'
                          : 'transparent',
                      color: '#fff',
                      border: '2px solid #13A6D4',
                      borderRadius: '10px',
                      fontSize: '14px',
                    }}
                  >
                    Request Received
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item className="flex">
                  <Nav.Link
                    eventKey="request-sent"
                    className="text-center"
                    style={{
                      backgroundColor:
                        isRequest === 'request-sent'
                          ? '#13A6D4'
                          : 'transparent',
                      color: '#fff',
                      border: '2px solid #13A6D4',
                      borderRadius: '10px',
                      fontSize: '14px',
                    }}
                  >
                    Request Sent
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content className="pt-3">
                <Tab.Pane
                  style={{
                    backgroundColor: '#161616',
                    padding: '10px',
                    borderRadius: '15px',
                  }}
                  eventKey="ongoing"
                >
                  {/* Winner */}
                  <Link href={`/bets/winner`}>
                    <div
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
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            className="logo"
                            width={28}
                            height={28}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <p>NFL</p>
                        </div>
                        <p className="mt-1 text-white">Las vegas vs Jaguars</p>
                        <p className="mt-1 text-white">
                          Result:{' '}
                          <span
                            style={{ color: '#1DC81A', textAlign: 'center' }}
                          >
                            Win
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                        className='fs-3 fs-md-1'
                          style={{
                            color: '#1DC81A',
                            lineHeight: 'unset',
                            margin: '0',
                          }}
                        >
                          +500
                        </p>
                        <p
                          style={{
                            color: '#1DC81A',
                            textAlign: 'center',
                          }}
                        >
                          Coins
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* Winner */}
                  <Link href={`/bets/waiting`}>
                    <div
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
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            className="logo"
                            width={28}
                            height={28}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <p>NFL</p>
                        </div>
                        <p className="mt-1 text-white">Baltimore vs Atlanta</p>
                        <p className="mt-1 text-white">
                          Result:{' '}
                          <span
                            style={{ color: '#15CCE5', textAlign: 'center' }}
                          >
                            Waiting
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                        className='fs-3 fs-md-1'
                          style={{
                            color: '#13A6D4',
                            lineHeight: 'unset',
                            margin: '0',
                          }}
                        >
                          500
                        </p>
                        <p
                          style={{
                            color: '#13A6D4',
                            textAlign: 'center',
                          }}
                        >
                          Coins
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* Loss */}
                  <Link href={`/bets/loss`}>
                    <div
                      style={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            className="logo"
                            width={28}
                            height={28}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <p>NFL</p>
                        </div>
                        <p className="mt-1 text-white">Baltimore vs Atlanta</p>
                        <p className="mt-1 text-white">
                          Result:{' '}
                          <span
                            style={{ color: '#F40D0D', textAlign: 'center' }}
                          >
                            Loss
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                        className='fs-3 fs-md-1'
                          style={{
                            color: '#F40D0D',
                            lineHeight: 'unset',
                            margin: '0',
                          }}
                        >
                          -500
                        </p>
                        <p
                          style={{
                            color: '#F40D0D',
                            textAlign: 'center',
                          }}
                        >
                          Coins
                        </p>
                      </div>
                    </div>
                  </Link>
                </Tab.Pane>
                <Tab.Pane
                  style={{
                    backgroundColor: '#161616',
                    padding: '10px',
                    borderRadius: '15px',
                  }}
                  eventKey="request-received"
                >
                  {/* Winner */}
                  <Link href={'/bets/take-action'}>
                    <div
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
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            className="logo"
                            width={28}
                            height={28}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <p>Warner</p>
                        </div>
                        <p className="mt-1 text-white">Las vegas vs Jaguars</p>
                        <p className="mt-1 text-white">
                          <span
                            style={{ color: '#FDB600', textAlign: 'center' }}
                          >
                            Take Action
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                        className='fs-3 fs-md-1'
                          style={{
                            color: '#FDB600',
                            lineHeight: 'unset',
                            margin: '0',
                          }}
                        >
                          500
                        </p>
                        <p
                          style={{
                            color: '#FDB600',
                            textAlign: 'center',
                          }}
                        >
                          Coins
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* Winner */}
                  <Link href={'/bets/take-action'}>
                    <div
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
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            className="logo"
                            width={28}
                            height={28}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <p>Jack </p>
                        </div>
                        <p className="mt-1 text-white">Baltimore vs Atlanta</p>
                        <p className="mt-1 text-white">
                          <span
                            style={{ color: '#FDB600', textAlign: 'center' }}
                          >
                            Take Action
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                        className='fs-3 fs-md-1'
                          style={{
                            color: '#FDB600',
                            lineHeight: 'unset',
                            margin: '0',
                          }}
                        >
                          500
                        </p>
                        <p
                          style={{
                            color: '#FDB600',
                            textAlign: 'center',
                          }}
                        >
                          Coins
                        </p>
                      </div>
                    </div>
                  </Link>
                  {/* Loss */}
                  <div>
                    <div
                      style={{
                        padding: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    >
                      <div>
                        <div className="d-flex align-items-center gap-2">
                          <Image
                            className="logo"
                            width={28}
                            height={28}
                            src="/images/image_placeholder.png"
                            alt="Logo"
                          />
                          <p>John Willom</p>
                        </div>
                        <p className="mt-1 text-white">Baltimore vs Atlanta</p>
                        <p className="mt-1 text-white">
                          Result:{' '}
                          <span
                            style={{ color: '#BD4848', textAlign: 'center' }}
                          >
                            Decline
                          </span>
                        </p>
                      </div>
                      <div>
                        <p
                        className='fs-3 fs-md-1'
                          style={{
                            color: '#BD4848',
                            lineHeight: 'unset',
                            margin: '0',
                          }}
                        >
                          500
                        </p>
                        <p
                          style={{
                            color: '#BD4848',
                            textAlign: 'center',
                          }}
                        >
                          Coins
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>
                <Tab.Pane
                  style={{
                    backgroundColor: '#161616',
                    padding: '10px',
                    borderRadius: '15px',
                  }}
                  eventKey="request-sent"
                >
                  {/* Winner */}
                  {rows.map((row) => (
                    <Link key={row.id} href={row.link}>
                      <div
                        style={{
                          textDecoration: 'none',
                          color: 'inherit',
                        }}
                      >
                        <div
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
                            <div className="d-flex align-items-center gap-2">
                              <Image
                                className="logo"
                                width={28}
                                height={28}
                                src="/images/image_placeholder.png"
                                alt="Logo"
                              />
                              <p>{row.name}</p>
                            </div>
                            <p className="mt-1 text-white">{row.match}</p>
                            <p className="mt-1 text-white">
                              Result:{' '}
                              <span
                                style={{
                                  color: row.resultColor,
                                  textAlign: 'center',
                                }}
                              >
                                {row.status}
                              </span>
                            </p>
                          </div>
                          <div className="d-flex align-items-center justify-content-center gap-4">
                            <div>
                              <p
                                style={{
                                  color: row.resultColor,
                                  fontSize: '28px',
                                  lineHeight: 'unset',
                                  margin: '0',
                                }}
                              >
                                {row.coins}
                              </p>
                              <p
                                style={{
                                  color: row.resultColor,
                                  textAlign: 'center',
                                }}
                              >
                                Coins
                              </p>
                            </div>
                            <span>
                              <Image
                                src={DeleteIcon}
                                alt="DeleteIcon"
                                width={32}
                                height={32}
                                onClick={(e) => {
                                  e.preventDefault(); // Prevent navigation on delete click
                                  handleDelete(row.id);
                                }}
                                style={{ cursor: 'pointer' }}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </>
  );
};

export default BetTabComponnet;
