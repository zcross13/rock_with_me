import '../styles/home.css';


const Home = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://app.acuityscheduling.com/schedule/057387c0';
  };

  return (
    <header className="header">
      {/* Hero Section with Background Image */}
      <div className="hero" >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Experience Cutting-Edge 3D Ultrasound</h1>
            <p>
              Booking a 3D/4D ultrasound is an exciting step in your pregnancy journey,
              offering a unique opportunity to see your baby in remarkable detail. Unlike
              traditional 2D ultrasounds, 3D ultrasounds provide stunning three-dimensional
              images, while 4D ultrasounds add the element of motion, allowing you to watch
              your baby move in real-time. These ultrasounds create a stronger bond with your
              unborn child and offer a memorable keepsake for your family.
            </p>
            <p>You’re just an appointment away from an unforgettable moment!</p>

            {/* Call-to-Action Buttons */}
            <div className="cta-buttons-container">
              <button className="cta-button">Call: 832-631-6696</button>
              <p className="or-text"> OR </p>
              <button onClick={handleButtonClick} className="cta-button">
                Book an Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;

