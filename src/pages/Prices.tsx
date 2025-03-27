import { useState } from 'react';
import '../styles/prices.css'; // Import your custom CSS for the price page
import logo from '../assets/logo.jpeg'
import dynamicVueLogo  from '../assets/dynamicVue.png'

const Prices = () => {
  // State to handle opening and closing of dropdowns for each business
  const [business1Dropdown, setBusiness1Dropdown] = useState(false);
  const [business2Dropdown, setBusiness2Dropdown] = useState(false);
  const [additionalBabies, setAdditionalBabies] = useState(0)

  // Toggle function for business 1 dropdown
  const toggleBusiness1Dropdown = () => setBusiness1Dropdown(!business1Dropdown);
  const toggleBusiness2Dropdown = () => setBusiness2Dropdown(!business2Dropdown);
  
  const calculatePrice = (basePrice, additionalPricePerBaby) => {
    return basePrice + additionalBabies * additionalBabies; 
  }

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
        <div className='business-banner'>
          <img src={logo} alt="Business 1 Logo" className='business-logo'/>
            </div>
          <h2>Ultrasound Services</h2>
          <button onClick={toggleBusiness1Dropdown} aria-expanded={business1Dropdown ? 'true': 'false' } aria-controls="business2-dropdown" className="dropdown-toggle">
            {business1Dropdown ? 'Hide Services' : 'Show Services'}
          </button>
        </div>
        {business1Dropdown && (
          <div className="price-list">
            {/* Confirm the Pregnancy */}
            <div id='business1-dropdown' className="price-item">
              <h3>Confirm the Pregnancy</h3>
              <p className="price">$60 / each additional baby $20</p>
              <p><strong>Timing:</strong> 6-14 weeks, 15 minutes</p>
              <p><strong>What We Offer:</strong> Confirm pregnancy, view baby heartbeat, discover baby size, and provide due date estimate.</p>
              <p><strong>Optional Blood Test:</strong> Add a blood test for $129 (2-3 day results) or $149 (next day results).</p>
            </div>

            {/* BIG DEAL GENDER REVEAL */}
            <div className="price-item">
              <h3>BIG DEAL GENDER REVEAL</h3>
              <p className="price">$110 / each additional fetus $20</p>
              <p><strong>Timing:</strong> 15-39 weeks, 10-minute scan</p>
              <p><strong>What We Offer:</strong> Find out your baby’s gender!</p>
              <p>We also offer add-on services such as:</p>
              <ul className="additional-services">
                <li>Heartbeat stuffed animal</li>
              </ul>
            </div>

            {/* Let's Take a Peek */}
            <div className="price-item">
              <h3>Let's Take a Peek</h3>
              <p className="price">$160.00</p>
              <p><strong>Timing:</strong> 14 weeks and beyond, 30 minutes</p>
              <p><strong>What We Offer:</strong></p>
              <ul className="additional-services">
                <li>Confirm baby’s gender</li>
                <li>Listen to the heartbeat and allow recording</li>  
                <li>Includes printouts</li>
              </ul>
              <p><strong>Additional Baby:</strong> $30 each</p>
            </div>

            {/* Wrap it up in a Package */}
            <div className="price-item">
              <h3>Wrap It Up in a Package!</h3>
              <p className="price">$399.00</p>
              <p><strong>What’s Included:</strong></p>
              <ul className="additional-services">
                <li>1st trimester scan (6-13 weeks)</li>
                <li>18-32 week scan (Gender if available)</li>
                <li>Late trimester scan (32-38 weeks)</li>
                <li>Momma swag bag</li>
              </ul>
              <p><strong>Additional Baby:</strong> $25 each</p>
              <p><strong>What We Offer:</strong></p>
              <ul className="additional-services">
                <li>Recording of the heartbeat</li>
                <li>Unlimited printouts</li>
              </ul>
            </div>

            {/* Last Look */}
            <div className="price-item">
              <h3>Last Look!</h3>
              <p className="price">Pricing upon request</p>
              <p><strong>Timing:</strong> 38 weeks and beyond (no rescans offered)</p>
              <p><strong>What We Offer:</strong> A final look at your baby’s position, heartbeat, and an attempt at 3D/4D images.</p>
            </div>
          </div>
        )}
      </section>
      
      <section className='business-section'>
        <div className='business-header'>
        <div className='business-banner'>
          <img src={dynamicVueLogo} alt="Business 1 Logo" className='business-logo'/>
            </div>
          <h2>Dynamic VUE Imaging</h2>
          <button
            onClick={toggleBusiness2Dropdown}
            aria-expanded={business2Dropdown ? 'true' : 'false'}
            aria-controls='business2-dropdown'
            className='dropdown-toggle'>
            {business2Dropdown ? 'Hide Services' : 'Show Services'}
          </button>
        </div>
        {business2Dropdown && (
          <div id='business2-dropdown' className='service-list'>
              <ul className="services-list">
            <li>
              <strong>Abdomen Complete</strong> - $130
              <p>Comprehensive ultrasound for the abdomen area.</p>
            </li>
            <li>
              <strong>Liver Ultrasound</strong> - $125
              <p>Ultrasound scan to examine the liver and surrounding organs.</p>
            </li>
            <li>
              <strong>Gallbladder Ultrasound</strong> - $125
              <p>Ultrasound to examine the gallbladder and detect any abnormalities.</p>
            </li>
            <li>
              <strong>Kidney Ultrasound</strong> - $125
              <p>Scan to evaluate the kidneys for any issues like stones or cysts.</p>
            </li>
            <li>
              <strong>Pelvic Ultrasound</strong> - $125
              <p>Scan to examine the pelvic organs, including the uterus and ovaries.</p>
            </li>
            <li>
              <strong>Trans-vaginal Ultrasound</strong> - $125
              <p>Internal ultrasound to provide detailed images of the pelvic organs.</p>
            </li>
            <li>
              <strong>Thyroid Ultrasound</strong> - $125
              <p>Ultrasound to check for abnormalities in the thyroid gland.</p>
            </li>
            <li>
              <strong>Scrotum Ultrasound</strong> - $125
              <p>Ultrasound to evaluate the scrotum and detect any conditions affecting the testes.</p>
            </li>
            <li>
              <strong>Unilateral Breast Ultrasound</strong> - $125
              <p>Ultrasound to examine one breast for possible abnormalities.</p>
            </li>
            <li>
              <strong>Bilateral Ultrasound</strong> - $125
              <p>Ultrasound to examine both breasts for potential issues.</p>
            </li>
            <li>
              <strong>Pelvic and Trans-vaginal (2 Exams) Ultrasound</strong> - $160
              <p>Combined ultrasound of the pelvic organs and trans-vaginal imaging for a more detailed exam.</p>
            </li>
            <li>
              <strong>Obstetrical 1st Trimester (less than 12 weeks) Ultrasound</strong> - $125
              <p>Ultrasound to monitor pregnancy progress in the first trimester.</p>
            </li>
            <li>
              <strong>Obstetrical 2nd Trimester (13 weeks or more) Ultrasound</strong> - $150
              <p>Ultrasound to monitor pregnancy development in the second trimester.</p>
            </li>
            <li>
              <strong>Obstetrical 2nd Trimester Multi-gestation Ultrasound</strong> - $180
              <p>Ultrasound for expecting mothers carrying multiple babies in the second trimester.</p>
            </li>
            <li>
              <strong>Biophysical Profile Ultrasound</strong> - $75
              <p>Comprehensive ultrasound to evaluate the health of the baby and measure vital signs.</p>
            </li>
          </ul>
          </div>
        )}
      </section>

      {/* Call to Action */}
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
