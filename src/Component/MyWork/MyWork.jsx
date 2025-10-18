import React, { useState } from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
import arrow_icon from '../../assets/arrow_icon.svg'

const MyWork = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? mywork_data : mywork_data.slice(0, 6);

  const handleProjectClick = (work) => {
    // Open GitHub link when image is clicked
    if (work.w_link) {
      window.open(work.w_link, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLiveDemoClick = (e, work) => {
    e.stopPropagation(); // Prevent triggering the image click
    if (work.w_live) {
      window.open(work.w_live, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div id='work' className="my-work">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>
      
      <div className="mywork-container">
        {displayedProjects.map((work, index) => (
          <div key={index} className="project-item">
            <img 
              src={work.w_img} 
              alt={work.w_name}
              onClick={() => handleProjectClick(work)}
              title={`Click to view ${work.w_name} on GitHub`}
            />
            <div className="project-info">
              <h3>{work.w_name}</h3>
              {work.w_live && (
                <button 
                  className="live-demo-btn"
                  onClick={(e) => handleLiveDemoClick(e, work)}
                >
                  Live Demo
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {mywork_data.length > 3 && (
        <div 
          className="mywork-showmore" 
          onClick={() => setShowAll(!showAll)}
        >
          <p>{showAll ? 'Show Less' : 'Show More'}</p>
          <img 
            src={arrow_icon} 
            alt="arrow icon" 
            style={{ transform: showAll ? 'rotate(180deg)' : 'rotate(0deg)' }}
          />
        </div>
      )}
    </div>
  )
}

export default MyWork