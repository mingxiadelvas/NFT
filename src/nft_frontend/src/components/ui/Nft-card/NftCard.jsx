import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";
import "./nft-card.css";

const NftCard = ({ title, id, currentBid, creatorImg, imgUrl, creator }) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    if (!showModal) {
      setShowModal(true);
    }
  };

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={imgUrl} alt="Image" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${id}`}>{title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={creatorImg} alt="Avatar" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{currentBid} ICP</p>
            </div>
          </div>
        </div>

        <div className="mt-3 d-flex align-items-center justify-content-between">
          <button
            className="bid__btn d-flex align-items-center gap-1"
            onClick={handleClick}
          >
            <i className="ri-shopping-bag-line" />
            Place Bid
          </button>

          {showModal && <Modal close={() => setShowModal(false)} />}

          <span className="history__link">
            <Link to="#">View History</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

NftCard.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  currentBid: PropTypes.number,
  creatorImg: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  creator: PropTypes.string,
}

export default NftCard;
