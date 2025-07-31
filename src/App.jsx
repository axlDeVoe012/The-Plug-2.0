import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './styles/DarkMode.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Education from './pages/Education';
import SneakerCare from './pages/SneakerCare';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Articles from './pages/Articles';
import Pricing from './pages/Pricing';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Navbar />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/education" element={<Education />} />
          <Route path="/sneaker-care" element={<SneakerCare />} />
          <Route path="/services" element={<Services />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
