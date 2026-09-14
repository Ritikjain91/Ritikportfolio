import React, { useState } from 'react';
import './Contact.css';
import themePattern from '../../assets/theme_pattern.svg';
import mailIcon from '../../assets/mail_icon.svg';
import locationIcon from '../../assets/location_icon.svg';
import callIcon from '../../assets/call_icon.svg';
import { FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus({ state: 'loading', message: 'Sending message...' });
    const formData = new FormData(event.target);

    // Using the user's Web3Forms access key
    formData.append("access_key", "5f6ffa01-26b0-4a44-9e4b-8199d61a6c8f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus({ 
          state: 'success', 
          message: 'Thank you! Your message has been sent successfully. I will get back to you shortly.' 
        });
        event.target.reset();
      } else {
        setStatus({ 
          state: 'error', 
          message: data.message || 'Something went wrong. Please try again.' 
        });
      }
    } catch (error) {
      setStatus({ 
        state: 'error', 
        message: 'Network error occurred. Please reach out via email directly.' 
      });
    }
  };

  return (
    <section id='contact' className="contact-section">
      <div className="contact-container container">
        {/* Title */}
        <div className="section-title">
          <h1>Get in Touch</h1>
          <img src={themePattern} alt="" />
        </div>

        <div className="contact-content">
          {/* Left: Contact Info Cards */}
          <div className="contact-left">
            <div className="contact-headline">
              <h2>Let's build something extraordinary together</h2>
              <p>
                Whether you have a question, an opportunity, a project proposal, or simply want to connect, my inbox is always open. Let's discuss how we can collaborate!
              </p>
            </div>

            <div className="contact-cards-list">
              <a href="mailto:jainritik829@gmail.com" className="contact-info-card">
                <div className="contact-icon-box">
                  <img src={mailIcon} alt="Email" />
                </div>
                <div className="contact-info-text">
                  <span className="info-label">Email Me</span>
                  <span className="info-value">jainritik829@gmail.com</span>
                </div>
              </a>

              <a href="tel:+918518900153" className="contact-info-card">
                <div className="contact-icon-box">
                  <img src={callIcon} alt="Phone" />
                </div>
                <div className="contact-info-text">
                  <span className="info-label">Call / WhatsApp</span>
                  <span className="info-value">+91 8518900153</span>
                </div>
              </a>

              <div className="contact-info-card">
                <div className="contact-icon-box">
                  <img src={locationIcon} alt="Location" />
                </div>
                <div className="contact-info-text">
                  <span className="info-label">Location</span>
                  <span className="info-value">Madhya Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Glassmorphic Contact Form */}
          <div className="contact-right">
            <form onSubmit={onSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input 
                  type='text' 
                  id="name" 
                  name='name' 
                  placeholder='What should I call you?' 
                  required 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name='email' 
                  placeholder='Where can I reach you?' 
                  required 
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="6" 
                  placeholder='Tell me about your project, idea, or questions...' 
                  required 
                  className="form-input form-textarea"
                ></textarea>
              </div>

              <button 
                type='submit' 
                className="contact-submit-btn" 
                disabled={status.state === 'loading'}
              >
                {status.state === 'loading' ? (
                  <>
                    <FaSpinner className="spin-icon" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="send-icon" />
                  </>
                )}
              </button>

              {/* Status Banner */}
              {status.state !== 'idle' && status.state !== 'loading' && (
                <div className={`status-banner ${status.state}`}>
                  {status.state === 'success' ? (
                    <FaCheckCircle className="status-icon" />
                  ) : (
                    <FaExclamationCircle className="status-icon" />
                  )}
                  <span>{status.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
