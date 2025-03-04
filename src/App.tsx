// import clock
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

// clock css
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

//import image 
import logo from "../src/assets/logo.jpeg"

//import css
import './style.css';


function App() {

  return (
    <>
      <section className='page'>
        {/* {overlay} */}
        <div className="overlay"></div>
        {/* {image} */}
        <img src={logo}></img>
        {/* {content} */}
        <div className='page_content'>
          <h1>Launchig Soon</h1>
          <h3>Leave your email and we'll let you know once the  site goes live.</h3>
          {/* {clock} */}
          <FlipClockCountdown to={new Date().getTime() + 24 * 3600 * 1000 + 5000} className='flip-clock' />
          <button className='btn'>Book An Appointment</button>
        </div>
      </section>
    </>
  )
}

export default App
