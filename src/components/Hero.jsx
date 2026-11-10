import React, { useState, useEffect } from 'react';
import heroImg from '../assets/Rooi.jpeg';

const Hero = () => {
  const words = [
    'Software Engineer',
    'Full-Stack Developer',
    'WeThinkCode_ Peer Tutor',
    'Clean Code Enthusiast'
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOpacity(0);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeOpacity(1);
      }, 400);
    }, 2800);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span> Available for New Opportunities
          </div>
          <h1 className="hero-title">
            Hello, It's <br />
            <span className="highlight-gradient">Moeketsi Motloung</span>
          </h1>
          <p className="hero-subtitle">
            I am a{' '}
            <span className="highlight slideshow-text" style={{ opacity: fadeOpacity }}>
              {words[currentWordIndex]}
            </span>
          </p>
          <p className="hero-description">
            Software Engineering student (NQF Level 6) at WeThinkCode_, ranked in the Top 5 learners and selected as a Peer Tutor. I build modern, scalable web applications with Java, Python, TypeScript, React, and REST APIs.
          </p>

          <div className="hero-buttons">
            <a
              href="/Moeketsi-Motloung-CV.pdf"
              className="btn btn-primary"
              download="Moeketsi-Motloung-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file-download"></i> Download CV
            </a>
            <a href="#contact" className="btn btn-outline">
              <i className="fas fa-paper-plane"></i> Hire Me
            </a>
          </div>

          <div className="hero-socials">
            <span className="socials-label">Connect:</span>
            <a
              href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="social-icon"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/moeketsi200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="social-icon"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://x.com/rooi_moeketsi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="social-icon"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://moeketsil.co.za"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio Website"
              className="social-icon"
            >
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="image-glow-ring"></div>
          <div className="hero-image-frame">
            <img src={heroImg} alt="Moeketsi Isaac Rooi Motloung" className="hero-image" />
          </div>
          <div className="hero-floating-card top-learner-card">
            <i className="fas fa-award"></i>
            <div>
              <strong>Top 5 Learner</strong>
              <span>WeThinkCode_</span>
            </div>
          </div>
          <div className="hero-floating-card peer-tutor-card">
            <i className="fas fa-code"></i>
            <div>
              <strong>Peer Tutor</strong>
              <span>Full-Stack &amp; OOP</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
