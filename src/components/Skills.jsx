import { useEffect, useRef, useState } from "react";
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
  const [socLogs, setSocLogs] = useState([]);
  const [isSocShifting, setIsSocShifting] = useState(false);
  const [isSocSettling, setIsSocSettling] = useState(false);
  const socShiftTimeoutRef = useRef(0);
  const socShiftRafRef = useRef(0);
  const isSocShiftingRef = useRef(false);
  const socLogsRef = useRef([]);
  const socLogIdRef = useRef(0);
  const socLogCounterRef = useRef(0);
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

  const socLogTemplates = [
    { level: "info", message: "Auth success user=svc-backup" },
    { level: "info", message: "DNS query ok host=repo.internal" },
    { level: "warn", message: "Unusual port scan detected src=10.20.30.14" },
    { level: "info", message: "Firewall rule applied policy=block_c2" },
    { level: "info", message: "Incident ticket created id=SOC-1184" },
    { level: "info", message: "GeoIP lookup dst=185.202.1.33 region=RU" },
    { level: "info", message: "Endpoint isolated host=WS-014 via EDR" },
    { level: "warn", message: "Suspicious PowerShell detected host=WS-014" },
    { level: "info", message: "DNS sinkhole applied domain=c2-update.net" },
    { level: "info", message: "Packet capture started interface=eth1" },
    { level: "info", message: "IOC match hash=6b1f...c9f2" },
    { level: "notice", message: "Threat intel feed updated source=MISP" },
    { level: "debug", message: "Syslog batch processed count=240" },
    { level: "warn", message: "Brute force attempt blocked ip=45.12.88.4" },
    { level: "error", message: "SIEM ingestion lag detected lag=4m" },
    { level: "crit", message: "Endpoint agent offline host=FIN-WS-22" },
    { level: "notice", message: "Sandbox detonation completed file=invoice.docm" },
    { level: "debug", message: "Correlation rule executed rule=impossible_travel" },
    { level: "error", message: "Failed login spike detected tenant=corp" },
    { level: "crit", message: "Ransomware behavior detected host=ENG-VM-12" },
    { level: "info", message: "Privileged login approved user=sec-ops" },
    { level: "warn", message: "Multiple failed logins src=172.16.5.22" },
    { level: "notice", message: "Threat feed sync completed source=OTX" },
    { level: "debug", message: "EDR heartbeat ok host=HR-LT-07" },
    { level: "error", message: "Cloud audit gap detected policy=S3-ACL" },
    { level: "info", message: "New IOC added hash=9aa3...f11c" },
    { level: "warn", message: "Anomalous DNS tunnel pattern host=DEV-12" },
    { level: "notice", message: "Case escalated queue=IR-P1" },
    { level: "debug", message: "Log parser updated source=ngfw" },
    { level: "info", message: "Endpoint scan completed host=FIN-WS-22" },
  ];

  const socAlertTemplate = {
    level: "alert",
    message: "Malicious C2 beacon detected src=10.20.30.14 dst=185.202.1.33",
    isAction: true,
  };

  const SOC_PANEL_HEIGHT_PX = 315;
  const SOC_HEADER_HEIGHT_PX = 42;
  const SOC_PANEL_PADDING_PX = 28;
  const SOC_LINE_STEP_PX = 20;
  const SOC_LINE_GAP_PX = 6;
  const SOC_BODY_HEIGHT_PX = SOC_PANEL_HEIGHT_PX - SOC_HEADER_HEIGHT_PX;
  const SOC_VISIBLE_LIMIT = Math.max(
    1,
    Math.floor(
      (SOC_BODY_HEIGHT_PX - SOC_PANEL_PADDING_PX + SOC_LINE_GAP_PX) /
        (SOC_LINE_STEP_PX + SOC_LINE_GAP_PX)
    )
  );
  const SOC_LEFTOVER_SPACE_PX =
    SOC_BODY_HEIGHT_PX -
    SOC_PANEL_PADDING_PX -
    SOC_VISIBLE_LIMIT * SOC_LINE_STEP_PX -
    (SOC_VISIBLE_LIMIT - 1) * SOC_LINE_GAP_PX;
  const SOC_DYNAMIC_GAP_PX =
    SOC_VISIBLE_LIMIT > 1 ? SOC_LINE_GAP_PX + SOC_LEFTOVER_SPACE_PX / (SOC_VISIBLE_LIMIT - 1) : SOC_LINE_GAP_PX;
  const SOC_SHIFT_DURATION_MS = 520;
  const SOC_LOG_INTERVAL_MS = 1600;
  const SOC_ALERT_EVERY = 15;

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  const buildSocLog = (template, date = new Date()) => ({
    id: socLogIdRef.current++,
    level: template.level,
    message: template.message,
    isAction: Boolean(template.isAction),
    time: formatTime(date),
  });

  const getRandomSocTemplate = () =>
    socLogTemplates[Math.floor(Math.random() * socLogTemplates.length)];

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
    return () => {
      if (socShiftTimeoutRef.current) {
        clearTimeout(socShiftTimeoutRef.current);
      }
      if (socShiftRafRef.current) {
        cancelAnimationFrame(socShiftRafRef.current);
      }
    };
  }, []);

  const showSocEmailAlert = () => {
    if (socAlertTimeout) {
      clearTimeout(socAlertTimeout);
    }
    if (socAutoTimeout) {
      clearTimeout(socAutoTimeout);
    }
    setSocAlertMode("email");
    setShowSocAlert(true);
    const timeoutId = setTimeout(() => {
      setShowSocAlert(false);
    }, 6000);
    setSocAlertTimeout(timeoutId);
  };

  useEffect(() => {
    socLogsRef.current = socLogs;
  }, [socLogs]);

  useEffect(() => {
    if (!socLogTemplates.length) return;
    const seedLogs = [];
    const now = Date.now();
    for (let i = 0; i < SOC_VISIBLE_LIMIT; i += 1) {
      const template = getRandomSocTemplate();
      seedLogs.push(
        buildSocLog(template, new Date(now - (SOC_VISIBLE_LIMIT - i) * SOC_LOG_INTERVAL_MS))
      );
    }
    socLogsRef.current = seedLogs;
    setSocLogs(seedLogs);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isSocShiftingRef.current) return;
      socLogCounterRef.current += 1;
      const shouldAlert = socLogCounterRef.current % SOC_ALERT_EVERY === 0;
      const template = shouldAlert ? socAlertTemplate : getRandomSocTemplate();
      const nextLog = buildSocLog(template);
      const nextLogs = [...socLogsRef.current, nextLog];
      const shouldShift = nextLogs.length > SOC_VISIBLE_LIMIT;
      socLogsRef.current = nextLogs;
      setSocLogs(nextLogs);
      if (shouldAlert) {
        showSocEmailAlert();
      }
      if (shouldShift) {
        isSocShiftingRef.current = true;
        setIsSocShifting(true);
        socShiftTimeoutRef.current = window.setTimeout(() => {
          setSocLogs((prev) => {
            const trimmed = prev.length > SOC_VISIBLE_LIMIT ? prev.slice(1) : prev;
            socLogsRef.current = trimmed;
            return trimmed;
          });
          setIsSocShifting(false);
          setIsSocSettling(true);
          isSocShiftingRef.current = false;
          socShiftTimeoutRef.current = 0;
          if (socShiftRafRef.current) {
            cancelAnimationFrame(socShiftRafRef.current);
          }
          socShiftRafRef.current = requestAnimationFrame(() => {
            setIsSocSettling(false);
            socShiftRafRef.current = 0;
          });
        }, SOC_SHIFT_DURATION_MS);
      }
    }, SOC_LOG_INTERVAL_MS);
    return () => {
      clearInterval(interval);
    };
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
    }, 3000);
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
              <div
                className="hero__terminal soc-terminal"
                style={{
                  "--soc-terminal-height": `${SOC_PANEL_HEIGHT_PX}px`,
                  "--soc-panel-height": `${SOC_BODY_HEIGHT_PX}px`,
                }}
              >
                <div className="hero__terminal-header">SOC Live Logs</div>
                <div
                  className="soc-log__body"
                  style={{
                    "--soc-line-step": `${SOC_LINE_STEP_PX}px`,
                    "--soc-line-gap": `${SOC_DYNAMIC_GAP_PX}px`,
                    "--soc-shift-duration": `${SOC_SHIFT_DURATION_MS}ms`,
                  }}
                >
                  <div
                    className={`soc-log__stream ${isSocShifting ? "soc-log__stream--shift" : ""} ${
                      isSocSettling ? "soc-log__stream--settle" : ""
                    }`}
                  >
                    {socLogs.map((log) =>
                      log.isAction ? (
                        <button
                          className={`soc-log__line log-alert-button ${alertPulse ? "log-alert-button--pulse" : ""}`}
                          type="button"
                          onClick={handleSocAlertClick}
                          key={log.id}
                        >
                          <span className="log-tag log-tag--alert">[ALERT]</span> {log.time} {log.message}
                        </button>
                      ) : (
                        <span className="soc-log__line" key={log.id}>
                          <span className={`log-tag log-tag--${log.level}`}>
                            [{log.level.toUpperCase()}]
                          </span>{" "}
                          {log.time} {log.message}
                        </span>
                      )
                    )}
                  </div>
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
