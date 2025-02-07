import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AboutUs from "./components/aboutus";
import Cart from "./components/cart";
import Contact from "./components/contact";
import Home from "./components/home";
import Login from "./components/login";
import ProductDetails from "./components/productdetail";
import Products from "./components/products";
import Brand from "./components/brands";
import Signup from "./components/signup";
import useCart from "./components/useCart";

const App = () => {
  const { cartItems, addToCart, removeFromCart, updateQuantity } = useCart();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products/:category" element={<Products />} />
        <Route path="/brands/:brand" element={<Brand />} />
        <Route
          path="/product/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
         <Route
          path="/brands/:brand/:id"
          element={<ProductDetails addToCart={addToCart} />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cartItems}
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
