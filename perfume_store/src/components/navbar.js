import {
  faSearch,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import logo from "../img/lgessence.png";
import "./navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div className="navbar-search-container">
        <div>
        <Link to="/">
          <img src={logo} alt="Perfume Store Logo" className="logo-img" />
          </Link>
        </div>
        <div className="navbar-left">
          <div className="navbar-search">
            <input
              type="text"
              placeholder="Search for perfumes..."
              className="search-bar"
            />
            <button className="search-button">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div>
            <ul className="navbar-l">
              <li>
                <Link to="/cart">
                  <FontAwesomeIcon icon={faShoppingCart} />
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FontAwesomeIcon icon={faUser} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="navbar">
        <ul className="navbar-links">
          <li>
            <Link to="/products/Men">Men</Link>
          </li>
          <li>
            <Link to="/products/Women">Women</Link>
          </li>
          <li>
            <Link to="/products/Unisex">Unisex</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us </Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
