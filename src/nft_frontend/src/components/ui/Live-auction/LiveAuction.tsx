import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import NftCard from "../Nft-card/NftCard";
import { NFT__DATA } from "../../../../assets/data/data";
import "./live-auction.css";

const LiveAuction = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="live__auction__top d-flex align-items-center justify-content-between">
              <h3>Live Auction</h3>
              <span>
                <Link to="/market">Explore more</Link>
              </span>
            </div>
          </Col>

          {NFT__DATA.slice(0, 6).map((item) => (
            <Col lg="3" md="4" sz="6" key={item.id} className="mb-4">
              <NftCard
                id={item.id}
                title={item.title}
                currentBid={item.currentBid}
                creatorImg={item.creatorImg}
                imgUrl={item.imgUrl}
                creator={item.creator}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default LiveAuction;
