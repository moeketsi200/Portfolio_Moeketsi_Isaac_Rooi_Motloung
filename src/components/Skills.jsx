import React, { useEffect } from 'react';

const Skills = () => {
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
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const skillCards = document.querySelectorAll('.skills-section .service-card');
    skillCards.forEach((card) => observer.observe(card));

    return () => skillCards.forEach((card) => observer.unobserve(card));
  }, []);

  const skillsData = [
    { icon: 'fab fa-html5', title: 'HTML', desc: 'Proficient in semantic and accessible HTML5 markup for building structured web content.' },
    { icon: 'fab fa-css3-alt', title: 'CSS', desc: 'Experienced with responsive layouts, animations, Flexbox, and Grid for visually appealing designs.' },
    { icon: 'fab fa-js', title: 'JavaScript', desc: 'Capable of enhancing interactivity and building dynamic web pages using vanilla JavaScript.' },
    { icon: 'fas fa-lock', title: 'Cybersecurity Basics', desc: 'Familiar with fundamental security concepts, best practices, and website protection techniques.' },
    { icon: 'fas fa-code', title: 'Version Control', desc: 'Basic knowledge of Git and GitHub for collaborative code management and version tracking.' },
    { icon: 'fas fa-chalkboard-teacher', title: 'Communication', desc: 'Strong verbal and written communication developed through work and academic experience.' },
    { icon: 'fab fa-python', title: 'Python', desc: 'Proficient in Python for backend development, scripting, and data handling.' },
    { icon: 'fab fa-react', title: 'React', desc: 'Building modern, interactive, and component-based user interfaces with the React library.' },
    { icon: 'fab fa-java', title: 'Java', desc: 'Knowledge of object-oriented programming, data structures, and building robust backend applications using Java.' }
  ];

  return (
    <section id="skills" className="skills-section">
      <h1>My <span className="highlight">Skills</span></h1>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-box service-card">
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
