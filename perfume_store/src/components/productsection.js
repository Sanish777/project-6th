import ProductCard from "../components/productcard";
import "./productsection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const ProductSection = ({ title, products }) => {
  return (
    <div div className="product-section">
      <h2>
        {title}
        <FontAwesomeIcon icon={faAngleDown} />
      </h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
