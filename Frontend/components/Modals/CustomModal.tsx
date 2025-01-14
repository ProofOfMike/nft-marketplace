import React from 'react';
import './CustomModalStyle.css'; // Import the CSS file

const CustomModal = ({
  open,
  handleClose,
  title,
  desc,
  children,
  width,
  btn1Text,
  btn2Text,
  btn1Handler,
  btn2Handler,
  btn1Type,
  btn2Type,
  backgroundColor,
  textColor,
  btn2Disable,
}: any) => {
  return (
    <div
      onClick={handleClose}
      className={`custom-modal-container ${
        open ? 'custom-modal-open' : 'custom-modal-hidden'
      }`}
    >
      <div
        className="custom-modal-content"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div
          className="custom-modal-inner"
          style={{ maxWidth: width ? `${width}px` : '440px' }}
        >
          <span onClick={handleClose} className="custom-modal-closeBtn">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6515 12.6974L1.67749 1.72337"
                stroke="#0B0B0B"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M12.4825 1.50868L1.50853 12.4827"
                stroke="#0B0B0B"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </span>
          <div
            style={{
              background: backgroundColor ? backgroundColor : 'white',
              color: textColor ? textColor : 'white',
            }}
            className="custom-modal-header"
          >
            {title}
          </div>
          <div
            style={{
              background: backgroundColor ? backgroundColor : 'white',
              color: textColor ? textColor : 'white',
            }}
            className="custom-modal-body"
          >
            {desc && <p className="custom-modal-description">{desc}</p>}
            {children}
            <div
              style={{
                background: backgroundColor ? backgroundColor : 'white',
                color: textColor ? textColor : 'white',
              }}
              className="custom-modal-footer"
            >
              {btn1Text && btn2Text ? (
                <>
                  <button
                    onClick={(e) => {
                      e.preventDefault(), btn1Handler();
                    }}
                    className={`custom-modal-btn ${
                      btn1Type === 'success'
                        ? 'custom-btn-success'
                        : 'custom-btn-close'
                    }`}
                  >
                    {btn1Text}
                  </button>
                  <button
                    onClick={btn2Handler}
                    className={`custom-modal-btn ${
                      btn2Type === 'success'
                        ? 'custom-btn-success'
                        : 'custom-btn-close'
                    }`}
                    disabled={btn2Disable}
                  >
                    {btn2Text}
                  </button>
                </>
              ) : (
                btn1Text && (
                  <button
                    onClick={(e) => {
                      e.preventDefault(), btn1Handler();
                    }}
                    className={`custom-modal-btn ${
                      btn1Type === 'success'
                        ? 'custom-btn-success'
                        : 'custom-btn-close'
                    }`}
                  >
                    {btn1Text}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModal;
