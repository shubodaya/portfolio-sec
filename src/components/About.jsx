import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
  return (
    <section className="about-section" id="about">
      <Container>
        <Row>
          <Col lg={10}>
            <h2>About</h2>
            <p>
              Aspiring Cybersecurity Professional with 3+ years in 24x7 enterprise technical support and incident management,
              currently transitioning into Security Operations with hands-on experience using SIEM tools.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
