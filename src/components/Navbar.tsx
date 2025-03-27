import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Container for both logos */}
      <div className="logo-container">
        {/* First Business Logo */}
        <div className="logo logo-business1">
          <Link to="/">Rock With Me In 4D</Link>
        </div>

        {/* Second Business Logo */}
        <div className="logo logo-business2">
          <Link to="/">Dyanmic Vue Imaging</Link>
        </div>
      </div>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li><Link to="/about-us">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>

      {/* CTA Button */}
      <button className="cta-button">Book Appointment</button>
    </nav>
  );
};

export default Navbar;
