import React, { useState } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  // Show 3 projects initially, or all 6 when toggled
  const displayedProjects = showAll ? mywork_data : mywork_data.slice(0, 3);

  return (
    <section id='work' className="mywork-section">
      <div className="mywork-container container">
        {/* Title */}
        <div className="section-title">
          <h1>My Latest Work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        
        {/* Project Grid */}
        <div className="projects-grid">
          {displayedProjects.map((work, index) => (
            <div key={index} className="project-card">
              <div className="project-image-wrapper">
                <img 
                  src={work.w_img} 
                  alt={work.w_name}
                  loading="lazy"
                  className="project-image"
                />
                <div className="project-overlay-gradient"></div>
              </div>

              <div className="project-card-body">
                {/* Tech Tags */}
                {work.w_tags && (
                  <div className="project-tags">
                    {work.w_tags.map((tag, tIdx) => (
                      <span key={tIdx} className="project-tag-pill">{tag}</span>
                    ))}
                  </div>
                )}

                <h3 className="project-title">{work.w_name}</h3>
                <p className="project-desc">{work.w_desc}</p>

                {/* Actions: GitHub & Live Demo */}
                <div className="project-actions">
                  {work.w_link && (
                    <a 
                      href={work.w_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn code-btn"
                      title="View GitHub Repository"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                  )}

                  {work.w_live && (
                    <a 
                      href={work.w_live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn demo-btn"
                      title="View Live Application"
                    >
                      <FaExternalLinkAlt />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Show More / Show Less Toggle Button */}
        {mywork_data.length > 3 && (
          <div className="showmore-wrapper">
            <button 
              className="mywork-showmore-btn" 
              onClick={() => setShowAll(!showAll)}
              aria-label={showAll ? 'Show Fewer Projects' : 'Show All Projects'}
            >
              <span>{showAll ? 'Show Less' : `Explore All (${mywork_data.length} Projects)`}</span>
              <img 
                src={arrow_icon} 
                alt="" 
                className={`showmore-arrow ${showAll ? 'expanded' : ''}`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWork;