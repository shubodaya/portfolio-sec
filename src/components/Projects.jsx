import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projOwasp from "../assets/img/project-owasp.jpg";
import projSentinel from "../assets/img/project-sentinel.jpg";
import projAudit from "../assets/img/project-audit.jpg";
import projLogAnalyzer from "../assets/img/project-log-analyzer.jpg";
import projAutomotive from "../assets/img/project-automotive.jpg";
import projAutomation from "../assets/img/project-automation.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "OWASP Top 10 WAF Lab",
      description: "Simulated OWASP Top 10 attacks on DVWA and tuned WAF rules to validate detection and prevention.",
      imgUrl: projOwasp,
    },
    {
      title: "Azure Sentinel Home Lab",
      description: "Captured attack traffic, ingested logs into Sentinel, and built analytics rules with geo-IP context.",
      imgUrl: projSentinel,
    },
    {
      title: "Security Audit & Compliance",
      description: "Benchmarked posture against PCI DSS, GDPR, and SOC controls with risk-based remediation plans.",
      imgUrl: projAudit,
    },
    {
      title: "Automated Log Analyzer",
      description: "Python tool to parse local/remote logs, detect security events, and alert in real time.",
      imgUrl: projLogAnalyzer,
    },
    {
      title: "Automotive Cybersecurity TARA",
      description: "ISO 21434-aligned TARA proposing a software-defined firewall for in-vehicle networks.",
      imgUrl: projAutomotive,
    },
    {
      title: "Service Desk Automation",
      description: "Automated service desk workflows for reporting, API uploads, notifications, and health monitoring.",
      imgUrl: projAutomation,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="section-title">Projects</h2>
                  <p>Work focused on security testing, SOC monitoring, compliance, and automation.</p>
                  <div className="section-tags section-tags--center">
                    <span>SOC Labs</span>
                    <span>Security Automation</span>
                    <span>Compliance</span>
                  </div>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                  <div className="projects-cta">
                    <a className="projects-cta__button" href="https://github.com/shubodaya" target="_blank" rel="noreferrer">
                      Explore More Projects
                    </a>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
