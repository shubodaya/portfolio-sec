import { Container, Row, Col } from "react-bootstrap";

const experienceItems = [
  {
    role: "IT Support Engineer (Freelance)",
    company: "Itarmi IT Services",
    location: "United Kingdom",
    dates: "May 2025 - Present",
    highlights: [
      "Supported incident triage and containment with a focus on secure access, availability, and network hygiene.",
      "Validated secure network configurations during deployments and break-fix activities across routers, switches, and APs.",
      "Coordinated with NOC/engineering to isolate access anomalies and restore service safely.",
      "Maintained audit-ready documentation and change records for security-sensitive tasks.",
    ],
    achievements: [
      "Resolved 25+ on-site and remote incidents with customer-ready completion reports.",
      "Sustained priority-ticket turnaround within SLA targets across client environments.",
    ],
  },
  {
    role: "Technical Support Engineer",
    company: "SonicWall Technologies",
    location: "Bangalore, India",
    dates: "May 2021 - Aug 2023",
    highlights: [
      "Owned P1-P3 incidents in a 24x7 enterprise security support environment with escalation accountability.",
      "Performed threat hunting and compliance reporting using SonicWall Analytics and CSC.",
      "Configured and tuned App Control, Content Filtering, IPS, Gateway AV, Anti-Spam, DPI, and CATP services.",
      "Designed and troubleshot firewalls, NAT, ACLs, VPNs, HA, SD-WAN, and multi-site routing.",
      "Integrated LDAP/RADIUS with AD for LAN/WLAN/SSL VPN access, MFA, and role-based controls.",
      "Investigated CVEs, traced exploit paths, and guided mitigation using SonicWall security features.",
      "Analyzed logs, packet captures, and flow data to isolate root cause across VPN, routing, and HA incidents.",
      "Supported ZTD via SonicWall Cloud and maintained secure configuration baselines.",
      "Reproduced defects in lab environments and coordinated hotfixes and RMAs.",
    ],
    achievements: [
      "Authored 20+ knowledge base articles, reducing inbound support volume.",
      "Launched live chat support to production with Development and Salesforce teams.",
      "Recognized with 3 Spot Awards; SNSA & SNSP certified.",
    ],
  },
];

export const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <Container>
        <Row>
          <Col>
            <h2>Experience</h2>
          </Col>
        </Row>
        <Row className="experience-list">
          {experienceItems.map((item) => (
            <Col md={12} key={item.role} className="experience-card">
              <div className="experience-header">
                <h3>{item.role}</h3>
                <span className="experience-dates">{item.dates}</span>
              </div>
              <div className="experience-tags">
                <span>{item.company}</span>
                <span>{item.location}</span>
              </div>
              <div className="experience-grid">
                <div>
                  <h4 className="experience-subtitle">Key Responsibilities</h4>
                  <ul>
                    {item.highlights.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="experience-subtitle">Key Achievements</h4>
                  <ul>
                    {item.achievements.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
