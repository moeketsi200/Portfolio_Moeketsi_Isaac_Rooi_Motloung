import React from 'react';

const SkillsTicker = () => {
  const items = [
    'JAVA',
    'PYTHON',
    'TYPESCRIPT',
    'JAVASCRIPT',
    'REACT',
    'NEXT.JS',
    'TAILWIND CSS',
    'REST APIS',
    'GIT & GITHUB',
    'DATA STRUCTURES',
    'ALGORITHMS',
    'CISCO CYBERSECURITY',
    'OOP',
    'HTML5 & CSS3',
  ];

  return (
    <div className="skills-ticker-container" aria-hidden="true">
      <div className="ticker-track">
        {/* Render twice for seamless continuous scroll */}
        {[...items, ...items].map((tech, index) => (
          <span key={index} className="ticker-item">
            <span className="ticker-dot">✦</span>
            <span className="ticker-text">{tech}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsTicker;
