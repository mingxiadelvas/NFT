import React from "react";
import { Container } from "react-bootstrap";
import "./common-section.css";

type Properties = {
  title: string;
};

const CommonSection: React.FC<Properties> = ({ title }) => {
  return (
    <section className="common__section">
      <Container className="text-center">
        <h2>{title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
