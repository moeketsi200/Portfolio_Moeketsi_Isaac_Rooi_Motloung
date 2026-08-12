import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import BackgroundCanvas from './components/BackgroundCanvas';
import heroImg from './assets/Rooi.jpeg';
import aboutImg from './assets/Moeketsi.jpeg';
import clockImg from './assets/clock.jpg';
import ithembalethuImg from './assets/ithembalethu-fm.png';
import eduIncImg from './assets/edu-inc.png';
import mathMasteryImg from './assets/math-arena.png';
import Grill from './assets/grill.png';

function App() {
  // Slideshow Text Logic
  const words = ['Software Engineer', 'Full-Stack Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Contact form state
  const formRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle'); // idle | loading | success | error

  const handleFormChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');

    emailjs
      .sendForm(
        'service_tma0ubh',
        'template_a5xn5vk',
        formRef.current,
        'AxYlZ8tP4F6hJ-a1P'
      )
      .then(() => {
        setFormStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      })
      .catch(() => {
        setFormStatus('error');
        setTimeout(() => setFormStatus('idle'), 5000);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeOpacity(0); // Fade out
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeOpacity(1); // Fade in
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Scroll Reveal & Active Nav Spy Hook
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset;
      const triggerBottom = window.innerHeight * 0.85;

      // Scroll reveal logic
      const cards = document.querySelectorAll('.service-card, .cv-block');
      cards.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) card.classList.add('visible');
        else card.classList.remove('visible');
      });

      // Active nav link logic
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((current) => {
        const sectionTop = current.offsetTop - 150; 
        if (scrollY >= sectionTop) {
          setActiveSection(current.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on scroll
  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener('scroll', closeMenu, { passive: true });
    return () => window.removeEventListener('scroll', closeMenu);
  }, []);

  return (
    <>
      {/* 1. Your Custom 3D Background */}
      <BackgroundCanvas />

      {/* 2. The Floating Glassmorphism Navbar */}
      <header>
        <nav className={menuOpen ? 'nav-open' : ''}>
          <div className="logo">
            MOEKETSI ISAAC <span className="highlight">ROOI MOTLOUNG</span>
          </div>

          {/* Hamburger Button — mobile only */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={menuOpen ? 'nav-links--open' : ''}>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#cv" className={activeSection === 'cv' ? 'active' : ''} onClick={() => setMenuOpen(false)}>CV</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* 3. Main Content Wrapper */}
      <main>
        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="text">
            <p>Welcome to my portfolio</p>
            <h1>Hello, It's <span>Moeketsi Motloung</span></h1>
            <p>
              I'm a{' '}
              <span className="highlight slideshow-text" style={{ opacity: fadeOpacity }}>
                {words[currentWordIndex]}
              </span>
            </p>
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
            <img src={heroImg} alt="Moeketsi Motloung" />
          </div>
        </section>

        {/* Skills Ticker */}
        <div className="skills-ticker">
          <div className="ticker-content">
            <span>HTML5</span><span>•</span>
            <span>CSS3</span><span>•</span>
            <span>JAVASCRIPT</span><span>•</span>
            <span>TYPESCRIPT</span><span>•</span>
            <span>PYTHON</span><span>•</span>
            <span>NODE.JS</span><span>•</span>
            <span>TAILWIND CSS</span><span>•</span>
            <span>WEB3</span><span>•</span>
            <span>SOLIDITY</span><span>•</span>
            <span>CYBERSECURITY</span><span>•</span>
            <span>JAVA</span><span>•</span>

            {/* Duplicated for seamless infinite scrolling */}
            <span>HTML5</span><span>•</span>
            <span>CSS3</span><span>•</span>
            <span>JAVASCRIPT</span><span>•</span>
            <span>TYPESCRIPT</span><span>•</span>
            <span>PYTHON</span><span>•</span>
            <span>NODE.JS</span><span>•</span>
            <span>TAILWIND CSS</span><span>•</span>
            <span>WEB3</span><span>•</span>
            <span>SOLIDITY</span><span>•</span>
            <span>CYBERSECURITY</span><span>•</span>
            <span>JAVA</span><span>•</span>

          </div>
        </div>

        {/* About Section */}
        <section id="about" className="about-section">
          <h1>About <span className="highlight">Me</span></h1>
          <div className="about-content">
            <div className="about-image">
              <img src={aboutImg} alt="Moeketsi Motloung" />
            </div>
            <div className="about-text">
              <p>
                My name is Moeketsi Isaac Rooi Motloung, a Full-Stack Developer and Software Engineering student at WeThinkCode_, based in George, Western Cape. I am passionate about engineering modern, responsive, and user-centric digital experiences that solve real-world problems.
              </p>
              <p>
                I specialize in a versatile tech stack that includes React, TypeScript, Tailwind CSS, Python, and Django. Whether I am building a high-performance community radio platform or exploring Web3 and smart contracts, I focus on clean code, seamless UI/UX design, and robust backend architecture. As a Peer Tutor, I also thrive on sharing knowledge and collaborating with fellow developers to overcome complex technical challenges.
              </p>
              <p>
                My journey into tech is strengthened by my diverse background. My previous studies in Tourism Management at Nelson Mandela University, alongside hands-on experience in academic support and dynamic retail environments, have equipped me with exceptional communication, empathy, and problem-solving skills. I build with the user in mind, merging technical innovation with an understanding of human connection.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="skills-section">
          <h1>My <span className="highlight">Skills</span></h1>
          <div className="skills-grid">
            <div className="skill-box service-card">
              <i className="fab fa-html5"></i>
              <h3>HTML5</h3>
              <p>Building the foundation of the web with semantic and accessible markup.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fab fa-css3-alt"></i>
              <h3>CSS3</h3>
              <p>Creating visually appealing and responsive layouts with modern styling techniques.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fab fa-js"></i>
              <h3>JavaScript</h3>
              <p>Powering dynamic and interactive user experiences on the web.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fab fa-python"></i>
              <h3>Python</h3>
              <p>Utilizing Python for backend development, scripting, and building robust applications.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fab fa-node-js"></i>
              <h3>Node.js</h3>
              <p>Developing scalable and high-performance server-side applications with JavaScript.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fas fa-file-code"></i>
              <h3>TypeScript</h3>
              <p>Enhancing JavaScript with static types for more robust and maintainable codebases.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fas fa-wind"></i>
              <h3>Tailwind CSS</h3>
              <p>Rapidly building custom, modern designs with a utility-first CSS framework.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fab fa-ethereum"></i>
              <h3>Web3</h3>
              <p>Exploring the future of the internet with decentralized applications and technologies.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fas fa-file-contract"></i>
              <h3>Solidity</h3>
              <p>Writing smart contracts for the Ethereum blockchain to create decentralized solutions.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fas fa-shield-alt"></i>
              <h3>Cybersecurity</h3>
              <p>Applying fundamental security principles to protect applications and user data.</p>
            </div>
            <div className="skill-box service-card">
              <i className="fab fa-java"></i>
              <h3>Java</h3>
              <p>Building robust, object-oriented applications and scalable backend systems with Java.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="projects-section">
          <h1>My <span className="highlight">Projects</span></h1>
          <div className="projects-grid">
            <div className="project-card">
              <img src={eduIncImg} alt="Edu-Inc Website Builder" />
              <h3>Edu-Inc Website Builder</h3>
              <p>A modern and intuitive website builder platform tailored for educational institutions. Built with modern web technologies for a seamless experience.</p>
              <a href="https://edu-inc-website-builder.vercel.app" className="btn-outline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
              <img src={ithembalethuImg} alt="Ithembalethu FM Radio Hub" />
              <h3>Ithembalethu FM Radio Hub</h3>
              <p>A modern and interactive website for Ithembalethu FM, featuring live streaming, show schedules, and a clean user interface. Built with Next.js.</p>
              <a href="https://ithembalethufm.co.za" className="btn-outline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
              <img src={mathMasteryImg} alt="Math Mastery Arena" />
              <h3>Math Mastery Arena</h3>
              <p>An engaging quiz game to test and improve your math skills, featuring a clean interface and immediate feedback. Built with modern web technologies.</p>
              <a href="https://math-mastery-arena.vercel.app" className="btn-outline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
            <div className="project-card">
              <img src={clockImg} alt="Clock_Project" />
              <h3>Personal Clock_Project</h3>
              <p>A responsive and interactive digital clock project built with HTML, CSS, and JavaScript, showcasing real-time updates and a clean design.</p>
              <a href="https://moeketsi200.github.io/Rooi_-clock/" className="btn-outline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
              <div className="project-card">
              <img src={Grill} alt="24th Cafe" />
            <h3>24th Cafe</h3>
            <p>A vibrant and responsive restaurant website for 24th Cafe &amp; Grill Hub, featuring a digital menu, engaging visuals, and a seamless user experience. Built with modern web technologies.</p>
              <a href="https://24th-cafe-grill-hub.vercel.app/" className="btn-outline" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="cv-section">
          <h1 style={{ textAlign: 'center' }}>My <span className="highlight">Curriculum Vitae</span></h1>
          <div className="cv-content-new">

            {/* Professional Summary */}
            <div className="cv-card-new service-card">
              <div className="cv-card-header">
                <i className="fas fa-user-tie"></i>
                <h3>Professional Summary</h3>
              </div>
              <p className="cv-summary-text">
                Driven Full-Stack Developer and Software Engineering student at WeThinkCode_ with a strong foundation in
                modern web technologies, backend architecture, and academic mentorship. Proficient in building intuitive,
                scalable applications utilizing Python, Java, TypeScript, React, and cloud infrastructure. Equipped with
                exceptional collaborative problem-solving skills developed through roles in technical peer tutoring and
                academic facilitation. Highly adaptable and eager to bring a blend of robust technical expertise, AI
                integration, and user-focused design to an innovative engineering team. Willing to relocate.
              </p>
            </div>

            {/* Technical Skills */}
            <div className="cv-card-new service-card">
              <div className="cv-card-header">
                <i className="fas fa-code"></i>
                <h3>Technical Skills</h3>
              </div>
              <div className="cv-skills-grid">
                <div className="cv-skill-category">
                  <span className="cv-skill-label"><i className="fas fa-terminal"></i> Languages</span>
                  <p>JavaScript, TypeScript, Java, Python, Solidity, HTML5, CSS3</p>
                </div>
                <div className="cv-skill-category">
                  <span className="cv-skill-label"><i className="fas fa-layer-group"></i> Frameworks &amp; Libraries</span>
                  <p>React, Node.js, Express, TanStack Start, Tailwind CSS</p>
                </div>
                <div className="cv-skill-category">
                  <span className="cv-skill-label"><i className="fas fa-cloud"></i> Tools &amp; Cloud</span>
                  <p>AWS (ECR, ECS Fargate, SQS, SNS), Vercel, Supabase, Foundry, Docker, Git</p>
                </div>
                <div className="cv-skill-category">
                  <span className="cv-skill-label"><i className="fas fa-desktop"></i> Environments &amp; OS</span>
                  <p>Linux (Pop!_OS, Linux Lite), macOS, Vim, Neovim, VS Code, IntelliJ, Android Studio</p>
                </div>
              </div>
            </div>

            {/* Technical Projects */}
            <div className="cv-card-new service-card">
              <div className="cv-card-header">
                <i className="fas fa-project-diagram"></i>
                <h3>Technical Projects</h3>
              </div>
              <ul className="cv-projects-list">
                <li>
                  <strong>OmniTriage Command Center <span className="cv-tag">Web3/AI</span></strong>
                  <p>Architected a non-custodial inheritance project, placing <span className="cv-highlight-text">6th globally</span> in the Dev3pack Web3 AI Hackathon.</p>
                </li>
                <li>
                  <strong>The Gatsbyhouse</strong>
                  <p>Developed a full-stack web and mobile application featuring an online ordering system and kitchen dashboard tracking interface using TanStack Start, React, Tailwind CSS, Supabase, and Vercel.</p>
                </li>
                <li>
                  <strong>Blood-Broker <span className="cv-tag">Cloud Architecture</span></strong>
                  <p>Built and deployed a multi-stage Java container image via AWS ECR to an ECS Fargate cluster. Configured automated SQS polling and SNS emergency alerts while ensuring high JaCoCo test coverage.</p>
                </li>
                <li>
                  <strong>Robot World <span className="cv-tag">Java Server Optimization</span></strong>
                  <p>Refactored the concurrent Java server application ClientHandler by implementing modular helper methods, significantly reducing cyclomatic complexity and boosting enterprise Code Health scores.</p>
                </li>
                <li>
                  <strong>Ithembalethu FM</strong>
                  <p>Built, deployed, and sponsored a live radio streaming application on Vercel, integrating analytical tracking components and custom domain configurations.</p>
                </li>
                <li>
                  <strong>AthleticRegistry <span className="cv-tag">Blockchain</span></strong>
                  <p>Designed, compiled, and tested a Solidity smart contract using the Foundry toolkit to seamlessly manage athlete profiles and meet results.</p>
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="cv-card-new service-card">
              <div className="cv-card-header">
                <i className="fas fa-briefcase"></i>
                <h3>Experience</h3>
              </div>
              <div className="cv-experience-list">
                <div className="cv-exp-item">
                  <div className="cv-exp-header">
                    <div>
                      <h4>Peer Tutor</h4>
                      <span className="cv-exp-org">WeThinkCode_ – George, Western Cape</span>
                    </div>
                    <span className="cv-exp-date">Nov 2023 – Oct 2025</span>
                  </div>
                  <ul>
                    <li>Facilitated one-on-one and small group study sessions, breaking down complex programming concepts to enhance cohort understanding and technical proficiency.</li>
                    <li>Reviewed peer code, technical projects, and assignments, providing constructive and actionable feedback to improve architectural design and code quality.</li>
                    <li>Mentored students in effective problem-solving strategies, software debugging, and time management.</li>
                    <li>Fostered a collaborative, judgment-free learning environment while managing administrative tasks such as study schedules and attendance tracking.</li>
                  </ul>
                </div>
                <div className="cv-exp-item">
                  <div className="cv-exp-header">
                    <div>
                      <h4>Assistant Lecturer</h4>
                      <span className="cv-exp-org">Nelson Mandela Metropolitan University – George, Western Cape</span>
                    </div>
                  </div>
                  <ul>
                    <li>Assisted in the preparation and delivery of course materials while providing direct support to students during practical and tutorial sessions.</li>
                    <li>Provided technical support for digital learning platforms, presentations, and classroom projectors.</li>
                    <li>Evaluated and graded student assignments, tests, and academic projects under lecturer supervision.</li>
                    <li>Facilitated revision sessions and contributed to ongoing academic research projects.</li>
                  </ul>
                </div>
                <div className="cv-exp-item">
                  <div className="cv-exp-header">
                    <div>
                      <h4>Sales Associate</h4>
                      <span className="cv-exp-org">Sportscene TFG – George, Western Cape</span>
                    </div>
                  </div>
                  <ul>
                    <li>Delivered exceptional customer service by addressing product inquiries and resolving customer complaints efficiently.</li>
                    <li>Managed daily inventory counts, restocking procedures, and visual merchandising to maintain product availability and store aesthetics.</li>
                    <li>Handled point-of-sale transactions and actively drove sales to meet store targets.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="cv-card-new service-card">
              <div className="cv-card-header">
                <i className="fas fa-graduation-cap"></i>
                <h3>Education</h3>
              </div>
              <div className="cv-education-list">
                <div className="cv-edu-item">
                  <div className="cv-edu-dot"></div>
                  <div>
                    <h4>Software Engineering (NQF Level 6)</h4>
                    <span className="cv-exp-org">WeThinkCode_ – Johannesburg, Gauteng</span>
                    <span className="cv-exp-date-inline">October 2025 – Present</span>
                  </div>
                </div>
                <div className="cv-edu-item">
                  <div className="cv-edu-dot"></div>
                  <div>
                    <h4>Tourism Management (NQF Level 6)</h4>
                    <span className="cv-exp-org">Nelson Mandela University – George, Western Cape</span>
                    <span className="cv-exp-date-inline">January 2022 – November 2025</span>
                  </div>
                </div>
                <div className="cv-edu-item">
                  <div className="cv-edu-dot"></div>
                  <div>
                    <h4>Full Stack Development</h4>
                    <span className="cv-exp-org">IT Varsity (FNB App Academy)</span>
                    <span className="cv-exp-date-inline">May 2025 – July 2025</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications & Awards */}
            <div className="cv-card-new service-card">
              <div className="cv-card-header">
                <i className="fas fa-award"></i>
                <h3>Certifications &amp; Awards</h3>
              </div>
              <ul className="cv-cert-list">
                <li><i className="fas fa-certificate"></i> <strong>WeThinkCode_</strong> GenAI Course for Software Engineers</li>
                <li><i className="fas fa-handshake"></i> <strong>Offer Received:</strong> Software Engineering Internship at HexSoftwares (April 2026)</li>
                <li><i className="fas fa-certificate"></i> <strong>Full Stack Development</strong> – Zaio (July 2025)</li>
                <li><i className="fas fa-shield-alt"></i> <strong>Cyber Security</strong> – Cisco (February 2022)</li>
                <li><i className="fas fa-trophy"></i> <strong>Award: Most Improved Player</strong> – Recognized for significant growth in technical skills, teamwork, and resilience (November 2024)</li>
              </ul>
            </div>

            {/* Download */}
            <div className="cv-download-row">
              <a href="/Moeketsi-Motloung-CV.pdf" className="btn" download target="_blank" rel="noopener noreferrer">
                <i className="fas fa-download" style={{ marginRight: '0.5rem' }}></i>Download PDF Version
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <h1>Contact <span className="highlight">Me</span></h1>
          <p className="contact-description">I'd love to connect with you! Feel free to drop a message.</p>
          <div className="contact-container">
            <div className="contact-info">
              <p><i className="fas fa-map-marker-alt"></i> George, Western Cape, South Africa</p>
              <p><i className="fas fa-envelope"></i> mahxmotloung438@gmail.com</p>
              <p><i className="fas fa-phone"></i> 081 040 0624</p>
            </div>
            <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleFormChange}
                required
                disabled={formStatus === 'loading'}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleFormChange}
                required
                disabled={formStatus === 'loading'}
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleFormChange}
                required
                disabled={formStatus === 'loading'}
              ></textarea>

              {/* Feedback messages */}
              {formStatus === 'success' && (
                <div className="form-feedback form-feedback--success">
                  <i className="fas fa-check-circle"></i> Message sent! I'll get back to you soon.
                </div>
              )}
              {formStatus === 'error' && (
                <div className="form-feedback form-feedback--error">
                  <i className="fas fa-exclamation-circle"></i> Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button type="submit" className="btn" disabled={formStatus === 'loading'}>
                {formStatus === 'loading' ? (
                  <><i className="fas fa-spinner fa-spin" style={{ marginRight: '0.5rem' }}></i>Sending...</>
                ) : (
                  <><i className="fas fa-paper-plane" style={{ marginRight: '0.5rem' }}></i>Send Message</>
                )}
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* 4. The Correct, Overlapping Footer */}
      <section className="footer-section">
        {/* The Floating Banner */}
        <div className="cta-banner">
          <div className="cta-left">
            <h2>Have a project<br />in mind?</h2>
          </div>
          <div className="cta-right">
            <p>I'm available for freelance work. Let's connect and build something amazing together.</p>
            <a href="#contact" className="btn-primary">Let's Talk</a>
          </div>
        </div>

        {/* The Main Dark Footer */}
        <footer className="main-footer">
          <div className="footer-container">
            <div className="footer-col brand-col">
              <div className="logo">
                MOEKETSI ISAAC<span className="highlight"> ROOI MOTLOUNG</span>
              </div>
              <p className="brand-desc">Aspiring Web Designer and Developer passionate about creating meaningful and user-focused digital experiences.</p>
            <div className="social-icons" style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
                <a href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231" target="_blank" rel="noopener noreferrer" className="social-circle"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/moeketsi200" target="_blank" rel="noopener noreferrer" className="social-circle"><i className="fab fa-github"></i></a>
              </div>
            </div>

            <div className="footer-col links-col">
              <h4>Useful Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>

            <div className="footer-col contact-col">
              <h4>Contact Info</h4>
              <ul className="contact-info">
                <li><i className="fas fa-envelope"></i> mahxmotloung438@gmail.com</li>
                <li><i className="fas fa-phone"></i> +27 81 040 0624</li>
                <li><i className="fas fa-map-marker-alt"></i> George, Western Cape, South Africa</li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright-pill">
              © 2025 Moeketsi Motloung. Designed by Moeketsi Rooi.
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default App;
