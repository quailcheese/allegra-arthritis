import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);

    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handlePatientPortalClick = () => {
    // Replace this URL with the actual patient portal URL
    window.open('https://portal.eyereachpatients.com/Patients/allegraarthritisassociates/Account/LogOn?ReturnUrl=%2fPatients%2fallegraarthritisassociates', '_blank');
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* Brand/Logo */}
          <div className="navbar-brand">
            <h1 onClick={scrollToTop}>Allegra Arthritis Associates</h1>
          </div>

          {/* Desktop Navigation Links - Only show on desktop */}
          {!isMobile && (
            <div className="navbar-nav">
              <button 
                className="nav-link"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('our-team')}
              >
                Our Team
              </button>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('locations')}
              >
                Locations
              </button>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('patient-forms')}
              >
                Patient Forms & Resources
              </button>
            </div>
          )}

          {/* Patient Portal Button - Only show on desktop */}
          {!isMobile && (
            <div className="navbar-actions">
              <button 
                className="patient-portal-btn"
                onClick={handlePatientPortalClick}
              >
                Patient Portal Login
              </button>
            </div>
          )}

          {/* Mobile Menu Toggle - Only show on mobile */}
          {isMobile && (
            <button 
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          )}
        </div>
      </nav>

      {/* Mobile Navigation Menu - Outside navbar for better positioning */}
      {isMobile && (
        <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollToSection('about')}
          >
            About
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollToSection('our-team')}
          >
            Our Team
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollToSection('locations')}
          >
            Locations
          </button>
          <button 
            className="mobile-nav-link"
            onClick={() => scrollToSection('patient-forms')}
          >
            Patient Forms & Resources
          </button>
          <button 
            className="mobile-patient-portal-btn"
            onClick={handlePatientPortalClick}
          >
            Patient Portal Login
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar; 