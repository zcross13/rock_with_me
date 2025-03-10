import SocialMediaLinks from "./SocialMediaLinks";

const Header = () => {

  const handleButtonClick = () => {
    window.location.href = "https://app.acuityscheduling.com/schedule/057387c0"
  }
  return (
    <>
    <header className="header">
      {/*Hero Section*/}
      <div className="hero">
        <img />
        <div className="hero-content">
          <h1>Experence Cutting Edge 3D Ultrasound</h1>
          <p>Booking a 3D/4D ultrasound is an exiciting step in your pregnancy journey, offering a uniquie opportunity to see your baby in remarkable details. Unlike traditional 2D ultrasounds, 3D ultrasounds provide status three-dimensoal images, while n4d ultrasounds add the element of motion,a llowing you to watch your baby move in real-time. These ultrasounds can help creqate a stronger bond with your unborn child and offer a memorable keepsake for your family.</p>
            <div className="cta-buttons-container">
              <button
              className="cta-button">
                Call: 832-631-6696
              </button>
              <p className="or-text"> OR </p>
              <button
              onClick={handleButtonClick}
                className="cta-button">
                Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </header>

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
  </>
  )
}

export default Header; 