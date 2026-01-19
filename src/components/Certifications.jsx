import { Container, Row, Col } from "react-bootstrap";
import logoComptia from "../assets/img/certs/comptia.svg";
import logoCisco from "../assets/img/certs/cisco.svg";
import logoGoogle from "../assets/img/certs/google.svg";
import logoMicrosoft from "../assets/img/certs/microsoft.svg";
import logoIsc2 from "../assets/img/certs/isc2.svg";

const certifications = [
  {
    title: "CompTIA Security+ (SY0-701)",
    logo: logoComptia,
    alt: "CompTIA logo",
  },
  {
    title: "CCNA (200-301)",
    logo: logoCisco,
    alt: "Cisco logo",
  },
  {
    title: "CompTIA Network+ (N10-009)",
    logo: logoComptia,
    alt: "CompTIA logo",
  },
  {
    title: "Google IT Automation using Python",
    logo: logoGoogle,
    alt: "Google logo",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    logo: logoMicrosoft,
    alt: "Microsoft logo",
  },
  {
    title: "(ISC)² Certified in Cybersecurity (CC)",
    logo: logoIsc2,
    alt: "ISC2 logo",
  },
];

export const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <Container>
        <Row>
          <Col>
            <h2>Certifications</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="certification-grid">
              {certifications.map((item) => (
                <div className="certification-card" key={item.title}>
                  <div className="certification-logo">
                    <img src={item.logo} alt={item.alt} />
                  </div>
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
