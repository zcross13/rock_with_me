// import clock
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

// clock css
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

//import image 
import logo from "../src/assets/logo.jpeg"

//import css
import './style.css';

//import icons 
import { FaFacebook, FaInstagram } from 'react-icons/fa';



function App() {

  const handleButtonClick = () => {
    window.location.href = "https://app.acuityscheduling.com/schedule/057387c0";
  }

  return (
    <>
      <section className='page'>
        {/* {overlay} */}
        <div className="overlay"></div>
        {/* {image} */}
        <img src={logo}></img>
        {/* {content} */}
        <div className='page_content'>
          <h1>We are coming soon!!!</h1>
          <h3>Stay turned for something amazing</h3>
          {/* {clock} */}
          <FlipClockCountdown to={new Date().getTime() + 768 * 3600 * 1000 + 5000} className='flip-clock' />
          <h1>Want to connect!</h1>
          <div>
            <a
              href="https://www.facebook.com/ROCKWITHMEIN4D?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Facebook'>
              <FaFacebook/>
            </a>
            <a
              href="https://www.instagram.com/rockwithmein4d/?igsh=MXVteGk5NHV4YjVnbA%3D%3D&utm_source=qr#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label='Instagram'>
              <FaInstagram/>
            </a>
          </div>
          <button onClick={handleButtonClick} className='btn' >Book An Appointment</button>
        </div>
      </section>
    </>
  )
}

export default App
