'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EditIcon from '@/public/images/icon/edit-icon.svg';

export default function Setting() {
  const [imageSrc, setImageSrc] = useState('/images/dummy-profile.jpg'); // Default image
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // To reset file input

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string); // Set the new image source
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEditClick = () => {
    // Trigger the file input click
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    fileInput?.click();
  };

  const inlineStyle = {
    position: 'absolute',
    right: '4px',
    bottom: '4px',
    background: 'white',
    padding: '4px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
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
                    <div className="row gap-10">
                      <div
                        style={{ borderRadius: 100 }}
                        className="row d-flex d-center gap-2"
                      >
                        <div
                          style={{ width: 'fit-content' }}
                          className="d-flex d-center position-relative"
                        >
                          <Image
                            className="logo"
                            width={100}
                            height={100}
                            src={imageSrc}
                            alt="Profile"
                            style={{
                              borderRadius: 100,
                              objectFit: 'cover',
                              width: '100px',
                              height: '100px',
                            }}
                          />
                          <span
                            style={inlineStyle as any}
                            onClick={handleEditClick}
                          >
                            <Image
                              src={EditIcon}
                              alt="edit"
                              width={18}
                              height={18}
                            />
                          </span>
                          <input
                            id="fileInput"
                            type="file"
                            accept="image/*"
                            style={{ display: 'none' }}
                            key={fileInputKey}
                            onChange={handleFileChange}
                          />
                        </div>
                        <span style={{ textAlign: 'center' }}>Andres</span>
                      </div>
                      <div
                        className="col gap-2 rounded-2"
                        style={{
                          backgroundColor: 'rgb(22, 22, 22)',
                          paddingLeft: 0,
                          paddingRight: 0,
                        }}
                      >
                        <div className="rounded-2 p-3 col d-flex justify-content-between">
                          <Link href="/login">Profile</Link>
                          <div>{'>'}</div>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: 'rgb(76,76,76)',
                          }}
                        ></div>
                        <div className="rounded-2 p-3 col d-flex justify-content-between">
                          <Link href="/login">Withdrawal</Link>
                          <div>{'>'}</div>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: 'rgb(76,76,76)',
                          }}
                        ></div>
                        <div className="rounded-2 p-3 col d-flex justify-content-between">
                          <Link href="/login">Privacy</Link>
                          <div>{'>'}</div>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: 'rgb(76,76,76)',
                          }}
                        ></div>
                        <div className="rounded-2 p-3 col d-flex justify-content-between">
                          <Link href="/login">Contact Us</Link>
                          <div>{'>'}</div>
                        </div>
                        <div
                          style={{
                            width: '100%',
                            height: 1,
                            backgroundColor: 'rgb(76,76,76)',
                          }}
                        ></div>
                        <div className="rounded-2 p-3 col d-flex justify-content-between">
                          <Link href="/login">Logout</Link>
                          <div>{'>'}</div>
                        </div>
                      </div>
                      <div className="d-flex d-center">
                        <Link href="#">Delete Account</Link>
                      </div>
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
