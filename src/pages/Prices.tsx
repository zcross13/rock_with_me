import { useState } from 'react';
import '../styles/prices.css'; // Import your custom CSS for the price page

const Prices = () => {
  // State to handle opening and closing of dropdowns
  const [business1Dropdown, setBusiness1Dropdown] = useState(false);
  const [business2Dropdown, setBusiness2Dropdown] = useState(false);

  // Toggle functions for dropdowns
  const toggleBusiness1Dropdown = () => setBusiness1Dropdown(!business1Dropdown);
  const toggleBusiness2Dropdown = () => setBusiness2Dropdown(!business2Dropdown);

  return (
    <div className="prices-page">
      <header className="prices-header">
        <h1>Our Pricing</h1>
        <p>
          Explore our affordable ultrasound packages and find the perfect option
          for you and your family!
        </p>
      </header>

      {/* Pricing for Business 1 */}
      <section className="business-section">
        <div className="business-header">
          <h2>Business 1 - Ultrasound Services</h2>
          <button onClick={toggleBusiness1Dropdown} className="dropdown-toggle">
            {business1Dropdown ? 'Hide Services' : 'Show Services'}
          </button>
        </div>
        {business1Dropdown && (
          <div className="price-list">
            {/* 3D Ultrasound */}
            <div className="price-item">
              <h2>3D Ultrasound</h2>
              <p className="price">$150</p>
              <p>Capture high-quality 3D images of your baby in the womb.</p>
            </div>

            {/* 4D Ultrasound */}
            <div className="price-item">
              <h2>4D Ultrasound</h2>
              <p className="price">$200</p>
              <p>Experience the joy of seeing your baby in motion with a 4D ultrasound.</p>
            </div>

            {/* Additional services */}
          </div>
        )}
      </section>

      {/* Pricing for Business 2 */}
      <section className="business-section">
        <div className="business-header">
          <h2>Business 2 - Medical Services</h2>
          <button onClick={toggleBusiness2Dropdown} className="dropdown-toggle">
            {business2Dropdown ? 'Hide Services' : 'Show Services'}
          </button>
        </div>
        {business2Dropdown && (
          <div className="price-list">
            {/* Abdomen Complete */}
            <div className="price-item">
              <h2>Abdomen Complete</h2>
              <p className="price">$130</p>
              <p>Comprehensive ultrasound for the abdomen area.</p>
            </div>

            {/* Liver Ultrasound */}
            <div className="price-item">
              <h2>Liver Ultrasound</h2>
              <p className="price">$125</p>
              <p>Ultrasound scan for liver examination.</p>
            </div>

            {/* Additional services */}
          </div>
        )}
      </section>

      <section className="cta-container">
        <button
          className="cta-button"
          onClick={() =>
            (window.location.href =
              'https://app.acuityscheduling.com/schedule/057387c0')
          }
        >
          Book an Appointment
        </button>
      </section>
    </div>
  );
};

export default Prices;
