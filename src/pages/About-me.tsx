import '../styles/about.css'; // Make sure you create and link your CSS file
import SocialMediaLinks from '../components/SocialMediaLinks';
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact')
  }
  
  
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Me</h1>
        <p>
          Welcome to my Rock With Me in 4D! Here's a little bit about who I am.
        </p>
      </header>

      <section className="about-section">
        <h2>Who Am I?</h2>
        <p>
          Hi, my name is DeAnn Hill, but my family and friends call me Dee. I’ve
          been a Sonographer since 2007, specializing in a wide range of
          ultrasounds, from general imaging to high-risk OB (Maternal Fetal
          Medicine). With years of experience and a passion for what I do, my
          goal is to provide you and your family with a warm, memorable, and
          enjoyable experience. I’m dedicated to helping you create lasting
          memories as you get a special glimpse into your little one’s world.
        </p>
      </section>

      <section className="mission-section">
        <h2>My Mission</h2>
        <p>
        At Rock With Me in 4D, our mission is to create unforgettable moments by bringing families closer to their little miracles. Through the magic of 3D and 4D ultrasound technology, we provide a warm, welcoming environment where expecting parents can bond with their baby and cherish memories that last a lifetime. We are dedicated to delivering a joyful, personalized experience filled with love, laughter, and lasting impressions.
        </p>
      </section>

      {/* To be added later */}
      {/* <section className="story-section">
        <h2>How I Got Started</h2>
        <p>
          It all started when I [tell your story—why you got into this field,
          what motivated you, any important milestones].
        </p>
      </section> */}

      <section className="contact-section">
        <h2>Get in Touch</h2>
        <p>Have questions or want to book an appointment? Reach out to me!</p>
        <button onClick={handleContactClick } className="cta-button">Contact Me</button>
      </section>

      <section className="social-media-links">
        <SocialMediaLinks />
      </section>
    </div>
  );
};

export default About;
