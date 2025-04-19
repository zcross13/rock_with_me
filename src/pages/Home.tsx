import '../styles/home.css';
import rockWMLogo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='homepage'>
      {/* Hero Section */}
      <section className="hero">
          <img
            src={rockWMLogo} // Business 1 logo image
            alt="Rock With me in 4D Logo"
            className="hero-logo"
          />
          <h1>See Your Baby Like Never Before</h1>
          <p>
            Experience cutting-edge 3D and 4D ultrasound imaging to see your baby in remarkable detail. Book a session with us 
            and create lasting memories with a detailed view of your baby in motion.
        </p>
      </section>
      
      {/*Feature Cards */}
      <section className='features-section'>
        <div className="features">
        <div className='feature-card'>
          <h3>HD Live Imaging</h3>
          <p>See your baby move in real time with stunning 4D clarity. Capture unforgettable details like yawns, smiles, and stretches.</p>
          </div>
        <div className='feature-card'>
          <h3>Gender Reveal &  Keepsakes</h3>
          <p>Celebrate the big moment in style — discover your baby's gender and take home heartbeat plushies, printed photos, and sweet videos.</p>
          </div>
        <div className='feature-card'>
          <h3>Memory Making Sessions</h3>
          <p>Turn your ultrasound session into a bonding experience with keepsake images and videos you’ll treasure forever.</p>
          </div>
        </div>

        {/*Link to Services Page */}
        <div className="view-all-services">
          <Link to="/services" className="cta-button">
          See Our Full Service List
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
