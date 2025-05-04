import "./styles/global.css"
import About from './pages/About-me';
import FAQ from './pages/FAQ';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import NotFound from './pages/Non-Existent';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Terms from "./pages/Terms";
import DynamicVue from './pages/DynamicVue';


function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/dynamicvue" element={<DynamicVue />} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms" element={<Terms/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;