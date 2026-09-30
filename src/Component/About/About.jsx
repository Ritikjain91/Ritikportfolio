import React, { useState } from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import profile_img from '../../assets/ritikportfolio.png';
import { 
  FaGraduationCap, 
  FaCode, 
  FaAndroid, 
  FaGlobe, 
  FaLayerGroup 
} from 'react-icons/fa';

const About = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    // Android & Mobile
    { name: "Native Android & Kotlin", level: 85, category: "mobile", desc: "Coroutines, Flow, Jetpack" },
    { name: "Jetpack Compose & Material 3", level: 82, category: "mobile", desc: "Declarative modern UI" },
    { name: "React Native & Expo", level: 88, category: "mobile", desc: "Cross-platform mobile apps" },
    { name: "Room DB & SQLite Local Storage", level: 86, category: "mobile", desc: "Offline-first architecture" },
    { name: "Android Architecture (MVVM / MVI)", level: 85, category: "mobile", desc: "Clean, testable codebases" },
    { name: "Socket.io & Mobile Networking", level: 88, category: "mobile", desc: "Real-time bi-directional sync" },

    // Web & Backend
    { name: "React JS & Next.js", level: 90, category: "web", desc: "Component architecture, hooks" },
    { name: "Node JS & Express", level: 84, category: "web", desc: "RESTful APIs & microservices" },
    { name: "JavaScript / ES6+ & TypeScript", level: 88, category: "web", desc: "Modern synchronous & async JS" },
    { name: "MongoDB & SQL (Postgres / MySQL)", level: 80, category: "web", desc: "Data modeling & indexing" },
    { name: "HTML5 & Modern CSS / Tailwind", level: 92, category: "web", desc: "Responsive glassmorphism UI" },
    { name: "Python & Backend Scripting", level: 75, category: "web", desc: "Automation, APIs & scripts" },

    // Core & Tools
    { name: "Data Structures & Algorithms", level: 85, category: "tools", desc: "250+ LeetCode problems" },
    { name: "Android Studio & Gradle / EAS", level: 84, category: "tools", desc: "Build tools, APK / AAB signing" },
    { name: "AI APIs (OpenAI, Gemini, DeepSeek)", level: 88, category: "tools", desc: "Intelligent agent integrations" },
    { name: "Git, GitHub & CI/CD Workflows", level: 85, category: "tools", desc: "Version control & automation" },
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  const highlights = [
    { icon: <FaAndroid />, title: "Android Dev", desc: "Native & React Native" },
    { icon: <FaGlobe />, title: "Full-Stack", desc: "MERN & Scalable Web" },
    { icon: <FaCode />, title: "70+ Repos", desc: "Open-source & Mobile Apps" },
    { icon: <FaGraduationCap />, title: "250+ Solved", desc: "LeetCode & HackerRank" },
  ];

  const achievements = [
    { number: "2+", text: "Years of Experience" },
    { number: "15+", text: "Mobile & Web Projects" },
    { number: "70+", text: "GitHub Repositories" },
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
                <span className="badge-subtitle">Android & Full Stack Developer</span>
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
                Crafting robust Android mobile applications and scalable web platforms.
              </h3>
              <p>
                I am a dedicated software engineer with <strong>2+ years of professional experience</strong> spanning native & cross-platform <strong>Android application development</strong> and <strong>Full-Stack web engineering</strong>. I specialize in building responsive, offline-ready mobile applications with <strong>Kotlin, Jetpack Compose, React Native, SQLite/Room, and Socket.io</strong>.
              </p>
              <p>
                On the web side, I design and deploy scalable full-stack applications powered by the <strong>MERN stack</strong> (MongoDB, Express.js, React.js, Node.js), relational <strong>SQL</strong> databases, and <strong>Python</strong> backends. I have engineered real-time chat platforms, enterprise landing pages, and API-driven web portals.
              </p>
              <p>
                My engineering approach is rooted in strong <strong>Data Structures & Algorithms</strong> (250+ challenges solved across LeetCode & HackerRank), clean <strong>MVVM / Clean Architecture</strong>, seamless cloud integrations, and cutting-edge <strong>AI API integrations</strong> (Gemini, OpenAI, DeepSeek).
              </p>
            </div>

            {/* Android & Web Focus Badges */}
            <div className="about-focus-cards">
              <div className="focus-card mobile-card">
                <div className="focus-card-icon">
                  <FaAndroid />
                </div>
                <div className="focus-card-text">
                  <h4>Android Mobile Mastery</h4>
                  <p>Jetpack Compose, Kotlin Coroutines, SQLite/Room persistence, React Native, real-time sockets & APK generation.</p>
                </div>
              </div>

              <div className="focus-card web-card">
                <div className="focus-card-icon">
                  <FaGlobe />
                </div>
                <div className="focus-card-text">
                  <h4>Full-Stack Web Engineering</h4>
                  <p>React.js, Node.js, Express, MongoDB, SQL databases, RESTful APIs, modern styling & CI/CD deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Skills Section with Filter Tabs */}
        <div className="about-skills-wrapper">
          <div className="skills-header-row">
            <h2 className="skills-heading">Technical Proficiency</h2>
            
            <div className="skills-tabs">
              <button 
                className={`skill-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                onClick={() => setActiveTab('all')}
              >
                All Skills
              </button>
              <button 
                className={`skill-tab-btn ${activeTab === 'mobile' ? 'active' : ''}`}
                onClick={() => setActiveTab('mobile')}
              >
                <FaAndroid className="tab-icon" /> Android & Mobile
              </button>
              <button 
                className={`skill-tab-btn ${activeTab === 'web' ? 'active' : ''}`}
                onClick={() => setActiveTab('web')}
              >
                <FaGlobe className="tab-icon" /> Web & Backend
              </button>
              <button 
                className={`skill-tab-btn ${activeTab === 'tools' ? 'active' : ''}`}
                onClick={() => setActiveTab('tools')}
              >
                <FaLayerGroup className="tab-icon" /> Architecture & Tools
              </button>
            </div>
          </div>

          <div className="skills-grid">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-info">
                  <div className="skill-title-block">
                    <span className="skill-name">{skill.name}</span>
                    {skill.desc && <span className="skill-desc-sub">{skill.desc}</span>}
                  </div>
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