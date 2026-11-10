import React from 'react';
import eduIncImg from '../assets/edu-inc.png';
import ithembalethuImg from '../assets/ithembalethu-fm.png';
import mathMasteryImg from '../assets/math-arena.png';
import clockImg from '../assets/clock.jpg';
import iphoneImg from '../assets/Iphone.jpg';
import zooImg from '../assets/zoo.jpg';
import teslaImg from '../assets/Tesla.jpg';
import grillImg from '../assets/grill.png';

const projects = [
  {
    title: 'Edu-Inc Website Builder',
    subtitle: 'Educational Platform Builder',
    image: eduIncImg,
    desc: 'A modern, intuitive website builder tailored for educational institutions. Provides interactive component authoring and a seamless user experience.',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://edu-inc-website-builder.vercel.app',
    githubUrl: 'https://github.com/moeketsi200',
  },
  {
    title: 'Ithembalethu FM Radio Hub',
    subtitle: 'Live Streaming & Community Hub',
    image: ithembalethuImg,
    desc: 'High-performance interactive web platform for Ithembalethu FM, featuring live audio broadcast streaming, show scheduling, and community news.',
    tags: ['Next.js', 'React', 'Audio Streaming', 'Responsive'],
    liveUrl: 'https://ithembalethufm.co.za',
    githubUrl: 'https://github.com/moeketsi200',
  },
  {
    title: 'Math Mastery Arena',
    subtitle: 'Gamified Educational Web App',
    image: mathMasteryImg,
    desc: 'An engaging quiz and arithmetic challenge web application with immediate feedback, progress tracking, and interactive gamified logic.',
    tags: ['React', 'State Management', 'Gamification', 'Vercel'],
    liveUrl: 'https://math-mastery-arena.vercel.app',
    githubUrl: 'https://github.com/moeketsi200',
  },
  {
    title: 'Interactive Real-Time Clock',
    subtitle: 'Dynamic Timekeeper Application',
    image: clockImg,
    desc: 'A responsive digital chronometer application showcasing real-time UI synchronization, clean animations, and pure DOM manipulation.',
    tags: ['JavaScript ES6+', 'CSS3', 'GitHub Pages'],
    liveUrl: 'https://moeketsi200.github.io/Rooi_-clock/',
    githubUrl: 'https://github.com/moeketsi200/Rooi_-clock',
  },
  {
    title: 'IPhone Calculator Clone',
    subtitle: 'Calculator Web App',
    image: iphoneImg,
    desc: 'A sleek replica of the Apple iPhone calculator, built with HTML, CSS, and JavaScript, with smooth interactions and accurate calculations.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://moeketsi200.github.io/IPhone_Calculator_Clone/',
  },
  {
    title: 'Zoo App FNB',
    subtitle: 'Interactive Educational App',
    image: zooImg,
    desc: 'A clean zoo-themed application showcasing animals, categories, and user-friendly navigation with a responsive interface.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveUrl: 'https://moeketsi200.github.io/Zoo-App_FNB/',
  },
  {
    title: 'Tesla-Themed Website',
    subtitle: 'Automotive Concept Website',
    image: teslaImg,
    desc: 'A Tesla concept website with a hero section, contact form, services, and custom footer.',
    tags: ['HTML', 'CSS', 'Responsive Design'],
    liveUrl: 'https://6917137f1f6dd9319bebcbbd--soft-khapse-ac9e7e.netlify.app/',
  },
  {
    title: '24th Cafe & Grill Hub',
    subtitle: 'Restaurant Website',
    image: grillImg,
    desc: 'A vibrant restaurant website featuring a digital menu, engaging visuals, and a seamless user experience.',
    tags: ['React', 'Responsive Design', 'Vercel'],
    liveUrl: 'https://24th-cafe-grill-hub.vercel.app/',
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="section-header">
      <span className="section-badge">Featured Work</span>
      <h2 className="section-title">
        Key <span className="highlight-gradient">Projects</span>
      </h2>
      <p className="section-subtitle">
        Real-world applications built with clean code, modern UX principles, and robust architecture.
      </p>
    </div>

    <div className="projects-grid">
      {projects.map((project) => (
        <article key={project.title} className="project-card service-card">
          <div className="project-image-wrapper">
            <img src={project.image} alt={project.title} className="project-img" />
            <div className="project-overlay">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="overlay-btn"
                aria-label={`View live demo of ${project.title}`}
              >
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>

          <div className="project-content">
            <span className="project-subtitle">{project.subtitle}</span>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="tech-tag">{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.liveUrl}
                className="btn btn-sm btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-eye"></i> Live Site
              </a>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="btn btn-sm btn-outline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Code
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Projects;
