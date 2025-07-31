import { useState, useEffect } from 'react';
import '../styles/SneakerCare.css';
import '../index.css';
import sneaker1 from '../assets/products/sneaker1.png';
import sneaker2 from '../assets/products/sneaker2.png';
import sneaker3 from '../assets/products/Sneaker3.png';

const images = [
  {
    src: sneaker1,
    title: "Deep Cleaning",
    caption: "Sneaker-safe deep clean with water-based foam.",
  },
  {
    src: sneaker2,
    title: "Fresh & Protected",
    caption: "Waterproof finish that keeps your kicks fresh.",
  },
  {
    src: sneaker3,
    title: "Splash Finish",
    caption: "Final rinse and hand-dry for that brand-new feel.",
  },
];


const SneakerCare = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="sneaker-care-container">
      <h1 className="sneaker-care-title">Sneaker Care</h1>
      <p className="sneaker-care-subtitle">
        Sneaker cleaning, restoration, and long-lasting protection.
      </p>

      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>&#10094;</button>
        <div className="slideshow-wrapper">
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].title}
            className="slideshow-image"
          />
          <div className="slideshow-text">
            <h2>{images[currentIndex].title}</h2>
            <p>{images[currentIndex].caption}</p>
          </div>
        </div>
        <button className="arrow right" onClick={nextSlide}>&#10095;</button>
      </div>

      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SneakerCare;
