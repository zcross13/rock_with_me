import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State to control open/close of menu

  // Toggle function for hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="navbar">
      {/* Container for both logos */}
      <div className="logo-container">
        {/* First Business Logo */}
        <div className="logo logo-business1">
          <Link to="/" aria-label="Home - Rock With Me In 4D">Rock With Me In 4D</Link>
        </div>

        {/* Second Business Logo */}
        <div className="logo logo-business2">
          <Link to="/" aria-label="Home - Dynamic Vue Imaging">Dyanmic Vue Imaging</Link>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><Link to="/about-us" aria-label="About me Page" onClick={() => setIsOpen(false)}>About Me</Link></li>
        <li><Link to="/services" aria-label="Services Page" onClick={() => setIsOpen(false)}>Services</Link></li>
        <li><Link to="/gallery" aria-label="Gallery Page" onClick={() => setIsOpen(false)}>Gallery</Link></li>
        <li><Link to="/contact" aria-label="Contact Page"  onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li><Link to="/faq" aria-label="FAQ Page" onClick={() => setIsOpen(false)}>FAQ</Link></li>
        <li>
        <button
          className="cta-button"
          onClick={() =>
            (window.location.href =
              'https://app.acuityscheduling.com/schedule/057387c0')
          }
        > Book Now </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
