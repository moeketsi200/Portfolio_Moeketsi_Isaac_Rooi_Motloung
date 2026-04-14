const Footer = () => {
  return (
    <section className="footer-section">
      <div className="cta-banner">
        <div className="cta-left">
          <h2>Have a project<br/>in mind?</h2>
        </div>
        <div className="cta-right">
          <p>I'm available for freelance work. Let's connect and build something amazing together.</p>
          <a href="#contact" className="btn-primary">Let's Talk</a>
        </div>
      </div>

      <footer className="main-footer">
        <div className="footer-container">
          <div className="footer-col brand-col">
            <div className="logo">
              MOEKETSI <span className="highlight">MOTLOUNG</span>
            </div>
            <p className="brand-desc">Aspiring Web Designer and Developer passionate about creating meaningful and user-focused digital experiences.</p>
          <div className="social-icons" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
              <a href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231" target="_blank" rel="noopener noreferrer" className="social-circle">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/moeketsi200" target="_blank" rel="noopener noreferrer" className="social-circle">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="social-circle">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-circle">
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="footer-col links-col">
            <h4>Useful Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#cv">CV</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col links-col">
            <h4>My Services</h4>
            <ul>
              <li>Web Design</li>
              <li>Frontend Development</li>
              <li>Responsive Layouts</li>
              <li>Website Maintenance</li>
              <li>Portfolio Development</li>
            </ul>
          </div>

          <div className="footer-col contact-col">
            <h4>Contact Info</h4>
            <ul className="contact-info">
              <li><i className="fas fa-envelope"></i> mahxmotloung438@gmail.com</li>
              <li><i className="fas fa-phone"></i> +27 83 765 0991</li>
              <li><i className="fas fa-map-marker-alt"></i> George, Western Cape,<br/>South Africa</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="copyright-pill">
            © 2025 Moeketsi Motloung. Designed by Moeketsi Rooi.
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
