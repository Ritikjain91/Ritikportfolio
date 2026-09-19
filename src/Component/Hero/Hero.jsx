import React, { useState, useEffect, useMemo } from 'react';
import './Hero.css';
import profile_img from '../../assets/Ritikjainportfolio.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaGithub, FaLinkedinIn, FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

function Hero() {
  const roles = useMemo(() => [
    "Full Stack Software Engineer",
    "MERN Stack Developer",
    "React.js & Node.js Specialist",
    "Problem Solver (250+ LeetCode DSA)",
    "Software Engineer based in India"
  ], []);

  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && text === currentRole) {
      // Full text typed, pause before deleting
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && text === '') {
      // Deletion complete, pause briefly before next role
      timer = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 350);
    } else if (isDeleting) {
      // Deleting character by character
      timer = setTimeout(() => {
        setText((prev) => currentRole.substring(0, prev.length - 1));
      }, 45);
    } else {
      // Typing character by character
      timer = setTimeout(() => {
        setText((prev) => currentRole.substring(0, prev.length + 1));
      }, 85);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex, roles]);

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

        {/* Title with Typing Animation */}
        <h1 className="hero-title">
          <span>Hey, I'm Ritik Jain</span>
          <span className="hero-subtitle" aria-live="polite">
            <span className="typewriter-text">{text}</span>
            <span className="typewriter-cursor" aria-hidden="true">|</span>
          </span>
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
