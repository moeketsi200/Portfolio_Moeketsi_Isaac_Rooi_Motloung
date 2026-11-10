import React from 'react';

const CV = () => {
  return (
    <section id="cv" className="cv-section">
      <div className="section-header">
        <span className="section-badge">Career &amp; Qualifications</span>
        <h2 className="section-title">
          Curriculum <span className="highlight-gradient">Vitae</span>
        </h2>
        <p className="section-subtitle">
          An overview of my academic background, mentoring experience, and certified qualifications.
        </p>
      </div>

      <div className="cv-container">
        <div className="cv-card service-card">
          <div className="cv-card-header">
            <i className="fas fa-user-tie cv-icon"></i>
            <h3>Professional Summary</h3>
          </div>
          <p>
            Driven Full-Stack Developer and Software Engineering student at WeThinkCode_ with a strong foundation in
            modern web technologies, backend architecture, and academic mentorship. I build intuitive, scalable
            applications with Python, Java, TypeScript, React, and cloud infrastructure, and bring collaborative
            problem-solving experience from peer tutoring and academic facilitation. Open to relocation.
          </p>
        </div>

        {/* Personal Details & Contact Card */}
        <div className="cv-card cv-personal-card service-card">
          <div className="cv-card-header">
            <i className="fas fa-id-badge cv-icon"></i>
            <h3>Personal Information</h3>
          </div>
          <div className="cv-info-grid">
            <div className="cv-info-item">
              <span className="info-label">Full Name:</span>
              <span className="info-value">Moeketsi Isaac Rooi Motloung</span>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">George, Western Cape, South Africa</span>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Phone:</span>
              <a href="tel:+27810400624" className="info-value link-accent">+27 81 040 0624</a>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Email:</span>
              <a href="mailto:mahxmotloung438@gmail.com" className="info-value link-accent">mahxmotloung438@gmail.com</a>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Languages:</span>
              <span className="info-value">English (Fluent), Sesotho (Native)</span>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Portfolio:</span>
              <a href="https://portfolio-moeketsi-isaac-rooi-motlo.vercel.app/" target="_blank" rel="noopener noreferrer" className="info-value link-accent">moeketsil.co.za</a>
            </div>
          </div>
        </div>

        <div className="cv-card service-card">
          <div className="cv-card-header">
            <i className="fas fa-code cv-icon"></i>
            <h3>Technical Skills</h3>
          </div>
          <div className="cv-info-grid">
            <div className="cv-info-item">
              <span className="info-label">Languages:</span>
              <span className="info-value">JavaScript, TypeScript, Java, Python, Solidity, HTML5, CSS3</span>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Frameworks:</span>
              <span className="info-value">React, Node.js, Express, TanStack Start, Tailwind CSS</span>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Cloud &amp; Tools:</span>
              <span className="info-value">AWS (ECR, ECS Fargate, SQS, SNS), Vercel, Supabase, Foundry, Docker, Git</span>
            </div>
            <div className="cv-info-item">
              <span className="info-label">Environments:</span>
              <span className="info-value">Linux, macOS, Vim, Neovim, VS Code, IntelliJ, Android Studio</span>
            </div>
          </div>
        </div>

        <div className="cv-card service-card">
          <div className="cv-card-header">
            <i className="fas fa-project-diagram cv-icon"></i>
            <h3>Technical Projects</h3>
          </div>
          <ul className="cv-achievements-list">
            <li>
              <i className="fas fa-cubes"></i>
              <div>
                <strong>OmniTriage Command Center</strong>
                <p>Architected a non-custodial inheritance project and placed 6th globally in the Dev3pack Web3 AI Hackathon.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-store"></i>
              <div>
                <strong>The Gatsbyhouse</strong>
                <p>Built a full-stack web and mobile ordering application with a kitchen dashboard using TanStack Start, React, Tailwind CSS, Supabase, and Vercel.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-cloud"></i>
              <div>
                <strong>Blood-Broker</strong>
                <p>Deployed a Java container to AWS ECS Fargate with automated SQS polling and SNS emergency alerts.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-server"></i>
              <div>
                <strong>Robot World</strong>
                <p>Refactored a concurrent Java server to reduce cyclomatic complexity and improve code health.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-link"></i>
              <div>
                <strong>AthleticRegistry</strong>
                <p>Designed and tested a Solidity smart contract for athlete profiles and meet results using Foundry.</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Professional Experience */}
        <div className="cv-card service-card">
          <div className="cv-card-header">
            <i className="fas fa-briefcase cv-icon"></i>
            <h3>Professional Experience</h3>
          </div>
          <div className="cv-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Peer Tutor</h4>
                  <span className="timeline-date">Oct 2025 – Present</span>
                </div>
                <h5 className="timeline-company">WeThinkCode_</h5>
                <p>
                  Mentor learners in software programming, conduct detailed code reviews, explain complex algorithmic concepts, and assist junior developers with debugging.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Assistant Lecturer</h4>
                  <span className="timeline-date">Feb 2024 – Nov 2025</span>
                </div>
                <h5 className="timeline-company">Nelson Mandela University</h5>
                <p>
                  Supported university tutorials, facilitated active study sessions, assisted faculty with marking, and provided dedicated academic mentorship to students.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Sales Associate</h4>
                  <span className="timeline-date">Nov 2023 – Oct 2025</span>
                </div>
                <h5 className="timeline-company">Sportscene (TFG), George</h5>
                <p>
                  Delivered high-tier customer service, resolved customer queries efficiently, managed inventory, and worked effectively in a high-tempo retail environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Academic Qualifications */}
        <div className="cv-card service-card">
          <div className="cv-card-header">
            <i className="fas fa-graduation-cap cv-icon"></i>
            <h3>Education</h3>
          </div>
          <div className="cv-timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Software Engineering (Occupational Certificate, NQF Level 6)</h4>
                  <span className="timeline-date">Expected 2026</span>
                </div>
                <h5 className="timeline-company">WeThinkCode_</h5>
                <p>
                  Full-time rigorous software engineering curriculum focusing on object-oriented programming, data structures, algorithms, test-driven development, and collaborative team sprints.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Tourism Management (NQF Level 6)</h4>
                  <span className="timeline-date">Graduated</span>
                </div>
                <h5 className="timeline-company">Nelson Mandela University</h5>
                <p>
                  Developed strong operational management, public relations, communication, and human relations capabilities.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Full-Stack Development</h4>
                  <span className="timeline-date">Completed</span>
                </div>
                <h5 className="timeline-company">FNB App Academy</h5>
                <p>
                  Specialized training in modern front-end and back-end web application architectures.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements & Certifications */}
        <div className="cv-card service-card">
          <div className="cv-card-header">
            <i className="fas fa-certificate cv-icon"></i>
            <h3>Achievements &amp; Certifications</h3>
          </div>
          <ul className="cv-achievements-list">
            <li>
              <i className="fas fa-medal"></i>
              <div>
                <strong>Top 5 Performer</strong>
                <p>Ranked in the top 5 learners out of approximately 180 peers at WeThinkCode_.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-chalkboard-teacher"></i>
              <div>
                <strong>Selected as Peer Tutor</strong>
                <p>Hand-picked by faculty based on exceptional academic marks and collaborative teamwork.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-shield-virus"></i>
              <div>
                <strong>Cisco Cybersecurity Certification</strong>
                <p>Network security fundamentals, risk assessment, and application vulnerability protection.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-laptop-code"></i>
              <div>
                <strong>FNB App Academy Full-Stack Development</strong>
                <p>Comprehensive program spanning modern responsive frontend and scalable backend architecture.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-check-circle"></i>
              <div>
                <strong>Zaio HTML, CSS &amp; Cloud Deployment Certificates</strong>
                <p>Modern responsive design, accessibility standards, and production cloud hosting.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-certificate"></i>
              <div>
                <strong>WeThinkCode_ GenAI Course for Software Engineers</strong>
                <p>Applied generative AI concepts in software engineering workflows.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-handshake"></i>
              <div>
                <strong>HexSoftwares Software Engineering Internship Offer</strong>
                <p>Internship offer received in April 2026.</p>
              </div>
            </li>
            <li>
              <i className="fas fa-trophy"></i>
              <div>
                <strong>Most Improved Player</strong>
                <p>Recognized in November 2024 for growth, teamwork, and resilience.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Prominent Download CV Action */}
      <div className="cv-action-wrapper">
        <a
          href="/Moeketsi-Motloung-CV.pdf"
          className="btn btn-primary btn-large"
          download="Moeketsi-Motloung-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-file-pdf"></i> Download Official CV (PDF)
        </a>
      </div>
    </section>
  );
};

export default CV;
