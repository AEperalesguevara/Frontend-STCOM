import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./Carousel.css";

const Carousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(autoSlide);
  }, [currentIndex, interval]);

  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`carousel-image ${
              index === currentIndex ? "center" : ""
            }`}
            style={{
              opacity: index === currentIndex ? 1 : 0.5,
              transform: index === currentIndex ? "scale(1.1)" : "scale(0.9)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  interval: PropTypes.number,
};

export default Carousel;
