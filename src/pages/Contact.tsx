import SocialMediaLinks from "../components/SocialMediaLinks";
import "../styles/contact.css"

function Contact() {
  return (
    <section className="contact-container">
      <h1>Let's connect</h1>
      <p className="contact-message">We’re here to make your experience special. If you have any questions or need more details, don’t hesitate to contact us!</p>
      <div className="contact-details">
        <p><strong>Email:</strong> deann@dynamicvueimaging.com</p>
        <p><strong>Phone:</strong> 832-631-6696</p>
        <p><strong>Follow Us:</strong></p>
        <div>
          <SocialMediaLinks />
        </div>
      </div>
    </section>
  );
}

export default Contact;


