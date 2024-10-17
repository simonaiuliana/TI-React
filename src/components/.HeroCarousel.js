// src/components/HeroCarousel.js

import React, { useEffect, useState } from 'react';


const HeroCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Schimbă imaginea la fiecare 3 secunde

    return () => clearInterval(interval); // Curăță intervalul la demontare
  }, [images.length]);

  return (
    <div className="hero-carousel">
      <div
        className="hero-carousel-inner"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div className="hero-carousel-item" key={index}>
            <img src={image.src} alt={image.alt} className="hero-carousel-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

