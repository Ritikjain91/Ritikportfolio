import React from 'react';
import './footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="Footer Logo" className="footer-logo" />
          <p>
            I am a Frontend developer from India with 2+ years of experience as a developer in MNCs and startups.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="User Icon" />
            <input type="email" placeholder="Enter your Email" />
          </div>
          <div className="footer-subscribe">
            Subscribe
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024. All rights reserved by Ritik Jain.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p className='github-icon'><a href="https://github.com/Ritikjain91"><i class="fab fa-github"></i></a></p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
