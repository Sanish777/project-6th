import { useEffect, useState } from "react";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product) => {
    setCartItems((prevCartItems) => {
      const existingProductIndex = prevCartItems.findIndex(
        (item) => item.id === product.id && item.size === product.size
      );
      let updatedCartItems;

      if (existingProductIndex > -1) {
        updatedCartItems = [...prevCartItems];
        updatedCartItems[existingProductIndex].quantity += product.quantity;
      } else {
        updatedCartItems = [...prevCartItems, product];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const removeFromCart = (id, size) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.filter(
        (item) => !(item.id === id && item.size === size)
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  const updateQuantity = (id, size, quantity) => {
    setCartItems((prevItems) => {
      const updatedCartItems = prevItems.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCartItems));
      return updatedCartItems;
    });
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
  };
};

export default useCart;
