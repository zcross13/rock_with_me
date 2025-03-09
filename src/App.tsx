import Navbar from "./components/Navbar";
import About from "./pages/About-me";
import Calendar from "./pages/Calendar";
import FAQ from "./pages/FAQ";
import Home from "./pages/home";
import Prices from "./pages/Prices";
import Reviews from "./pages/Reviews";
import Schedule from "./pages/Schedule-Appointment";
import ThreeDUltrasound from "./pages/ThreeDUltrasound";
import FourDUltrasound from "./pages/FourDUltrasound";

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/schedule-appointment":
      component = <Schedule/>
      break
    case "/prices":
      component = <Prices/>
      break
    case "/3d-ultrasound":
      component = <ThreeDUltrasound/>
      break
    case "/4d-ultrasound":
      component = <FourDUltrasound/>
      break
    case "/reviews":
      component = <Reviews/>
      break
    case "/calendar":
      component = <Calendar/>
      break
    case "/about-us":
      component = <About/>
      break
    case "/faq":
      component = <FAQ/>
      break
  }
  return (
    <>
      <Navbar />
      <div className="container"> {component}</div>
    </>
  )
}

export default App;