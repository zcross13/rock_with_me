import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
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

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/about-us" aria-label="About me Page">About</Link></li>
        <li><Link to="/services" aria-label="Services Page">Services</Link></li>
        <li><Link to="/gallery" aria-label="Gallery Page">Gallery</Link></li>
        <li><Link to="/contact" aria-label="Contact Page">Contact</Link></li>
        <li><Link to="/faq" aria-label="FAQ Page">FAQ</Link></li>
      </ul>

      <button
          className="cta-button"
          onClick={() =>
            (window.location.href =
              'https://app.acuityscheduling.com/schedule/057387c0')
          }
        > Book Now </button>
    </nav>
  );
};

export default Navbar;
