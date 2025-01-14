import React, { useState } from 'react';
import { Modal, Button, Dropdown } from 'react-bootstrap';
import { Tab, Nav } from 'react-bootstrap';

const CounterModal = ({ show, setShow, onSubmit }: any) => {
  const [count, setCount] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [key, setKey] = useState('peer');

  const handleClose = () => setShow(false);
  const handleSelect = (eventKey: any) => setSelectedOption(eventKey);
  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header
        closeButton
        style={{ backgroundColor: '#292929', borderColor: '#444' }}
      >
        <Modal.Title style={{ color: '#fff' }}>Place a Bet</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: '#292929', color: '#fff' }}>
        <p className="my-2">Choose a team to place bet</p>
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
          <Dropdown.Menu style={{ backgroundColor: '#13A6D4', width: '100%' }}>
            <Dropdown.Item eventKey="Option 1" style={{ color: 'white' }}>
              Option 1
            </Dropdown.Item>
            <Dropdown.Item eventKey="Option 2" style={{ color: 'white' }}>
              Option 2
            </Dropdown.Item>
            <Dropdown.Item eventKey="Option 3" style={{ color: 'white' }}>
              Option 3
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="my-5">
          <p className="my-3">Types of bet</p>
          <div
            style={{
              backgroundColor: '#161616',
              borderRadius: '35px',
              display: 'flex',
              padding: '5px',
            }}
          >
            <div
              onClick={() => {
                setKey('peer');
              }}
              style={{
                backgroundColor: key === 'peer' ? '#13A6D4' : '#161616',
                borderRadius: '35px',
                textAlign: 'center',
                flex: 1,
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              Peer to Peer
            </div>
            <div
              onClick={() => {
                setKey('friend');
              }}
              style={{
                backgroundColor: key === 'friend' ? '#13A6D4' : '#161616',
                borderRadius: '35px',
                textAlign: 'center',
                flex: 1,
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              Friend to Friend
            </div>
          </div>
        </div>
        <p className="my-3">Bet Amount </p>
        <div className="d-flex justify-content-center align-items-center mt-4">
          <Button variant="secondary" onClick={decrementCount}>
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
          <Button variant="secondary" onClick={incrementCount}>
            +
          </Button>
        </div>
        <div
          className="d-flex justify-content-center align-items-center mt-4"
          style={{ fontSize: '5px' }}
        >
          <p>Bets will be placed in increments of 5.</p>
        </div>
      </Modal.Body>
      <Modal.Footer
        style={{ backgroundColor: '#292929', justifyContent: 'center' }}
      >
        <Button
          style={{
            backgroundColor: '#17C047',
            color: 'white',
            borderRadius: '35px',
            border: 'none',
            padding: '15px 70px 15px 70px',
            fontSize: '16px',
            minWidth: '100px',
          }}
          onClick={onSubmit}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CounterModal;
