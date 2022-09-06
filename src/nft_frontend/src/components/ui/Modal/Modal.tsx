import React, { useCallback } from "react";
import "./modal.css";

type ShowPopUp = {
  close: () => void;
};

const Modal: React.FC<ShowPopUp> = ({ close }) => {
  const onClick = useCallback(() => {
    close();
  }, [close]);

  return (
    <div className="modal__wrapper">
      <div className="single__modal">
        <span className="close__modal">
          <i className="ri-close-line" onClick={onClick} />
        </span>

        <h6 className="text-center text-light">Place a Bid</h6>
        <p className="text-center text-light">
          You must bid at least <span className="money">5.89 ICP</span>
        </p>

        <div className="input__item mb-4">
          <input type="number" placeholder="00 : 00 ICP" />
        </div>

        <div className="input__item mb-3">
          <h6>Enter Quantity, 7 available</h6>
          <input type="number" placeholder="Enter quantity" />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>You must bid at least</p>
          <span className="money">5.89 ICP</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Service Fee</p>
          <span className="money">0.89 ICP</span>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <p>Total Bid Amount</p>
          <span className="money">5.89 ICP</span>
        </div>

        <button className="place__bid-btn">Place a Bid</button>
      </div>
    </div>
  );
};

export default Modal;
