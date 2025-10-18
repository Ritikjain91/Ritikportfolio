import React, { useState } from 'react';
import './Contact.css';
import themePattern from '../../assets/theme_pattern.svg';
import mailIcon from '../../assets/mail_icon.svg';
import locationIcon from '../../assets/location_icon.svg';
import callIcon from '../../assets/call_icon.svg';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "5f6ffa01-26b0-4a44-9e4b-8199d61a6c8f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        alert(data.message);
      } else {
        setResult(`Error: ${data.message}`);
      }
    } catch (error) {
      setResult("An error occurred. Please try again later.");
    }
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={themePattern} alt="Theme Pattern" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I am currently open to new opportunities, including freelance projects, full-time roles, or collaborations. 
            Please feel free to reach out via email at jainritik829@gmail.com or call me at +91 8518900153.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mailIcon} alt="Mail Icon" />
              <p>jainritik829@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={locationIcon} alt="Location Icon" />
              <p>Madhya Pradesh, India</p>
            </div>
            <div className="contact-detail">
              <img src={callIcon} alt="Call Icon" />
              <p>+91 8518900153</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="name">Your Name</label>
          <input type='text' id="name" placeholder='Enter your Name' name='name' required />
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" placeholder='Enter Your Email' name='email' required />
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" rows="8" placeholder='Enter Your Message here' required></textarea>
          <button type='submit' className="contact-submit">Submit Now</button>
          {result && <p className="contact-result">{result}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
