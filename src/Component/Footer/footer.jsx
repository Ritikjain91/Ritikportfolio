import React, { useState } from 'react';
import './footer.css';
import footer_logo from '../../assets/logo.svg';
import user_icon from '../../assets/user_icon.svg';
import { FaGithub, FaLinkedinIn, FaArrowUp, FaCheck } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="footer-container container">
        {/* Top Footer Section */}
        <div className="footer-top">
          <div className="footer-info">
            <img src={footer_logo} alt="Ritik Jain Logo" className="footer-logo" />
            <p className="footer-desc">
              Full Stack Software Engineer with 2+ years of experience developing modern, performant web applications and AI-driven solutions for global clients.
            </p>
          </div>

          <div className="footer-newsletter">
            <h4 className="newsletter-title">Stay in Touch</h4>
            <form onSubmit={handleSubscribe} className="footer-subscribe-form">
              <div className="footer-email-box">
                <img src={user_icon} alt="" className="input-user-icon" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  required
                  className="footer-email-field"
                />
              </div>
              <button type="submit" className="footer-subscribe-btn">
                {subscribed ? (
                  <>
                    <FaCheck />
                    <span>Subscribed!</span>
                  </>
                ) : (
                  <span>Subscribe</span>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* Bottom Footer Section */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ritik Jain. Crafted with passion & precision.
          </p>

          {/* Social Links */}
          <div className="footer-socials">
            <a 
              href="https://github.com/Ritikjain91" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>

            <a 
              href="https://www.linkedin.com/in/ritik-jain-451r1b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn />
            </a>

            <a 
              href="https://leetcode.com/u/Ritikjain_91/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn leetcode"
              aria-label="LeetCode Profile"
            >
              <SiLeetcode color="#FFA116" />
            </a>

            {/* Back to Top */}
            <button 
              onClick={scrollToTop} 
              className="scroll-top-btn" 
              title="Scroll to top"
              aria-label="Scroll back to top"
            >
              <FaArrowUp />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
