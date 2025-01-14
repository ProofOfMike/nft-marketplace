import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  IconBrandGoogle,
  IconBrandTwitterFilled,
  IconBrandFacebookFilled,
} from '@tabler/icons-react';
import RegisterCarousel from './RegisterCarousel';

export default function CreateAcount() {
  return (
    <section className="login_section pt-120 p3-bg">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-6 d-none d-lg-block">
            {/* <div className="login_section__thumb d-none d-lg-block mb-md-6">
              <Image
                className="w-100"
                width={996}
                height={945}
                src="/images/create-acount.png"
                alt="Image"
              />
            </div> */}
            <RegisterCarousel />
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="login_section__loginarea">
              <div className="row justify-content-start">
                <div className="col-xxl-10">
                  <div className="pb-10 pt-8 mb-7 mt-12 mt-lg-0 px-4 px-sm-10">
                    <h3 className="mb-6 mb-md-2">{"Let's Get Started"}</h3>
                    <p className="mb-10 mb-md-10">
                      Enter you information to create an account
                    </p>
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
                        <p className="mb-md-3">Confirm Password</p>
                        <div className="mb-5 mb-md-6">
                          <input
                            className="n11-bg"
                            name="Input-3"
                            data-name="Input 3"
                            placeholder="Enter confirm password"
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
                          Sign Up
                        </button>
                      </form>
                    </div>
                    {/* <div className="login_section__socialmedia text-center mb-6">
                      <span className="mb-6">Or continue with</span>
                      <div className="login_section__social d-center gap-3">
                        <Link href="#" className="n11-bg px-3 py-2 rounded-5">
                          <IconBrandFacebookFilled className="ti ti-brand-facebook-filled fs-four" />
                        </Link>
                        <Link href="#" className="n11-bg px-3 py-2 rounded-5">
                          <IconBrandTwitterFilled className="ti ti-brand-twitter-filled fs-four" />
                        </Link>
                        <Link href="#" className="n11-bg px-3 py-2 rounded-5">
                          <IconBrandGoogle className="ti ti-brand-google fs-four fw-bold " />
                        </Link>
                      </div>
                    </div> */}
                    <span className="d-center gap-1">
                      Already have an account?{' '}
                      <Link className="g1-color" href="/login">
                        Login
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
