import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import productsData from "../data/productdata";
import ProductCard from "./productcard";
import "./products.css";

const Products = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const { category } = useParams();
  const filteredProducts = productsData.filter(
    (product) => product.category === category
  );

  return (
    <div>
      <Navbar />
      <h1>
        {category ? `${category} Perfumes` : "Category Not Found"}
      </h1>
      <div className="product-section">
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;
