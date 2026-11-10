import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('mahxmotloung438@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Optional EmailJS credentials from environment variables or sensible defaults
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (serviceId && templateId && publicKey) {
      try {
        await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
        setStatus({ submitting: false, submitted: true, error: null });
        setFormState({ name: '', email: '', subject: '', message: '' });
      } catch (err) {
        console.error('EmailJS error:', err);
        setStatus({
          submitting: false,
          submitted: false,
          error: 'Could not send via EmailJS. Opening mail client instead...',
        });
        // Graceful fallback to mailto
        window.location.href = `mailto:mahxmotloung438@gmail.com?subject=${encodeURIComponent(
          formState.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Hi Moeketsi,\n\nName: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
        )}`;
      }
    } else {
      // Direct reliable mail client submission when EmailJS keys are not yet configured in .env
      setTimeout(() => {
        setStatus({ submitting: false, submitted: true, error: null });
        window.location.href = `mailto:mahxmotloung438@gmail.com?subject=${encodeURIComponent(
          formState.subject || `Portfolio Contact from ${formState.name}`
        )}&body=${encodeURIComponent(
          `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
        )}`;
      }, 400);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">
          Contact <span className="highlight-gradient">Me</span>
        </h2>
        <p className="section-subtitle">
          Have an opportunity, collaboration, or question? Feel free to reach out directly.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Information & Channels */}
        <div className="contact-info-card service-card">
          <h3>Let's build something remarkable.</h3>
          <p className="contact-intro">
            I am actively seeking junior developer roles, graduate engineering positions, or collaborative freelance projects.
          </p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="method-icon"><i className="fas fa-envelope"></i></div>
              <div className="method-details">
                <span className="method-title">Email</span>
                <a href="mailto:mahxmotloung438@gmail.com" className="method-value">
                  mahxmotloung438@gmail.com
                </a>
              </div>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                title="Copy Email to Clipboard"
                aria-label="Copy Email"
              >
                <i className={copied ? 'fas fa-check' : 'far fa-copy'}></i>
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-method-item">
              <div className="method-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="method-details">
                <span className="method-title">Phone / WhatsApp</span>
                <a href="tel:+27810400624" className="method-value">
                  +27 81 040 0624
                </a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="method-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="method-details">
                <span className="method-title">Location</span>
                <span className="method-value">George, Western Cape, South Africa</span>
              </div>
            </div>
          </div>

          <div className="contact-socials-box">
            <h4>Follow &amp; Connect</h4>
            <div className="social-links-row">
              <a
                href="https://www.linkedin.com/in/moeketsi-isaac-rooi-motloung-02bb07231/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i> <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/moeketsi200"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i> <span>GitHub</span>
              </a>
              <a
                href="https://x.com/rooi_moeketsi"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="X / Twitter"
              >
                <i className="fab fa-x-twitter"></i> <span>X (Twitter)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-card service-card">
          <h3>Send a Direct Message</h3>
          {status.submitted ? (
            <div className="form-success-banner">
              <i className="fas fa-check-circle"></i>
              <h4>Thank you, Message Ready!</h4>
              <p>Your message has been initiated. I typically reply within 24 hours.</p>
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form-inner">
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. Sarah Connor"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="sarah@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Job Opportunity / Project Collaboration"
                  value={formState.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here..."
                  value={formState.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-submit"
                disabled={status.submitting}
              >
                {status.submitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane"></i> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
