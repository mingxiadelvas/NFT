import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import heroImg from "../../../../../public/hero.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section className="hero__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2>
                Discover rare digital art and collect{" "}
                <span>sell extraordinary</span> NFTs
              </h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
                eaque modi sunt? Rerum, aperiam? Reiciendis corporis quidem
                sequi molestias, illum consectetur repellendus, laudantium
                ducimus porro aut soluta necessitatibus, sapiente veniam?
              </p>

              <div className="hero__btns d-flex align-items-center gap-4">
                <button className="explore__btn d-flex align-items-center gap-2">
                  <i className="ri-rocket-line" />
                  <Link to="/market">Explore</Link>
                </button>
                <button className="create__btn d-flex align-items-center gap-2">
                  <i className="ri-ball-pen-line" />
                  <Link to="/create">Create</Link>
                </button>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero__img">
              <img src={heroImg} alt="Hero" className="hero__img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
