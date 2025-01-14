'use client';
import Image from 'next/image';
import { useState } from 'react';
import FooterWithdrawal from './FooterWithdrawal';
import CustomModal from '@/components/Modals/CustomModal';
import WithdrawalProgress from '@/public/images/withdrawal-progress.png';
export default function Withdrawal() {
  const [coin, setCoin] = useState(0);
  const [usd, setUsd] = useState(0);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [isConfirmationModal, setIsConfirmationModal] = useState(false);
  const [isSuccessModal, setIsSuccessModal] = useState(false);
  return (
    <>
      <section className="top_matches">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 gx-0 gx-lg-4">
              <div className="top_matches__main">
                <div className="row w-100 d-flex d-center">
                  <div className="row">
                    <div className="">
                      <div className="">
                        <div
                          style={{
                            backgroundColor: '#13a6d4',
                            padding: 10,
                            borderRadius: 10,
                          }}
                        >
                          <span className='fs-6 fs-md-5'>Current Balance</span>
                          <div className="col d-flex d-center justify-content-between">
                            <span className="fs-3 fs-md-2">120 Coins</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 row justify-content-between">
                        <div className="col-6">
                          <div
                            style={{
                              backgroundColor: 'rgb(26,26,26)',
                              borderRadius: 10,
                              padding: 15,
                            }}
                          >
                            <p>Total Won</p>
                            <p style={{ color: 'rgb(0, 255, 0)' }}>200 coins</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div
                            style={{
                              padding: 15,
                              backgroundColor: 'rgb(26,26,26)',
                              borderRadius: 10,
                            }}
                          >
                            <p>Total Won</p>
                            <p style={{ color: 'rgb(255, 0, 0)' }}>200 coins</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-5">
                      <div className="row">
                        <span>Withdrawal Request</span>
                      </div>
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
                              Coins Withdrawal
                            </p>
                            <p className="mt-1 fs-7 fs-md-6  text-white" style={{fontWeight: 'lighter'}}>
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
                              $50
                            </p>
                            <p
                              className="fs-7 fs-md-6"
                              style={{
                                textAlign: 'center',fontWeight: 'lighter'
                              }}
                            >
                             100 Coins
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
                              Coins Withdrawal
                            </p>
                            <p className="mt-1 fs-7 fs-md-6 text-white" style={{fontWeight: 'lighter'}}>
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
                              $200
                            </p>
                            <p
                              className="fs-7 fs-md-6"
                              style={{
                                textAlign: 'center', fontWeight: 'lighter',
                              }}
                            >
                             400 Coins
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
                              Coins Withdrawal
                            </p>
                            <p className="mt-1 fs-7 fs-md-6 text-white" style={{fontWeight: 'lighter'}}>
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
                              $50
                            </p>
                            <p
                              className="fs-7 fs-md-6"
                              style={{
                                textAlign: 'center', fontWeight: 'lighter',
                              }}
                            >
                            100 Coins
                            </p>
                          </div>
                        </li>
                      </ul>
                      <div className="mb-16 mb-md-0 container pt-5 d-flex justify-content-center">
                        <button
                          onClick={() => setIsCardExpanded(true)}
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
                          Withdrawal Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterWithdrawal
          coin={coin}
          setCoin={setCoin}
          usd={usd}
          setUsd={setUsd}
          isCardExpanded={isCardExpanded}
          setIsCardExpanded={setIsCardExpanded}
          setIsConfirmationModal={setIsConfirmationModal}
        />
        <CustomModal
          open={isConfirmationModal}
          handleClose={() => setIsConfirmationModal(false)}
          title={''}
          desc={''}
          width={''}
          btn1Text={'No'}
          btn2Text={'Yes'}
          btn1Handler={() => setIsConfirmationModal(false)}
          btn2Handler={() => {
            setIsConfirmationModal(false), setIsSuccessModal(true);
          }}
          btn1Type={'close'}
          btn2Type={'success'}
          btn2Disable={false}
          backgroundColor={''}
          textColor={''}
        >
          <p className="text-black mb-5 text-center">
            Are you sure, you want to place <strong>{coin} coins</strong> coins
            bet on <strong>${usd}</strong> team.
          </p>
        </CustomModal>

        <CustomModal
          open={isSuccessModal}
          handleClose={() => setIsSuccessModal(false)}
          title={''}
          desc={''}
          width={''}
          btn1Text={'Done'}
          btn2Text={''}
          btn1Handler={() => setIsSuccessModal(false)}
          btn2Handler={() => {}}
          btn1Type={'success'}
          btn2Type={''}
          btn2Disable={false}
          backgroundColor={''}
          textColor={''}
        >
          <Image
            src={WithdrawalProgress}
            alt="WithdrawalProgress"
            height={209}
            width={170}
          />
          <p className="mt-4 text-black mb-1 text-center">
            Thank You for your withdrawal request. Please note that this
            transaction may take up to <strong>72 Hours</strong> to process.
          </p>
        </CustomModal>
      </section>
    </>
  );
}
