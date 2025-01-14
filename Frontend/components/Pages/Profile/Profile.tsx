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

export default function Profile() {
  const [activeItem, setActiveItem] = useState(tabOne[0]);

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
                <div className="row w-100 d-flex d-center">
                  <div className="col-11 col-md-6">
                    <div className="login_section__form">
                      <form>
                        <p className="mb-md-3">Name</p>
                        <div className="mb-5 mb-md-6">
                          <input
                            className="n11-bg"
                            name="Input-2"
                            data-name="Input 2"
                            placeholder="Enter name"
                            type="text"
                            id="Input-2"
                            data-listener-added_da55015d="true"
                          />
                        </div>
                        <p className="mb-md-3">Email</p>
                        <div className="mb-5 mb-md-6">
                          <input
                            className="n11-bg"
                            name="Input-1"
                            data-name="Input 1"
                            placeholder="Enter email"
                            type="email"
                            id="Input"
                          />
                        </div>
                        <p className="mb-md-3">Phone number</p>
                        {/* <div className="mb-5 mb-md-6"> */}
                        <div className="d-flex justify-content-between d-center col gap-4 mb-5 mb-md-6">
                          <span>+1</span>
                          {/* <input
                            className="n11-bg"
                            name="Input-1"
                            data-name="Input 1"
                            placeholder="+1"
                            type="email"
                            id="Input"
                            width={20}
                            // readonly="readOnly"
                          /> */}
                          <input
                            className="n11-bg"
                            name="Input-1"
                            data-name="Input 1"
                            placeholder="Enter email"
                            type="email"
                            id="Input"
                          />
                        </div>
                        <p className="mb-md-3">State</p>
                        <div className="mb-5 mb-md-6">
                          <input
                            className="n11-bg"
                            name="Input-3"
                            data-name="Input 3"
                            placeholder="Alabama"
                            type="password"
                            id="Input-3"
                            // readonly="readOnly"
                          />
                        </div>
                        <p className="mb-md-3">Password</p>
                        <div className="mb-5 mb-md-6">
                          <input
                            className="n11-bg"
                            name="Input-3"
                            data-name="Input 3"
                            placeholder="Enter password"
                            type="password"
                            id="Input-3"
                          />
                        </div>
                        {/* <div className="d-flex align-items-center flex-wrap flex-sm-nowrap gap-2 mb-6">
                          <input type="checkbox" />
                          <span>
                            I agree to all statements with{" "}
                            <Link href="#">Terms of Use</Link>
                          </span>
                        </div> */}
                        <button
                          className="cmn-btn px-5 py-3 mb-6 w-100"
                          type="submit"
                        >
                          Update
                        </button>
                      </form>
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
}
