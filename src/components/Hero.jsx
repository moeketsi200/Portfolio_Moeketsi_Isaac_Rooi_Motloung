import React, { useState, useEffect } from 'react';
import heroImage from '../assets/Rooi.jpeg';

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);
  const words = ['Aspiring Web Designer', 'Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextOpacity(0);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setTextOpacity(1);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="text">
        <h1>Hello, It's <span>Moeketsi Motloung</span></h1>
        <p>I'm a <span className="highlight slideshow-text" style={{ opacity: textOpacity, transition: 'opacity 0.5s ease' }}>
          {words[wordIndex]}
        </span></p>
        <div className="buttons">
          <a href="/Moeketsi-Motloung-CV.pdf" className="btn" download target="_blank" rel="noopener noreferrer">Download CV</a>
          <a href="#contact" className="btn-outline">Hire Me</a>
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/moeketsi200" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
          <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
        </div>
      </div>
      <div className="image">
        <img src={heroImage} alt="Moeketsi Motloung" />
      </div>
    </section>
  );
};

export default Hero;
