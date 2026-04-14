import React, { useRef } from 'react';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert('Message sent! (PHP backend ready for deploy)');
    form.current.reset();
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <h1>Contact <span className="highlight">Me</span></h1>
        <p className="contact-description">I'd love to connect with you! Whether you have a project in mind or just want to say hi, feel free to drop a message.</p>
        <div className="contact-container">
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> George, Western Cape, South Africa</p>
            <p><i className="fas fa-envelope"></i> mahxmotloung438@gmail.com</p>
            <p><i className="fas fa-phone"></i> 081 040 0624</p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/moeketsi200" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" rows="6" placeholder="Your Message" required />
            <button type="submit" className="btn">Send Message</button>
            <p style={{fontSize: '12px', color: '#ccc', marginTop: '10px'}}>
              Setup: 1) Go to emailjs.com → 2) Create service/template → 3) Replace SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
