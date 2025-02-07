import { faLocation, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "./contact.css";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Our Store</h3>
            <p><FontAwesomeIcon icon={faLocation} /> NewRoad, Kathmandu</p>
            <p><FontAwesomeIcon icon={faPhone} /> 01-42132567 </p>
            <p><FontAwesomeIcon icon={faWhatsapp} /> +977 9841876598</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> essence@gmail.com</p>
          </div>
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
