import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { NFT__DATA } from "../../assets/data/data";
import CommonSection from "../components/ui/Common-section/CommonSection";
import LiveAuction from "../components/ui/Live-auction/LiveAuction";
import "../styles/nft-details.css";

const NftDetails = () => {
  const { id } = useParams();

  const singleNft = NFT__DATA.find((item) => item.id === id);
  return (
    <>
      <CommonSection title={singleNft ? singleNft.title : ""} />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <img
                src={singleNft?.imgUrl}
                alt="Image"
                className="single__nft-img w-100"
              />
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="single__nft__content">
                <h2>{singleNft?.title}</h2>
                <div className="d-flex align-items-center justify-content-between mt-4 mb-4">
                  <div className="single__nft-seen d-flex align-items-center gap-4">
                    <span>
                      <i className="ri-eye-line" /> 234
                    </span>
                    <span>
                      <i className="ri-heart-line" /> 1234
                    </span>
                  </div>

                  <div className="single__nft-more d-flex align-items-center gap-2">
                    <span>
                      <i className="ri-send-plane-line" />
                    </span>
                    <span>
                      <i className="ri-more-line" />
                    </span>
                  </div>
                </div>

                <div className="nft__creator d-flex align-items-center gap-3">
                  <div className="creator__img">
                    <img
                      src={singleNft?.creatorImg}
                      alt="Avatar"
                      className="w-100"
                    />
                  </div>
                  <div className="creator__details">
                    <p>Created By</p>
                    <h6>{singleNft?.creator}</h6>
                  </div>
                </div>

                <p className="my-4">{singleNft?.desc}</p>
                <button className="singleNft-btn d-flex align-items-center gap-2 w-100">
                  <i className="ri-shopping-bag-line" />
                  <Link to="/wallet">Place a Bid</Link>
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <LiveAuction />
    </>
  );
};

export default NftDetails;
