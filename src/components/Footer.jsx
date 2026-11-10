import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-wrapper">
      {/* Floating CTA Banner */}
      <div className="cta-banner-container">
        <div className="cta-banner">
          <div className="cta-banner-text">
            <h2>
              Ready to collaborate or hire? <br />
              <span className="highlight">Let's build something great.</span>
            </h2>
            <p>
              I am open to full-time roles, graduate software engineer opportunities, and freelance projects.
            </p>
          </div>
          <div className="cta-banner-action">
            <a href="#contact" className="btn btn-primary btn-large">
              <i className="fas fa-comments"></i> Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Body */}
      <div className="main-footer-content">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <a href="#home" className="footer-logo">
              MOEKETSI <span className="highlight">MOTLOUNG</span>
            </a>
            <p className="footer-bio">
              Software Engineering student at <strong>WeThinkCode_</strong>, Peer Tutor, and Full-Stack Developer specializing in Java, Python, TypeScript, and React.
            </p>
            <div className="footer-social-circles">
              <a
                href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-circle-btn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/moeketsi200"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-circle-btn"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://x.com/rooi_moeketsi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="social-circle-btn"
              >
                <i className="fab fa-x-twitter"></i>
              </a>
              <a
                href="https://moeketsil.co.za"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Portfolio Website"
                className="social-circle-btn"
              >
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="footer-col links-col">
            <h4>Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#cv">Curriculum Vitae</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Core Strengths */}
          <div className="footer-col links-col">
            <h4>Core Strengths</h4>
            <ul className="footer-links-list">
              <li>Full-Stack Development</li>
              <li>Java &amp; Python Backend</li>
              <li>React &amp; TypeScript UI</li>
              <li>Peer Tutoring &amp; Mentorship</li>
              <li>REST API Architecture</li>
            </ul>
          </div>

          {/* Direct Contact Details */}
          <div className="footer-col contact-col">
            <h4>Direct Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:mahxmotloung438@gmail.com">mahxmotloung438@gmail.com</a>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <a href="tel:+27810400624">+27 81 040 0624</a>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>George, Western Cape, South Africa</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Strip */}
        <div className="footer-bottom-strip">
          <p>© {currentYear} Moeketsi Isaac Rooi Motloung. All rights reserved.</p>
          <a href="#home" className="back-to-top" aria-label="Back to top">
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
