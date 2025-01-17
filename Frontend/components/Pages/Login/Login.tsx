import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {
  IconBrandGoogle,
  IconBrandTwitterFilled,
  IconBrandFacebookFilled,
} from '@tabler/icons-react';
import LoginCarousel from './LoginCarousel';

export default function Login() {
  return (
    <section style={{minHeight: "100vh"}} className="login_section pt-120 p3-bg">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center">
          <div className="col-6 d-none d-lg-block">
            {/* <div className="login_section__thumb d-center d-lg-block mb-md-6">
              <Image
                className="w-100"
                width={996}
                height={945}
                src="/images/login.png"
                alt="Image"
              />
            </div> */}
            <LoginCarousel />
          </div>
          <div className="col-lg-6 col-xl-5">
            <div className="login_section__loginarea">
              <div className="row justify-content-start">
                <div className="col-xxl-10">
                  <div className="pb-10 pt-8 mb-7 mt-12 mt-lg-0 px-4 px-sm-10">
                    <h3 className="mb-6 mb-md-2">Login</h3>
                    <p className="mb-10 mb-md-10">
                      Use your credentials to login below
                    </p>
                    <div className="login_section__form">
                      <form>
                        <div className="mb-5 mb-md-6">
                          <p className="mb-md-3">Email</p>
                          <input
                            className="n11-bg"
                            name="Input-1"
                            data-name="Input 1"
                            placeholder="Enter Email"
                            type="email"
                            id="Input"
                          />
                        </div>
                        <div className="mb-5 mb-md-6">
                          <p className="mb-md-3">Password</p>
                          <input
                            className="n11-bg"
                            name="Input-3"
                            data-name="Input 3"
                            placeholder="Enter password"
                            type="password"
                            id="Input-3"
                          />
                        </div>
                        <button
                          className="cmn-btn px-5 py-3 mb-6 w-100"
                          type="submit"
                        >
                          Login
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
                          <IconBrandGoogle className="ti ti-brand-google fs-four fw-bold" />
                        </Link>
                      </div>
                    </div> */}
                    <span className="d-center gap-1">
                      {`Don't have an account?`}
                      <Link className="g1-color" href="/create-account">
                        Sing Up
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
