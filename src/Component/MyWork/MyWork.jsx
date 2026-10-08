import React, { useState, useEffect } from 'react';
import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaAndroid, 
  FaGlobe, 
  FaDownload, 
  FaImages, 
  FaTimes, 
  FaChevronLeft, 
  FaChevronRight,
  FaCheckCircle
} from 'react-icons/fa';

const MyWork = () => {
  const [filter, setFilter] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Filter projects by category
  const filteredProjects = mywork_data.filter((item) => {
    if (filter === 'all') return true;
    return item.w_category === filter;
  });

  // Display limit logic
  const initialCount = filter === 'android' ? 6 : 6;
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, initialCount);

  const androidCount = mywork_data.filter((p) => p.w_category === 'android').length;
  const webCount = mywork_data.filter((p) => p.w_category === 'web').length;

  // Handle modal escape key & body scroll lock
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedProject) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveImageIndex(0);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.w_screenshots) return;
    setActiveImageIndex((prev) => 
      prev === 0 ? selectedProject.w_screenshots.length - 1 : prev - 1
    );
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    if (!selectedProject || !selectedProject.w_screenshots) return;
    setActiveImageIndex((prev) => 
      (prev + 1) % selectedProject.w_screenshots.length
    );
  };

  return (
    <section id='work' className="mywork-section">
      <div className="mywork-container container">
        {/* Title */}
        <div className="section-title">
          <h1>Featured Portfolio</h1>
          <img src={theme_pattern} alt="" />
        </div>

        {/* Category Filter Tabs */}
        <div className="portfolio-filter-bar">
          <button 
            className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
            onClick={() => { setFilter('all'); setShowAll(false); }}
          >
            All Work ({mywork_data.length})
          </button>
          
          <button 
            className={`filter-tab android-tab ${filter === 'android' ? 'active' : ''}`}
            onClick={() => { setFilter('android'); setShowAll(false); }}
          >
            <FaAndroid className="tab-icon android-green" />
            Android & Mobile ({androidCount})
          </button>
          
          <button 
            className={`filter-tab ${filter === 'web' ? 'active' : ''}`}
            onClick={() => { setFilter('web'); setShowAll(false); }}
          >
            <FaGlobe className="tab-icon" />
            Web Platforms ({webCount})
          </button>
        </div>
        
        {/* Project Grid */}
        <div className="projects-grid">
          {displayedProjects.map((work, index) => (
            <div 
              key={index} 
              className={`project-card ${work.w_category === 'android' ? 'android-card' : ''}`}
            >
              <div 
                className="project-image-wrapper"
                onClick={() => work.w_screenshots?.length > 1 && openModal(work)}
                style={{ cursor: work.w_screenshots?.length > 1 ? 'pointer' : 'default' }}
                title={work.w_screenshots?.length > 1 ? "Click to view screenshots" : ""}
              >
                <img 
                  src={work.w_img} 
                  alt={work.w_name}
                  loading="lazy"
                  className="project-image"
                />
                <div className="project-overlay-gradient"></div>

                {/* Badge overlay on image */}
                <div className="project-badge-pill">
                  {work.w_category === 'android' ? (
                    <span className="badge-content android-badge">
                      <FaAndroid /> {work.w_badge || "Android App"}
                    </span>
                  ) : (
                    <span className="badge-content web-badge">
                      <FaGlobe /> {work.w_badge || "Web Application"}
                    </span>
                  )}
                </div>

                {work.w_screenshots?.length > 1 && (
                  <div className="gallery-indicator">
                    <FaImages />
                    <span>{work.w_screenshots.length} Screens</span>
                  </div>
                )}
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

                {/* Android specific feature pills if available */}
                {work.w_highlights && (
                  <div className="project-highlights-preview">
                    <FaCheckCircle className="highlight-check" />
                    <span>{work.w_highlights[0]}</span>
                  </div>
                )}

                {/* Actions: Download APK, Screenshots, GitHub & Live Demo */}
                <div className="project-actions">
                  {/* Download APK / ZIP button */}
                  {work.w_apk && (
                    <a 
                      href={work.w_apk} 
                      download="PulseChat.zip"
                      className="project-btn apk-btn"
                      title="Download Android App ZIP (contains PulseChat.apk)"
                    >
                      <FaDownload />
                      <span>Download App</span>
                    </a>
                  )}

                  {/* Screenshots gallery button */}
                  {work.w_screenshots?.length > 1 && (
                    <button 
                      onClick={() => openModal(work)}
                      className="project-btn preview-btn"
                      title="View App Screenshots Gallery"
                    >
                      <FaImages />
                      <span>Screenshots</span>
                    </button>
                  )}

                  {work.w_link && (
                    <a 
                      href={work.w_link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-btn code-btn"
                      title="View Source Code on GitHub"
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
                      title="View Live Web Demo"
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
        {filteredProjects.length > initialCount && (
          <div className="showmore-wrapper">
            <button 
              className="mywork-showmore-btn" 
              onClick={() => setShowAll(!showAll)}
              aria-label={showAll ? 'Show Fewer Projects' : 'Show All Projects'}
            >
              <span>{showAll ? 'Show Less' : `Explore All (${filteredProjects.length} Projects)`}</span>
              <img 
                src={arrow_icon} 
                alt="" 
                className={`showmore-arrow ${showAll ? 'expanded' : ''}`}
              />
            </button>
          </div>
        )}

        {/* Screenshot Modal for Mobile / Web Apps */}
        {selectedProject && (
          <div className="app-modal-overlay" onClick={closeModal}>
            <div className={`app-modal-card ${selectedProject.w_category === 'web' ? 'web-modal' : ''}`} onClick={(e) => e.stopPropagation()}>
              <button 
                className="app-modal-close" 
                onClick={closeModal}
                aria-label="Close preview"
              >
                <FaTimes />
              </button>

              <div className={`app-modal-content ${selectedProject.w_category === 'web' ? 'web-modal-layout' : ''}`}>
                {/* Image Showcase */}
                <div className="app-modal-visual">
                  <div className={`visual-screen-frame ${selectedProject.w_category === 'web' ? 'web-frame' : 'mobile-frame'}`}>
                    <img 
                      src={selectedProject.w_screenshots[activeImageIndex]} 
                      alt={`${selectedProject.w_name} screenshot ${activeImageIndex + 1}`}
                      className="visual-screen-img"
                    />

                    {selectedProject.w_screenshots.length > 1 && (
                      <>
                        <button 
                          className="screen-nav-btn prev-btn" 
                          onClick={handlePrevImage}
                          aria-label="Previous screenshot"
                        >
                          <FaChevronLeft />
                        </button>
                        <button 
                          className="screen-nav-btn next-btn" 
                          onClick={handleNextImage}
                          aria-label="Next screenshot"
                        >
                          <FaChevronRight />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Thumbnail strip */}
                  {selectedProject.w_screenshots.length > 1 && (
                    <div className="modal-thumbnails">
                      {selectedProject.w_screenshots.map((thumb, tIdx) => (
                        <button 
                          key={tIdx} 
                          className={`thumb-btn ${selectedProject.w_category === 'web' ? 'web-thumb' : ''} ${tIdx === activeImageIndex ? 'active' : ''}`}
                          onClick={() => setActiveImageIndex(tIdx)}
                        >
                          <img src={thumb} alt="" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Details side */}
                <div className="app-modal-info">
                  <div className="modal-badge-row">
                    <span className="modal-category-badge">
                      {selectedProject.w_category === 'android' ? (
                        <><FaAndroid /> Android App</>
                      ) : (
                        <><FaGlobe /> Web App</>
                      )}
                    </span>
                    <span className="screen-counter">
                      {activeImageIndex + 1} of {selectedProject.w_screenshots.length}
                    </span>
                  </div>

                  <h2 className="modal-title">{selectedProject.w_name}</h2>
                  <p className="modal-desc">{selectedProject.w_desc}</p>

                  {/* Tech tags */}
                  <div className="modal-tags">
                    {selectedProject.w_tags?.map((tag, i) => (
                      <span key={i} className="modal-tag-pill">{tag}</span>
                    ))}
                  </div>

                  {/* Key Highlights */}
                  {selectedProject.w_highlights && (
                    <div className="modal-highlights">
                      <h4>Core Architectural Features:</h4>
                      <ul>
                        {selectedProject.w_highlights.map((h, i) => (
                          <li key={i}>
                            <FaCheckCircle className="check-icon" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Modal Action CTA */}
                  <div className="modal-actions-bar">
                    {selectedProject.w_apk && (
                      <a 
                        href={selectedProject.w_apk} 
                        download="PulseChat.zip"
                        className="modal-action-btn download-btn"
                      >
                        <FaDownload />
                        <span>Download App (.zip / APK)</span>
                      </a>
                    )}

                    {selectedProject.w_link && (
                      <a 
                        href={selectedProject.w_link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-action-btn github-btn"
                      >
                        <FaGithub />
                        <span>View Repository</span>
                      </a>
                    )}

                    {selectedProject.w_live && (
                      <a 
                        href={selectedProject.w_live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="modal-action-btn live-btn"
                      >
                        <FaExternalLinkAlt />
                        <span>Launch App</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWork;