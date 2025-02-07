import React, { useState } from "react";
import pic2 from "../img/bgunisex.jpg";
import pic3 from "../img/menbg.png";
import pic1 from "../img/womenbg.jpg";
import "./slider.css";

const slides = [
  { id: 1, text: "Discover Your Scent", image: pic2 },
  { id: 2, text: "Feel the Essence of Elegance", image: pic1 },
  { id: 3, text: "Exclusive Fragrances for You", image: pic3 },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    console.log("Previous button clicked");
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slider-container">
      <button className="slide-prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        <div className="slide-text-overlay">
          <h2>{slides[currentSlide].text}</h2>
        </div>
      </div>
      <button className="slide-next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
