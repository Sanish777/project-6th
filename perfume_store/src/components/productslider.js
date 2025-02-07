import React, { useState } from "react";
import "./slider.css";

const ProductSlider = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % groupedProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + groupedProducts.length) % groupedProducts.length);
  };

  return (
    <div className="slider-container">
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <div className="product-cards">
          {groupedProducts[currentSlide].map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductSlider;
