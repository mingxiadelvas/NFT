import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SELLER__DATA } from "../../../../assets/data/data";
import "./seller.css";

const SellerSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="seller__section__title">
              <h3>Top Seller</h3>
            </div>
          </Col>

          {SELLER__DATA.map((item) => (
            <Col lang="2" md="3" sm="4" xs="6" key={item.id} className="mb-4">
              <div className="single__seller-card d-flex align-items-center gap-3">
                <div className="seller__img">
                  <img src={item.sellerImg} alt="Avatar" className="w-100" />
                </div>

                <div className="seller__content">
                  <h6>{item.sellerName}</h6>
                  <h6>{item.currentBid} ICP</h6>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default SellerSection;
