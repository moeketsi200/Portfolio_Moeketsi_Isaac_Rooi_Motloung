import React, { useEffect } from 'react';

const Projects = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.projects-section .project-card');
    projectCards.forEach((card) => observer.observe(card));

    return () => projectCards.forEach((card) => observer.unobserve(card));
  }, []);

  const projectsData = [
    {
      img: '/assets/images/clock.jpg',
      title: 'Personal Clock Project',
      desc: 'A responsive and interactive digital clock project built with HTML, CSS, and JavaScript, showcasing real-time updates and a clean design.',
      link: 'https://moeketsi200.github.io/Rooi_-clock/'
    },
    {
      img: '/assets/images/Iphone.jpg',
      title: 'IPhone Calculator Clone',
      desc: 'A sleek and fully functional replica of the Apple iPhone calculator, built using HTML, CSS, and JavaScript. Designed to mimic the real UI with smooth interactions and accurate calculations.',
      link: 'https://moeketsi200.github.io/IPhone_Calculator_Clone/'
    },
    {
      img: '/assets/images/zoo.jpg',
      title: 'Zoo App FNB',
      desc: 'A clean and interactive zoo-themed application showcasing animals, categories, and user-friendly navigation. Built with HTML, CSS, and JavaScript for a smooth and responsive experience.',
      link: 'https://moeketsi200.github.io/Zoo-App_FNB/'
    },
    {
      img: '/assets/images/Tesla.jpg',
      title: 'Tesla-Themed Website',
      desc: 'A Tesla concept website with a hero section, contact form, services, and custom footer.',
      link: 'https://6917137f1f6dd9319bebcbbd--soft-khapse-ac9e7e.netlify.app/'
    }
    
  ];

  return (
    <section id="projects" className="projects-section">
      <h1>My <span className="highlight">Projects</span></h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card service-card">
            <img src={project.img} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.link} className="btn-outline" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
