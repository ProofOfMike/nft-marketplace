'use client';

import React, { useEffect, useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import Image from 'next/image';
import './style.css';
import CustomModal from '../Modals/CustomModal';

const FriendListModal = ({ show, setShow, setIsBetConfirmModal }: any) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFriends, setFilteredFriends] = useState<any>([]);
  const [notFound, setNotFound] = useState(false);

  const handleClose = () => setShow(false);

  const friends = [
    {
      id: 1,
      name: 'David',
      image: '/images/jack.png',
      friend: true,
      searchId: '1',
    },
    {
      id: 2,
      name: 'Jack Doe',
      image: '/images/jack.png',
      friend: true,
      searchId: '2',
    },
    {
      id: 3,
      name: 'Michael',
      image: '/images/jack.png',
      friend: false,
      searchId: '3',
    },
    {
      id: 4,
      name: 'Willom Do.',
      image: '/images/jack.png',
      friend: true,
      searchId: '4',
    },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    setNotFound(false);
    const filteredFriends = friends.filter((friend) => {
      console.log('here');
      if (searchTerm) {
        return friend.name.includes(searchTerm);
      } else {
        return friend.friend;
      }
    });
    setFilteredFriends(filteredFriends);

    if (filteredFriends.length === 0) {
      setNotFound(true);
    }
  }, [searchTerm]);

  return (
    <>
      <CustomModal
        open={show}
        handleClose={() => handleClose()}
        title={'Friend List'}
        desc={''}
        width={''}
        btn1Text={'Continue'}
        btn2Text={''}
        btn1Handler={() => {
          handleClose(), setIsBetConfirmModal(true);
        }}
        btn2Handler={() => {}}
        btn1Type={'success'}
        btn2Type={''}
        btn2Disable={false}
        backgroundColor={'#292929'}
      >
        <Form>
          <Form.Control
            type="text"
            placeholder="Search With Name Or Phone Number"
            className="custom-placeholder"
            value={searchTerm}
            onChange={handleSearch}
            style={{
              marginBottom: '20px',
              marginTop: '10px',
              backgroundColor: '#161616',
              color: 'white',
              border: 'none',
              padding: '10px',
              borderRadius: '10px',
            }}
          />
        </Form>
        {!notFound && (
          <p style={{ marginBottom: '20px' }}>
            Select any friends from your list so as to place a bet together
          </p>
        )}
        <div>
          {filteredFriends.length > 0 ? (
            filteredFriends.map((friend: any) => (
              <div
                key={friend.id}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '10px',
                  padding: '10px 0',
                  borderBottom: '1px solid #444',
                }}
              >
                <input
                  type="radio"
                  id={`friend-${friend.id}`}
                  name="friend"
                  className="custom-radio"
                  disabled={!friend.friend}
                />
                <label
                  htmlFor={`friend-${friend.id}`}
                  className="custom-radio-container"
                >
                  <div className="radio-display"></div>
                </label>
                <Image
                  src={friend.image}
                  width={40}
                  height={40}
                  alt={`${friend.name} Image`}
                  style={{ borderRadius: '50%', marginLeft: 15 }}
                />
                <span style={{ marginLeft: '10px', color: 'white' }}>
                  {friend.name}
                </span>
                {!friend.friend && (
                  <Button
                    style={{
                      backgroundColor: '#13A6D4',
                      color: 'white',
                      borderRadius: '20px',
                      border: 'none',
                      marginLeft: 'auto',
                      padding: '5px 10px',
                      fontSize: '14px',
                    }}
                  >
                    Invite Now
                  </Button>
                )}
              </div>
            ))
          ) : (
            <div className="no-results-found">
              <Image
                src={'/images/nofriend.png'}
                alt="Not Found"
                height={300}
                width={300}
              />
              <p style={{ marginTop: '20px', color: 'white' }}>
                No Search Found
              </p>
            </div>
          )}
        </div>
      </CustomModal>
    </>
  );
};

export default FriendListModal;
