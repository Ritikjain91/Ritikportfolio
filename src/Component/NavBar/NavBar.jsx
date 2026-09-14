import React, { useState, useEffect } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';

function NavBar() {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavClick = (section) => {
    setMenu(section);
    closeMenu();
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container container">
        <AnchorLink href="#home" className="logo-link" onClick={() => handleNavClick("home")}>
          <img src={logo} alt="Ritik Jain Logo" className="nav-logo" />
        </AnchorLink>

        {/* Mobile menu trigger */}
        <button 
          className="nav-mob-open" 
          onClick={openMenu} 
          aria-label="Open Navigation Menu"
        >
          <img src={menu_open} alt="" />
        </button>

        {/* Backdrop for mobile */}
        <div 
          className={`nav-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={closeMenu}
          aria-hidden={!isMenuOpen}
        />

        {/* Navigation Links */}
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-mob-header">
            <img src={logo} alt="Logo" className="nav-mob-logo" />
            <button 
              className="nav-mob-close" 
              onClick={closeMenu} 
              aria-label="Close Navigation Menu"
            >
              <img src={menu_close} alt="" />
            </button>
          </div>

          <ul className="nav-links">
            <li className={menu === "home" ? "active" : ""}>
              <AnchorLink 
                href="#home" 
                className="anchor-link" 
                onClick={() => handleNavClick("home")}
              >
                <span>Home</span>
                {menu === "home" && <img src={underline} alt="" className="nav-underline" />}
              </AnchorLink>
            </li>

            <li className={menu === "about" ? "active" : ""}>
              <AnchorLink 
                href="#about" 
                offset={80} 
                className="anchor-link" 
                onClick={() => handleNavClick("about")}
              >
                <span>About Me</span>
                {menu === "about" && <img src={underline} alt="" className="nav-underline" />}
              </AnchorLink>
            </li>

            <li className={menu === "services" ? "active" : ""}>
              <AnchorLink 
                href="#services" 
                offset={80} 
                className="anchor-link" 
                onClick={() => handleNavClick("services")}
              >
                <span>Services</span>
                {menu === "services" && <img src={underline} alt="" className="nav-underline" />}
              </AnchorLink>
            </li>

            <li className={menu === "portfolio" ? "active" : ""}>
              <AnchorLink 
                href="#work" 
                offset={80} 
                className="anchor-link" 
                onClick={() => handleNavClick("portfolio")}
              >
                <span>Portfolio</span>
                {menu === "portfolio" && <img src={underline} alt="" className="nav-underline" />}
              </AnchorLink>
            </li>

            <li className={menu === "contact" ? "active" : ""}>
              <AnchorLink 
                href="#contact" 
                offset={80} 
                className="anchor-link" 
                onClick={() => handleNavClick("contact")}
              >
                <span>Contact</span>
                {menu === "contact" && <img src={underline} alt="" className="nav-underline" />}
              </AnchorLink>
            </li>
          </ul>

          <div className="nav-mob-footer">
            <AnchorLink 
              href="#contact" 
              offset={80} 
              className="nav-mob-connect-btn" 
              onClick={() => handleNavClick("contact")}
            >
              Connect with me
            </AnchorLink>
          </div>
        </nav>

        {/* Desktop CTA Button */}
        <div className="nav-connect-wrapper">
          <AnchorLink href="#contact" offset={80} className="nav-connect-btn">
            <span>Connect with me</span>
          </AnchorLink>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
