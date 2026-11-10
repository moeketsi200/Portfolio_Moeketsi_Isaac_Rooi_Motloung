import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import SkillsTicker from './components/SkillsTicker';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CV from './components/CV';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const cards = document.querySelectorAll('.service-card, .cv-card, .stat-card');
    cards.forEach((card) => revealObserver.observe(card));

    // Nav active section observer
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-30% 0px -60% 0px',
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => navObserver.observe(section));

    return () => {
      cards.forEach((card) => revealObserver.unobserve(card));
      sections.forEach((section) => navObserver.unobserve(section));
    };
  }, []);

  return (
    <div className="app-layout">
      {/* 3D Interactive Space/Canvas Background (Untouched as requested) */}
      <BackgroundCanvas />

      {/* Floating Glassmorphism Navbar with Mobile Drawer */}
      <Header activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <SkillsTicker />
        <About />
        <Skills />
        <Projects />
        <CV />
        <Contact />
      </main>

      {/* Overlapping Footer with CTA */}
      <Footer />
    </div>
  );
}

export default App;
