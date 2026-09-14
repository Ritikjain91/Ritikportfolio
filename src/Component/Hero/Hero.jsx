import React from 'react';
import './Hero.css';
import profile_img from '../../assets/Ritikjainportfolio.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Hero() {
  return (
    <section id='home' className='hero-section'>
      <div className='hero-container container'>
        {/* Availability Badge */}
        <div className="hero-badge">
          <span className="status-dot"></span>
          <span>Available for New Opportunities</span>
        </div>

        {/* Profile Avatar Frame */}
        <div className="hero-avatar-wrapper">
          <div className="hero-avatar-glow"></div>
          <div className="hero-avatar">
            <img src={profile_img} alt="Ritik Jain" />
          </div>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          <span>Hey, I'm Ritik Jain</span>
          <span className="hero-subtitle">Full Stack Software Engineer based in India</span>
        </h1>

        {/* Bio */}
        <p className="hero-desc">
          Passionate engineer with <strong>2+ years of experience</strong> crafting performant frontend & scalable backend systems. Specializing in <strong>React.js, Node.js, Express, MongoDB, SQL, Python & AI integrations</strong>. Proven problem solver with 250+ DSA challenges solved on LeetCode & HackerRank.
        </p>

        {/* Actions */}
        <div className="hero-action">
          <AnchorLink href="#contact" offset={80} className="hero-btn hero-connect-btn">
            <span>Connect With Me</span>
          </AnchorLink>
          
          <a 
            href="https://resume-gilt-tau.vercel.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hero-btn hero-resume-btn"
          >
            <span>My Resume</span>
            <FaExternalLinkAlt className="btn-icon" />
          </a>
        </div>

        {/* Quick Social Links Bar */}
        <div className="hero-socials">
          <a 
            href="https://github.com/Ritikjain91" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="GitHub Profile"
            className="hero-social-link"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/ritik-jain-451r1b/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="hero-social-link"
          >
            <FaLinkedinIn />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://leetcode.com/u/Ritikjain_91/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LeetCode Profile"
            className="hero-social-link"
          >
            <SiLeetcode color="#FFA116" />
            <span>LeetCode</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
