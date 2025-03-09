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
import {Route,  Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container"> 
        <Routes>
          <Route path="/" element={<Home/> } />
          <Route path="/schedule" element={<Schedule/> } />
          <Route path="/prices" element={<Prices/>} />
          <Route path="/3d-ultrasound" element={<ThreeDUltrasound />} />
          <Route path="/4d-ultrasound" element={<FourDUltrasound />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/calendar" element={<Calendar/>}/>
          <Route path="/about-us" element={<About/>}/>
          <Route path="/faq" element={<FAQ/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;