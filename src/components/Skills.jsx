import { useEffect, useState } from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const [showSocAlert, setShowSocAlert] = useState(false);
  const [socAlertMode, setSocAlertMode] = useState("email");
  const [socAlertTimeout, setSocAlertTimeout] = useState(null);
  const [socAutoTimeout, setSocAutoTimeout] = useState(null);
  const [alertPulse, setAlertPulse] = useState(false);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    return () => {
      if (socAlertTimeout) {
        clearTimeout(socAlertTimeout);
      }
      if (socAutoTimeout) {
        clearTimeout(socAutoTimeout);
      }
    };
  }, [socAlertTimeout, socAutoTimeout]);

  useEffect(() => {
    const autoId = setTimeout(() => {
      setSocAlertMode("email");
      setShowSocAlert(true);
      const hideId = setTimeout(() => {
        setShowSocAlert(false);
      }, 6000);
      setSocAlertTimeout(hideId);
    }, 5200);
    setSocAutoTimeout(autoId);
  }, []);

  const handleSocAlertClick = () => {
    if (socAlertTimeout) {
      clearTimeout(socAlertTimeout);
    }
    if (socAutoTimeout) {
      clearTimeout(socAutoTimeout);
    }
    setAlertPulse(true);
    setSocAlertMode("alert");
    setShowSocAlert(true);
    const timeoutId = setTimeout(() => {
      setShowSocAlert(false);
      setAlertPulse(false);
    }, 30000);
    setSocAlertTimeout(timeoutId);
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                Security operations expertise spanning SIEM monitoring, threat detection, vulnerability management,
                and secure network access across enterprise and lab environments.
              </p>
              <div className="section-tags section-tags--center">
                <span>SIEM</span>
                <span>Threat Detection</span>
                <span>Vulnerability Management</span>
              </div>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="SIEM and SOAR" />
                  <h5>SIEM &amp; SOAR (Splunk, Sentinel)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Incident Response" />
                  <h5>Incident Response &amp; Triage</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Threat Detection" />
                  <h5>Threat Detection &amp; Hunting</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Network Security" />
                  <h5>Network Security (FW, VPN, IDS/IPS)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Vulnerability Management" />
                  <h5>Vulnerability Management (Nessus, Qualys)</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Automation and Scripting" />
                  <h5>Automation (Python, PowerShell)</h5>
                </div>
              </Carousel>
              <div className="hero__terminal soc-terminal">
                <div className="hero__terminal-header">SOC Live Logs</div>
                <div className="hero__terminal-body">
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "0s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:32:14 Auth success user=svc-backup
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "0.4s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:32:21 DNS query ok host=repo.internal
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "0.8s" }}>
                    <span className="log-tag log-tag--warn">[WARN]</span> 10:32:33 Unusual port scan detected src=10.20.30.14
                  </span>
                  <button
                    className={`terminal-line terminal-line--persist log-alert-button ${alertPulse ? "log-alert-button--pulse" : ""}`}
                    style={{ "--delay": "1.2s" }}
                    type="button"
                    onClick={handleSocAlertClick}
                  >
                    <span className="log-tag log-tag--alert">[ALERT]</span> 10:32:41 Malicious C2 beacon detected src=10.20.30.14 dst=185.202.1.33
                  </button>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "1.6s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:32:55 Firewall rule applied policy=block_c2
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "2s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:33:02 Incident ticket created id=SOC-1184
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "2.4s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:33:18 GeoIP lookup dst=185.202.1.33 region=RU
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "2.8s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:33:32 Endpoint isolated host=WS-014 via EDR
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "3.2s" }}>
                    <span className="log-tag log-tag--warn">[WARN]</span> 10:33:46 Suspicious PowerShell detected host=WS-014
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "3.6s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:34:02 DNS sinkhole applied domain=c2-update.net
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "4s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:34:15 Packet capture started interface=eth1
                  </span>
                  <span className="terminal-line terminal-line--persist" style={{ "--delay": "4.4s" }}>
                    <span className="log-tag log-tag--info">[INFO]</span> 10:34:27 IOC match hash=6b1f...c9f2
                  </span>
                </div>
                <div className={`log-panel__email ${showSocAlert ? "log-panel__email--show" : ""}`}>
                  <div className="log-panel__email-title">{socAlertMode === "alert" ? "Alert" : "Email Alert"}</div>
                  <div className="log-panel__email-caution">Caution: Immediate action required</div>
                  <p>Critical alert: C2 beacon detected. Action required.</p>
                  <span>To: soc@company.com - Priority: High</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
