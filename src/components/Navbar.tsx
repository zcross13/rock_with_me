import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import '../styles/navbar.css';
import clearLogo from "../assets/clearLogo.png"

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false); // State to control open/close of menu

  // Toggle function for hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="navbar">
        <div className="logo">
        <NavLink to="/" aria-label="Home - Rock With Me In 4D">
          <img src={clearLogo} alt="Rock With Me in 4D Logo" className='logo-img'/>
        </NavLink>
        </div>


      {/* Hamburger Menu */}
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/about-us" aria-label="About me Page" onClick={() => setIsOpen(false)} className="active-link">About Me</NavLink></li>
        <li><NavLink to="/services" aria-label="Dynamic Vue" onClick={() => setIsOpen(false)} className="active-link">Dyanmic Vue Imaging</NavLink></li>
        <li><NavLink to="/gallery" aria-label="Gallery Page" onClick={() => setIsOpen(false)} className="active-link">Gallery</NavLink></li>
        <li><NavLink to="/contact" aria-label="Contact Page"  onClick={() => setIsOpen(false)} className="active-link">Contact</NavLink></li>
        <li><NavLink to="/faq" aria-label="FAQ Page" onClick={() => setIsOpen(false)} className="active-link">FAQ</NavLink></li>
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
