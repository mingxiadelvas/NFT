import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";
import "./nft-card.css";

interface Item {
  title: string;
  id: string;
  currentBid: number;
  creatorImg: string;
  imgUrl: string;
  creator: string;
}

const NftCard = (props: Item) => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    if (!showModal) {
      setShowModal(true);
    } 
  };

  return (
    <div className="single__nft__card">
      <div className="nft__img">
        <img src={props.imgUrl} alt="image01" className="w-100" />
      </div>

      <div className="nft__content">
        <h5 className="nft__title">
          <Link to={`/market/${props.id}`}>{props.title}</Link>
        </h5>

        <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
            <img src={props.creatorImg} alt="avatar01" className="w-100" />
          </div>

          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
            <div>
              <h6>Created By</h6>
              <p>{props.creator}</p>
            </div>

            <div>
              <h6>Current Bid</h6>
              <p>{props.currentBid} ICP</p>
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

export default NftCard;
