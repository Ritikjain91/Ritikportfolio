import React, { useState, useEffect } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import Services_data from '../../assets/services_data';
import arrow_icon from '../../assets/arrow_icon.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { 
  FaLaptopCode, 
  FaDatabase, 
  FaTimes, 
  FaCheckCircle,
  FaAndroid,
  FaBolt,
  FaRocket,
  FaLayerGroup
} from 'react-icons/fa';

const serviceIcons = [
  <FaAndroid />,
  <FaLaptopCode />,
  <FaDatabase />,
  <FaBolt />,
  <FaLayerGroup />,
  <FaRocket />
];

const serviceDetails = [
  {
    deliverables: [
      "Native Kotlin & Jetpack Compose apps with Material Design 3",
      "Cross-platform mobile apps with React Native & Expo",
      "Fluid 60+ FPS navigation, micro-interactions, and animations",
      "Adaptive layouts for all Android phone screens & tablets"
    ]
  },
  {
    deliverables: [
      "End-to-end MERN (MongoDB, Express, React, Node) applications",
      "RESTful API design, token-based authentication (JWT/OAuth)",
      "High Lighthouse scores & Core Web Vitals optimization",
      "Cross-browser testing, SEO schema & responsive design"
    ]
  },
  {
    deliverables: [
      "Clean Architecture with MVVM / MVI and unidirectional data flow",
      "Offline-first local caching using Room Database & SQLite",
      "Reactive state handling with Kotlin Coroutines & StateFlow",
      "DataStore Preferences and secure local storage"
    ]
  },
  {
    deliverables: [
      "Instant real-time messaging with Socket.io & WebSockets",
      "Firebase Cloud Messaging (FCM) for background push notifications",
      "RESTful endpoint integration with Retrofit, OkHttp, or Axios",
      "Third-party SDK integrations (Payment, Maps, Analytics)"
    ]
  },
  {
    deliverables: [
      "Android Studio memory profiling & LeakCanary leak resolution",
      "R8 / ProGuard rules and APK bundle size minimization",
      "Battery drain and background thread optimization via WorkManager",
      "Frame rate stability and layout rendering benchmarking"
    ]
  },
  {
    deliverables: [
      "Google Play Console compliance, policy check & store listing",
      "Android App Bundle (.aab) generation & cryptographic signing",
      "EAS & Gradle automated build and release workflows",
      "Version migration, crash monitoring, and continuous updates"
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedService) {
        setSelectedService(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedService]);

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
