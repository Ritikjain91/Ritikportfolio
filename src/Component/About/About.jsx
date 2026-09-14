import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/ritikportfolio.png';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = () => {
  const skills = [
    { name: "React JS & Frontend", level: 85, category: "Frontend" },
    { name: "JavaScript / ES6+", level: 85, category: "Core" },
    { name: "Node JS & Express", level: 80, category: "Backend" },
    { name: "MongoDB & SQL", level: 75, category: "Database" },
    { name: "HTML5 & Modern CSS", level: 90, category: "Frontend" },
    { name: "Python & Django", level: 70, category: "Backend" },
    { name: "Docker & DevOps Basics", level: 65, category: "DevOps" },
    { name: "AI Integration (ChatGPT/Gemini/DeepSeek)", level: 88, category: "AI Tools" },
    { name: "Data Structures & Algorithms", level: 80, category: "Core" },
  ];

  const highlights = [
    { icon: <FaBriefcase />, title: "2+ Years", desc: "Full-Stack Development" },
    { icon: <FaCode />, title: "70+ Repos", desc: "Open-source & Projects" },
    { icon: <FaGraduationCap />, title: "250+ Solved", desc: "LeetCode & HackerRank" },
  ];

  const achievements = [
    { number: "2+", text: "Years of Experience" },
    { number: "70+", text: "Projects & Repositories" },
    { number: "10+", text: "Happy Clients & Collaborations" },
    { number: "250+", text: "DSA Problems Solved" }
  ];

  return (
    <section id='about' className='about-section'>
      <div className="about-container container">
        {/* Section Title */}
        <div className="section-title">
          <h1>About Me</h1>
          <img src={theme_pattern} alt="" />
        </div>
        
        {/* Main Content: Portrait & Bio */}
        <div className="about-content">
          <div className="about-left">
            <div className="about-image-card">
              <div className="about-image-glow"></div>
              <img src={profile_img} alt="Ritik Jain" className="about-profile-img" />
              <div className="about-badge-card">
                <span className="badge-title">Ritik Jain</span>
                <span className="badge-subtitle">Full Stack Developer</span>
              </div>
            </div>

            {/* Quick highlight pills under portrait */}
            <div className="about-highlights-grid">
              {highlights.map((h, i) => (
                <div key={i} className="about-highlight-item">
                  <div className="highlight-icon">{h.icon}</div>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-right">
            <div className="about-bio">
              <h3 className="about-bio-heading">
                Building scalable web experiences with modern architecture & passion.
              </h3>
              <p>
                I am a dedicated software engineer with 2+ years of professional experience across frontend and backend systems. I specialize in building end-to-end web applications with the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), robust <strong>SQL</strong> databases, and clean modern UI systems.
              </p>
              <p>
                My technical versatility extends to <strong>Python, Django, and containerized deployment with Docker</strong>. I actively integrate cutting-edge AI APIs (including OpenAI, Gemini, and DeepSeek) into real-world applications to deliver intelligent, automated user workflows.
              </p>
              <p>
                With a deep grounding in <strong>Data Structures & Algorithms</strong> and continuous problem-solving on LeetCode, I write clean, maintainable, and high-performance code adhering to industry best practices.
              </p>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className="about-skills-wrapper">
          <h2 className="skills-heading">Technical Proficiency</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-info">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-track">
                  <div 
                    className="skill-bar-fill" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Counter Section */}
        <div className="about-achievements-wrapper">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <h3 className="achievement-number">{achievement.number}</h3>
              <p className="achievement-label">{achievement.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;