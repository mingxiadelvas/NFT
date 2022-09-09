import React from "react";
import { Container } from "react-bootstrap";
import PropTypes from 'prop-types';
import background from '../../../../../../public/bg.jpg';
import "./common-section.css";


const CommonSection = ({ title }) => {
  return (
    <section className="common__section" style={{ backgroundImage: `url(${background})` }}>
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

CommonSection.propTypes = {
  title: PropTypes.string
};

export default CommonSection;
