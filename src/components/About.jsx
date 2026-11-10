import React from 'react';
import aboutImg from '../assets/Moeketsi.jpeg';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span className="section-badge">Get To Know Me</span>
        <h2 className="section-title">
          About <span className="highlight-gradient">Me</span>
        </h2>
      </div>

      <div className="about-container">
        <div className="about-image-col">
          <div className="about-image-card">
            <img src={aboutImg} alt="Moeketsi Motloung" className="about-img" />
            <div className="experience-tag">
              <span className="tag-number">Top 5</span>
              <span className="tag-label">Learner at WeThinkCode_</span>
            </div>
          </div>
        </div>

        <div className="about-text-col">
          <h3>
            Passionate Software Engineer &amp; Peer Tutor Based in George, Western Cape
          </h3>
          <p>
            I am a Software Engineering student (NQF Level 6) at <strong>WeThinkCode_</strong> with hands-on experience developing end-to-end full-stack applications using <strong>Java, Python, TypeScript, React, HTML5, CSS3, and RESTful APIs</strong>.
          </p>
          <p>
            Ranked among the <strong>top 5 learners in a cohort of approximately 180 students</strong>, I was selected as an official <strong>Peer Tutor</strong> to mentor peers, conduct code reviews, explain software engineering concepts, and debug complex challenges.
          </p>
          <p>
            My unique perspective is enhanced by prior studies in Tourism Management at <strong>Nelson Mandela University</strong>, alongside experience as an <strong>Assistant Lecturer</strong> and customer-facing experience at <strong>Sportscene (TFG)</strong>. These experiences instilled high emotional intelligence, clear communication, and empathetic problem-solving skills that make my software human-centric and resilient.
          </p>

          <div className="about-stats-grid">
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-trophy"></i></div>
              <div className="stat-number">Top 5</div>
              <div className="stat-desc">Ranked in Cohort of ~180</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-user-graduate"></i></div>
              <div className="stat-number">Peer Tutor</div>
              <div className="stat-desc">WeThinkCode_ Mentor</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><i className="fas fa-code-branch"></i></div>
              <div className="stat-number">Full-Stack</div>
              <div className="stat-desc">Java, Python &amp; React</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
