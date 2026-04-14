import React, { useState, useEffect } from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import heroImg from './assets/Rooi.jpeg';
import aboutImg from './assets/Moeketsi.jpeg';
import clockImg from './assets/clock.jpg';
import ithembalethuImg from './assets/ithembalethu-fm.png';
import eduIncImg from './assets/edu-inc.png';
import mathMasteryImg from './assets/math-arena.png';

function App() {
  // Slideshow Text Logic
  const words = ['Software Engineer', 'Full-Stack Developer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeOpacity, setFadeOpacity] = useState(1);
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <>
      {/* 1. Your Custom 3D Background */}
      <BackgroundCanvas />

      {/* 2. The Floating Glassmorphism Navbar */}
      <header>
        <nav>
          <div className="logo">
            MOEKETSI ISAAC <span className="highlight">ROOI MOTLOUNG</span>
          </div>
          <ul>
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a></li>
            <li><a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a></li>
            <li><a href="#cv" className={activeSection === 'cv' ? 'active' : ''}>CV</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
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
          </div>
        </section>

        {/* CV Section */}
        <section id="cv" className="cv-section">
          <h1 style={{ textAlign: 'center' }}>My <span className="highlight">Curriculum Vitae</span></h1>
          <div className="cv-content">
            <div className="skills-grid">
              <div className="cv-block service-card skill-box">
                <i className="fas fa-user"></i>
                <h3>Personal Information</h3>
                <p><strong>Full Name:</strong> Moeketsi Isaac Rooi Motloung</p>
                <p><strong>Phone:</strong> 081 040 0624</p>
                <p><strong>Email:</strong> mahxmotloung438@gmail.com</p>
                <p><strong>Location:</strong> George, Western Cape, South Africa</p>
              </div>
              <div className="cv-block service-card skill-box">
                <i className="fas fa-graduation-cap"></i>
                <h3>Education</h3>
                <p><strong>WeThinkCode</strong> - Software Engineering (Current)</p>
                <p><strong>Nelson Mandela University</strong> – Tourism Management</p>
                <p><strong>Sedibeng TVET College</strong> – Tourism Management N4</p>
                <p><strong>Seotlong Agriculture &amp; Hotel School</strong> – Grade 8–12</p>
              </div>
              <div className="cv-block service-card skill-box">
                <i className="fas fa-briefcase"></i>
                <h3>Work Experience</h3>
                <p><strong>Sales Associate</strong> – Sportscene (TFG), George (2023–Present)</p>
                <p><strong>Assistant Chef</strong> – Seotlong Agriculture &amp; Hotel School</p>
                <p><strong>Lecturer Assistant</strong> – Part-time (Since 2024)</p>
              </div>
              <div className="cv-block service-card skill-box">
                <i className="fas fa-certificate"></i>
                <h3>Certifications &amp; Skills</h3>
                <ul>
                  <li>HTML, CSS, JavaScript</li>
                  <li>Cybersecurity (Zaio Certified)</li>
                  <li>Responsive Web Design</li>
                  <li>IT Support &amp; Web Development Fundamentals</li>
                  <li>Teamwork &amp; Customer Service</li>
                </ul>
              </div>
              <div className="cv-block service-card skill-box">
                <i className="fas fa-globe"></i>
                <h3>Languages</h3>
                <p>English (Fluent), Sesotho (Native)</p>
              </div>
            </div>
            <div className="cv-block full-width">
              <a href="/Moeketsi-Motloung-CV.pdf" className="btn" download>Download PDF Version</a>
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
            <form className="contact-form" action="/send_mail.php" method="POST">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn">Send Message</button>
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
