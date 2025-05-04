import SocialMediaLinks from './SocialMediaLinks';
import '../styles/footer.css';
import logo from '../assets/clearLogo.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-branding footer-column">
        <div className="social-media-link">
          <SocialMediaLinks />
        </div>
        <img src={logo} alt="Rock With Me in 4D Logo" className="logo-img" />
      </div>

      <div className="footer-column footer-description">
        <h2>Rock With Me in 4D</h2>
        <p>
          Experience cutting-edge 3D and 4D ultrasound imaging to see your baby in remarkable detail.
          Book a session and create lasting memories with a detailed view of your baby in motion.
        </p>
        <button className="booking-btn">Book an Appointment</button>
      </div>

      <div className="footer-column footer-links">
        <h3>Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about-us">About Me</a></li>
          <li><a href="/services">Dynamic Vue</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/terms">Terms & Conditions</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Rock With Me in 4D. All rights reserved.
          Website designed with love by ZaeCodes.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
