import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <p></p>
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="contact-chips contact-chips--footer">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.6 6.5 12.5 6.5 12.5s6.5-7.9 6.5-12.5c0-3.6-2.9-6.5-6.5-6.5zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                </span>
                <span className="contact-text">UK (open to relocate)</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
                  </svg>
                </span>
                <span className="contact-text">Immediately Available</span>
              </div>
              <a className="contact-item contact-link" href="mailto:hnshubodaya@gmail.com">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2l8 5 8-5H4zm16 10V9l-8 5-8-5v8h16z" />
                  </svg>
                </span>
                <span className="contact-text">hnshubodaya@gmail.com</span>
              </a>
              <a className="contact-item contact-link" href="tel:+447436301739">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" focusable="false">
                    <path d="M6.6 10.2c1.4 2.5 3.7 4.7 6.2 6.2l2.1-2.1c.3-.3.8-.4 1.2-.2 1 .4 2.1.6 3.2.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.3c.6 0 1 .4 1 1 0 1.1.2 2.2.6 3.2.1.4 0 .9-.2 1.2l-2.1 2.1z" />
                  </svg>
                </span>
                <span className="contact-text">+44 7436301739</span>
              </a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shubodaya" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/shubodaya" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
