import { Container, Row, Col } from "react-bootstrap";

const educationItems = [
  {
    degree: "MSc in Cybersecurity (NCSC Certified)",
    dates: "Sep 2023 - Dec 2024",
    badges: ["Swansea University", "Swansea, Wales, UK", "Distinction"],
  },
  {
    degree: "BEng in Electronics and Communication",
    dates: "Jul 2016 - Aug 2020",
    badges: ["Vidya Vardhaka College of Engineering", "Mysore, India", "Graduated"],
  },
];

export const Education = () => {
  return (
    <section className="education-section" id="education">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Education</h2>
          </Col>
        </Row>
        <Row className="education-list">
          {educationItems.map((item) => (
            <Col md={12} key={item.degree} className="education-card">
              <div className="education-header">
                <h3>{item.degree}</h3>
                <span className="education-dates">{item.dates}</span>
              </div>
              <div className="education-tags">
                {item.badges.map((badge) => (
                  <span key={badge}>{badge}</span>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
