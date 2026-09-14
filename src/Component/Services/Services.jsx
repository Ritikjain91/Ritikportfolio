import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { 
  FaLaptopCode, 
  FaLayerGroup, 
  FaSearchDollar, 
  FaTools, 
  FaDatabase, 
  FaMobileAlt, 
  FaTimes, 
  FaCheckCircle 
} from 'react-icons/fa';

const serviceIcons = [
  <FaLaptopCode />,
  <FaLayerGroup />,
  <FaSearchDollar />,
  <FaTools />,
  <FaDatabase />,
  <FaMobileAlt />
];

const serviceDetails = [
  {
    deliverables: [
      "Custom responsive web applications with modern React",
      "Interactive UI with clean component architectures",
      "Performance optimization & Lighthouse 90+ scores",
      "Cross-browser compatibility and accessible design"
    ]
  },
  {
    deliverables: [
      "End-to-end MERN (MongoDB, Express, React, Node) stacks",
      "RESTful and GraphQL API design & integration",
      "Secure user authentication (JWT, OAuth, bcrypt)",
      "Production deployment and containerization"
    ]
  },
  {
    deliverables: [
      "Semantic HTML5 structure & Core Web Vitals optimization",
      "Meta tags, OpenGraph, JSON-LD structured schema",
      "Fast page load speed & asset compression",
      "Search engine indexability and sitemap generation"
    ]
  },
  {
    deliverables: [
      "Regular dependency upgrades & security patches",
      "Bug fixes, performance profiling, and monitoring",
      "Database backups and continuous integration workflows",
      "Feature enhancements and redesign rollouts"
    ]
  },
  {
    deliverables: [
      "Relational schema modeling (PostgreSQL, MySQL)",
      "NoSQL document database architecture (MongoDB)",
      "Query optimization, indexing & latency reduction",
      "Data migrations, sanitization & backup protocols"
    ]
  },
  {
    deliverables: [
      "Cross-platform or native Android mobile solutions",
      "Responsive mobile-first layouts and offline storage",
      "Push notifications & external API integrations",
      "Play Store compliance & release readiness"
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const openServiceModal = (index) => {
    setSelectedService({
      ...Services_data[index],
      ...serviceDetails[index],
      icon: serviceIcons[index]
    });
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  return (
    <section id='services' className='services-section'>
      <div className="services-container container">
        {/* Title */}
        <div className="section-title">
          <h1>My Services</h1>
          <img src={theme_pattern} alt="" />
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {Services_data.map((service, index) => {
            return (
              <div 
                key={index} 
                className='service-card'
                onClick={() => openServiceModal(index)}
              >
                <div className="service-card-top">
                  <span className="service-number">{service.s_no}</span>
                  <div className="service-icon-wrapper">
                    {serviceIcons[index] || <FaLaptopCode />}
                  </div>
                </div>

                <h2 className="service-title">{service.s_name}</h2>
                <p className="service-desc">{service.s_desc}</p>

                <div className="service-readmore">
                  <span>Explore Details</span>
                  <img src={arrow_icon} alt="" className="readmore-arrow" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
          <div className="service-modal-overlay" onClick={closeServiceModal}>
            <div className="service-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="service-modal-close" 
                onClick={closeServiceModal}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <div className="service-modal-header">
                <div className="service-modal-icon">
                  {selectedService.icon}
                </div>
                <div>
                  <span className="service-modal-number">Service {selectedService.s_no}</span>
                  <h3 className="service-modal-title">{selectedService.s_name}</h3>
                </div>
              </div>

              <p className="service-modal-desc">{selectedService.s_desc}</p>

              <div className="service-modal-deliverables">
                <h4>What's Included:</h4>
                <ul>
                  {selectedService.deliverables?.map((item, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="service-modal-action">
                <AnchorLink 
                  href="#contact" 
                  offset={80} 
                  className="service-modal-cta"
                  onClick={closeServiceModal}
                >
                  Discuss This Service
                </AnchorLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
