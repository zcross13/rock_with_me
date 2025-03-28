import '../styles/home.css';
import rockWMLogo from "../assets/logo.jpeg";
import dynamicVLogo from "../assets/dynamicVue.png";

const Home = () => {
  return (
    <section className="business-overview">
      {/* Business 1 */}
      <div className="business-block">
        <div className="business-logo-box">
          <img
            src={rockWMLogo} // Business 1 logo image
            alt="Business 1 Logo"
            className="business-logo"
          />
        </div>
        <div className="business-description-box">
          <h2>Rock With Me in 4D</h2>
          <p>
            Our general ultrasound services offer high-quality, non-invasive imaging to assist in your healthcare needs. 
            Whether it’s for monitoring pregnancy or diagnosing other conditions, we offer reliable results with a personal touch.
          </p>
        </div>
      </div>

      {/* Business 2 */}
      <div className="business-block reverse">
        <div className="business-description-box">
          <h2>Dynamic Vue Imaging</h2>
          <p>
            Experience cutting-edge 3D and 4D ultrasound imaging to see your baby in remarkable detail. Book a session with us 
            and create lasting memories with a detailed view of your baby in motion.
          </p>
        </div>
        <div className="business-logo-box">
          <img
            src={dynamicVLogo} // Business 2 logo image
            alt="Business 2 Logo"
            className="business-logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
