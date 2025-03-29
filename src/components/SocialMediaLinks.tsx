import "../styles/socialMediaLinks.css"
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://www.facebook.com/ROCKWITHMEIN4D?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.instagram.com/rockwithmein4d/?igsh=MXVteGk5NHV4YjVnbA%3D%3D&utm_source=qr#"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon"
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaLinks;
