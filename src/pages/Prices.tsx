import "../styles/prices.css"; // Import your custom CSS for the price page

const Prices = () => {
  return (
    <div className="prices-page">
      <header className="prices-header">
        <h1>Our Pricing</h1>
        <p>Explore our affordable ultrasound packages and find the perfect option for you and your family!</p>
      </header>

      <section className="price-list">
        {/* 3D Ultrasound */}
        <div className="price-item">
          <h2>3D Ultrasound</h2>
          <p className="price">$150</p>
          <p>Capture high-quality 3D images of your baby in the womb. Perfect for expecting parents looking to get a glimpse of their little one.</p>
        </div>

        {/* 4D Ultrasound */}
        <div className="price-item">
          <h2>4D Ultrasound</h2>
          <p className="price">$200</p>
          <p>Experience the joy of seeing your baby in motion with a 4D ultrasound. Watch them move, kick, and even yawn!</p>
        </div>

        {/* Additional Services */}
        <div className="price-item">
          <h2>Additional Services</h2>
          <ul className="additional-services">
            <li>Extra Prints: $25</li>
            <li>DVD Recording: $30</li>
            <li>Gender Reveal Package: $50</li>
            <li>Heartbeat Recording: $20</li>
            <li>Photo Album: $45</li>
            <li>Baby Footprints: $15</li>
            <li>Live Stream Option: $100</li>
            {/* Add more services here */}
          </ul>
        </div>
        <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
            </div>
        <div className="price-item">
          <h2>Liver</h2>
          <p className="price">$125</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Gallbladder</h2>
          <p className="price">$125</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Kidney</h2>
          <p className="price">$125</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Pelvic</h2>
          <p className="price">$125</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Trans-Vaginal</h2>
          <p className="price">$125</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Abdomen Complete</h2>
          <p className="price">$130</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Obesterical 2nd trimester Multigestation</h2>
          <p className="price">$180</p>
          <p>Description for additional service 2...</p>
              </div>
              <div className="price-item">
          <h2>Biophsyical Profile</h2>
          <p className="price">$75</p>
        </div>
      </section>

      <section className="cta-container">
        <button className="cta-button" onClick={() => window.location.href = "https://app.acuityscheduling.com/schedule/057387c0"}>
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

export default Prices;
