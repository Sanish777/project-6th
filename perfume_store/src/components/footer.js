import "./footer.css";
import logo1 from "../img/lgessence.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div class="footer-area">
      <div class="top-section">
        <div className="company-info">
          <img src={logo1} alt="Perfume Store Logo" className="logo-img" />
          <span class="detail-section">
            At Essence, we believe that a scent is more than just a
            fragrance—it’s an expression of who you are. Our carefully curated
            collection features luxury perfumes designed to captivate, inspire,
            and leave a lasting impression. Whether you prefer timeless
            classics, modern blends, or niche fragrances, we have something for
            every personality and occasion.
          </span>
          <div class="social-media-section">
            <div>Facebook</div>
            <div>Instagram</div>
            <div>Youtube</div>
          </div>
        </div>
        <div className="category-info">
          <div className="header-title">Category</div>
          <ul>
            <li>
              <Link to="/products/Men">Men</Link>
            </li>
            <li>
              <Link to="/products/Women">Women</Link>
            </li>
            <li>
              <Link to="/products/Unisex">Unisex</Link>
            </li>
          </ul>
        </div>
        <div className="category-info">
          <div className="header-title">Help and Support</div>
          <ul>
            <li>
              <Link to="/aboutus">About Us </Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div class="bottom-section">© {new Date().getFullYear()} Essence. All Rights Reserved.</div>
    </div>
  );
};

export default Footer;
