import React, { useState, useEffect } from 'react';

const Header = ({ activeSection = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#skills', label: 'Skills', id: 'skills' },
    { href: '#projects', label: 'Projects', id: 'projects' },
    { href: '#cv', label: 'CV', id: 'cv' },
    { href: '#contact', label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={scrolled ? 'header-scrolled' : ''}>
      <nav className="navbar-container">
        <a href="#home" className="logo" onClick={handleLinkClick}>
          MOEKETSI <span className="highlight">MOTLOUNG</span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="nav-desktop">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={link.href}
                className={activeSection === link.id ? 'active' : ''}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button */}
        <div className="nav-action">
          <a href="/Moeketsi-Motloung-CV.pdf" download className="btn-nav" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-file-download"></i> <span>Resume</span>
          </a>
        </div>

        {/* Hamburger Toggle Button */}
        <button
          className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-backdrop" onClick={() => setMobileMenuOpen(false)}></div>
        <div className="mobile-drawer-content">
          <div className="mobile-drawer-header">
            <span className="logo">
              MOEKETSI <span className="highlight">MOTLOUNG</span>
            </span>
            <button
              className="drawer-close-btn"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <ul className="nav-mobile-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={activeSection === link.id ? 'active' : ''}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <a
              href="/Moeketsi-Motloung-CV.pdf"
              download
              className="btn btn-full"
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-download"></i> Download CV
            </a>
            <div className="mobile-socials">
              <a href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/moeketsi200" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://x.com/rooi_moeketsi" target="_blank" rel="noopener noreferrer" aria-label="X / Twitter">
                <i className="fab fa-x-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
