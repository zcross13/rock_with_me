import About from './pages/About-me';
// import Calendar from "./pages/Calendar";
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import Prices from './pages/Prices';
// import Schedule from "./pages/Schedule-Appointment";
// import ThreeDUltrasound from "./pages/ThreeDUltrasound";
// import FourDUltrasound from "./pages/FourDUltrasound";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/Non-Existent';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Prices />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
