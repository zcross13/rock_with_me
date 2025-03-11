import SocialMediaLinks from "./SocialMediaLinks";
import "../styles/footer.css";

const Footer = () => {
    return (
        
    <section className="connect">
    <div className="connect-content">
        <h2>Connect With Me</h2>
        <p>We're here to help! Reach out to us through any off the methods below:</p>
        {/* Contact Infor */}
        <div className="contact-info">
          <div className="contact-item">
            <h3>Phone</h3>
            <p>832-631-6696</p>
          </div>
          <div className="contact-item">
            <h3>Email</h3>
            <p>info@example.com</p>
          </div>
        </div>
        <SocialMediaLinks />
        {/* Inquiry Form */}
        <div className="inquiry-form">
          <h3> Send Us a Message</h3>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit" className="cta-button">Submit</button>
          </form>
        </div>
    </div>
  </section>
    )
}

export default Footer; 