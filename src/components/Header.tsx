import Slider from "react-slick";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import "../styles/header.css"

const Header = () => {

  const handleButtonClick = () => {
    window.location.href = "https://app.acuityscheduling.com/schedule/057387c0"
  }

  // Carousel Settings

  const settings = {
    dots: true, //show dots for naviation
    infinite: true, // Infinite Scroll
    speed: 500, 
    slidesToShow: 1, //Show 1 slide at a time 
    slidesToScroll: 1, //Scroll 1 slide at a time 
    autoplay: true, //Enable autoplay
    autoplaySpeed: 3000, // Set the speed of autoplay
  }

  return (
    <header className="header">
      {/*Hero Section with Carousel*/}
        <div className="hero">
          <Slider {...settings}>
            <div className="hero-slide">
              <img src={img1} alt="Image 1" />
            </div>
            <div className="hero-slide">
              <img src={img2} alt="Image 2" />
            </div>
            <div className="hero-slide">
              <img src={img3} alt="Image 3" />
            </div>
            <div className="hero-slide">
              <img src={img4} alt="Image 4" />
            </div>
            <div className="hero-slide">
              <img src={img5} alt="Image 5" />
            </div>
          </Slider>
        <img />
        <div className="hero-content">
          <h1>Experence Cutting Edge 3D Ultrasound</h1>
          <p>Booking a 3D/4D ultrasound is an exiciting step in your pregnancy journey, offering a uniquie opportunity to see your baby in remarkable details. Unlike traditional 2D ultrasounds, 3D ultrasounds provide status three-dimensoal images, while n4d ultrasounds add the element of motion,a llowing you to watch your baby move in real-time. These ultrasounds can help creqate a stronger bond with your unborn child and offer a memorable keepsake for your family.</p>
          <p>You’re just an appointment away from an unforgettable moment!</p>
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
  )
}

export default Header; 