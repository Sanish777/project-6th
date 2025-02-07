import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import productsData from "../data/productdata";
import ProductCard from "./productcard";
import "./products.css";

const Brand = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const { brand } = useParams();
  const filteredProducts = productsData.filter(
    (product) => product.brand === brand
  );

  return (
    <div>
      <Navbar />
      <h1>
        {brand ? `${brand} Perfumes` : "brand Not Found"}
      </h1>
      <div className="product-section">
        <div className="product-list">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.brand}
                product={product}
                addToCart={addToCart}
              />
            ))
          ) : (
            <p>No products found for this brand.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Brand;
// import { Link } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import Navbar from "../components/navbar";
// import ProductCard from "../components/productcard";
// import productsData from "../data/productdata";

// const BrandPage = () => {
//   const { brand } = useParams();

//   const filteredProducts = productsData.filter(
//     (product) => product.brand.toLowerCase() === brand.toLowerCase()
//   );

//   return (
//     <div>
//       <Navbar />
//       <h1>{brand} Perfumes</h1>
//       <div className="product-list">
//         {filteredProducts.length > 0 ? (
//           filteredProducts.map((product) => (
//             <Link to={`/brand/${brand}/${product.id}`} key={product.id}>
//               <ProductCard product={product} />
//             </Link>
//           ))
//         ) : (
//           <p>No products found for this brand.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BrandPage;
