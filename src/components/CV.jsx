const CV = () => {
  return (
    <section id="cv" className="cv-section">
      <h1>My <span className="highlight">Curriculum Vitae</span></h1>
      <h1 style={{ textAlign: 'center' }}>My <span className="highlight">Curriculum Vitae</span></h1>
      <div className="cv-content">
        <div className="cv-block">
          <h2>Personal Information</h2>
          <p><strong>Full Name:</strong> Moeketsi Isaac Rooi Motloung</p>
          <p><strong>Phone:</strong> 083 765 0991</p>
          <p><strong>Email:</strong> mahxmotloung438@gmail.com</p>
          <p><strong>Location:</strong> George, Western Cape, South Africa</p>
        </div>
        <div className="cv-block">
          <h2>Education</h2>
          <p><strong>WeThinkCode</strong> - Software Engineering (Current)</p>
          <p><strong>Nelson Mandela University</strong> – Tourism Management</p>
          <p><strong>Sedibeng TVET College</strong> – Tourism Management N4</p>
          <p><strong>Seotlong Agriculture & Hotel School</strong> – Grade 8–12</p>
        </div>
        <div className="cv-block">
          <h2>Work Experience</h2>
          <p><strong>Sales Associate</strong> – Sportscene (TFG), George (2023–Present)</p>
          <p><strong>Assistant Chef</strong> – Seotlong Agriculture & Hotel School</p>
          <p><strong>Lecturer Assistant</strong> – Part-time (Since 2024)</p>
        </div>
        <div className="cv-block">
          <h2>Certifications & Skills</h2>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Cybersecurity (Zaio Certified)</li>
            <li>Responsive Web Design</li>
            <li>IT Support & Web Development Fundamentals</li>
            <li>Teamwork & Customer Service</li>
          </ul>
        </div>
        <div className="cv-block">
          <h2>Languages</h2>
          <p>English (Fluent), Sesotho (Native)</p>
        </div>
        <div className="cv-block full-width">
          <a href="/Moeketsi-Motloung-CV.pdf" className="btn" download>Download PDF Version</a>
        </div>
      </div>
    </section>
  );
};

export default CV;

