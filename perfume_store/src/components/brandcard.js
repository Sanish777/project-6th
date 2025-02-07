import { useNavigate } from "react-router-dom";

const BrandCard = ({ product, addToCart }) => {
  const navigate = useNavigate();

  const handleSelect = () => {
    console.log(`Navigating to brand ${product.brand}`);
    navigate(`/brands/${product.brand}`);
  };

  // const handleAddToCart = (e) => {
  //   e.stopPropagation();
  //   addToCart(product);
  //   navigate("/cart");
  // };

  return (
    <div className="product-card" onClick={handleSelect}>
      <img src={product.image} alt={product.name} className="product-img" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      {/* <button className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button> */}
    </div>
  );
};

export default BrandCard;
