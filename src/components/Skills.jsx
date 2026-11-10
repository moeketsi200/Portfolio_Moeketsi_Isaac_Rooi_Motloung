import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      icon: 'fas fa-terminal',
      skills: [
        { name: 'Java', level: 'Backend & OOP', icon: 'fab fa-java' },
        { name: 'Python', level: 'Backend & Scripting', icon: 'fab fa-python' },
        { name: 'TypeScript', level: 'Type-Safe Applications', icon: 'fas fa-file-code' },
        { name: 'JavaScript (ES6+)', level: 'Interactive Web', icon: 'fab fa-js' },
        { name: 'HTML5 & CSS3', level: 'Responsive Layouts', icon: 'fab fa-html5' },
      ],
    },
    {
      category: 'Frameworks & Libraries',
      icon: 'fas fa-layer-group',
      skills: [
        { name: 'React', level: 'Component Architecture', icon: 'fab fa-react' },
        { name: 'Next.js', level: 'Full-Stack React Apps', icon: 'fas fa-bolt' },
        { name: 'Tailwind CSS', level: 'Modern Utility Styling', icon: 'fas fa-wind' },
      ],
    },
    {
      category: 'Tools & DevOps',
      icon: 'fas fa-tools',
      skills: [
        { name: 'Git & GitHub', level: 'Version Control & PRs', icon: 'fab fa-github' },
        { name: 'REST APIs', level: 'API Design & Integration', icon: 'fas fa-network-wired' },
        { name: 'VS Code', level: 'Development Environment', icon: 'fas fa-laptop-code' },
      ],
    },
    {
      category: 'Concepts & Security',
      icon: 'fas fa-shield-alt',
      skills: [
        { name: 'Cisco Cybersecurity', level: 'Security Fundamentals', icon: 'fas fa-user-shield' },
        { name: 'OOP & Architecture', level: 'Clean Code Principles', icon: 'fas fa-cubes' },
        { name: 'Data Structures & Algorithms', level: 'Problem Solving', icon: 'fas fa-project-diagram' },
        { name: 'Agile & Code Reviews', level: 'Peer Tutoring & Collab', icon: 'fas fa-users' },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="section-header">
        <span className="section-badge">Technical Expertise</span>
        <h2 className="section-title">
          My <span className="highlight-gradient">Skills</span>
        </h2>
        <p className="section-subtitle">
          Technologies and core engineering concepts I use to architect robust, maintainable solutions.
        </p>
      </div>

      <div className="skills-categories-grid">
        {skillCategories.map((cat, idx) => (
          <div key={idx} className="skill-category-card service-card">
            <div className="category-header">
              <div className="category-icon-wrapper">
                <i className={cat.icon}></i>
              </div>
              <h3>{cat.category}</h3>
            </div>
            <div className="skills-list">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <div className="skill-item-icon">
                    <i className={skill.icon}></i>
                  </div>
                  <div className="skill-item-info">
                    <h4>{skill.name}</h4>
                    <span className="skill-level">{skill.level}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
