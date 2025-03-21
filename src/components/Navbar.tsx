import { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import logo from '../assets/logo.jpeg';
import '../styles/navbar.css';

// CustomLink Component with types
interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  children: React.ReactNode;
}

function CustomLink({ to, children }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control hamburger menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleButtonClick = () => {
    window.location.href = 'https://app.acuityscheduling.com/schedule/057387c0';
  };

  return (
    <nav className="nav">
      <Link to="/" className="site-logo">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <button
        className="hamburger"
        onClick={toggleMenu}
        aria-label="Toggle Navigation"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <CustomLink to="/about-us"> About Us</CustomLink>
        <CustomLink to="/prices"> Prices </CustomLink>
        <CustomLink to="/reviews"> Reviews</CustomLink>
        <CustomLink to="faq"> FAQs</CustomLink>
        <CustomLink to="/contact"> Contact Me</CustomLink>
        <button onClick={handleButtonClick} className="cta-button">
          Book an Appointment
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
