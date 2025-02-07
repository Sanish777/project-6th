import "./quantityselector.css";

const QuantitySelector = ({ quantity, setQuantity }) => {
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button onClick={decreaseQuantity}>-</button>
      <span>{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
    </div>
  );
};

export default QuantitySelector;
