import { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import PayWithKhalti from "../components/khalti/PayWithKhalti";
import "./cart.css";

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  const [cartItems, setCartItems] = useState(cart);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  const getValidPrice = (price) => {
    const validPrice = Number(price);
    return isNaN(validPrice) ? 0 : validPrice;
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + getValidPrice(item.price) * item.quantity,
    0
  );

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-header">
              <p>PRODUCT</p>
              <p>SIZE</p>
              <p>QUANTITY</p>
              <p>TOTAL</p>
            </div>

            {cartItems.map((item) => (
              <div className="cart-item" key={`${item.id}-${item.size}`}>
                <div className="cart-product-info">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-product-img"
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p>
                      <strong>Size:</strong>{" "}
                      <span className="cart-size">{item.size}</span>
                    </p>
                    <p>Rs. {getValidPrice(item.price).toFixed(2)}</p>
                  </div>
                </div>

                <div className="quantity-controls">
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity - 1)
                    }
                    disabled={item.quantity <= 0}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.id, item.size, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>

                <p className="total-price">
                  Rs. {(getValidPrice(item.price) * item.quantity).toFixed(2)}
                </p>

                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  Delete
                </button>
              </div>
            ))}

            <div className="cart-footer">
              <a href="/" className="continue-shopping">
                Continue Shopping
              </a>
              <h2>Total: Rs. {totalPrice.toFixed(2)}</h2>
              <PayWithKhalti
                amount={totalPrice.toFixed(2)}
                product={{ id: "123", name: "Test Product" }}
                customer={{
                  name: "John Doe",
                  email: "john@example.com",
                  phone: "9800000000",
                }}
              />
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
