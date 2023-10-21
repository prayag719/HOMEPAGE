import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/hero.png";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Learn Any <br /> Programming Languages <br /> For Free
              </h2>
              <p className="mb-5">
                Embark on your programming journey with our beginner-friendly
                tutorials and illustrative examples. Dive into comprehensive
                guides, experiment with practical examples, write your code, and
                master the art of programming.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
