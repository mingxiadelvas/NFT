import React from "react";
import CommonSection from "../components/ui/Common-section/CommonSection";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/wallet.css";

const WALLET__DATA = [
  {
    title: "Bitcoin",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    icon: "ri-bit-coin-line",
  },
  {
    title: "Coinbase",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    icon: "ri-coin-line",
  },
  {
    title: "Metamask",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    icon: "ri-money-cny-circle-line",
  },
  {
    title: "Internet Computer",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    icon: "ri-copper-coin-line",
  },
];

const Wallet = () => {
  return (
    <>
      <CommonSection title={"Connect Wallet"} />
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <div className="w-50 m-auto">
                <h3 className="text-light">Connect your wallet</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis illo excepturi, perferendis aliquid quas aperiam
                  reprehenderit modi praesentium impedit possimus libero
                  consectetur omnis eveniet beatae sunt obcaecati cupiditate eos
                  repellat!
                </p>
              </div>
            </Col>
            {WALLET__DATA.map((item, index) => (
              <Col lg="3" md="4" sm="6" key={index} className="mb-4">
                <div className="wallet__item">
                  <span>
                    <i className={item.icon} />
                  </span>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Wallet;
