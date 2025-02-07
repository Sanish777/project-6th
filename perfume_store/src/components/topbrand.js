import BrandCard from "../components/brandcard";
import "./productsection.css";

const BrandSection = ({ title, products }) => {
  return (
    <div div className="product-section brand">
      <h2>{title}</h2>
      <div className="product-grid">
        {products.map((product) => (
          <BrandCard key={product.brand} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BrandSection;
