import Navbar from "../components/navbar";
import Footer from "../components/footer";
import pic5 from "../img/about3.jpg";
import pic4 from "../img/basenotes.jpg";
import pic3 from "../img/middlenote.jpg";
import pic1 from "../img/perfumesbg.jpeg";
import pic2 from "../img/topnote.jpg";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="header">
        <h1>Essence: Capturing the Art of Fragrance</h1>
        <p>
          Welcome to Essence, where each perfume is a symphony of carefully
          curated notes that evoke emotions, memories, and elegance.
        </p>
      </div>

      <div className="section philosophy">
        <div className="text">
          <h2>Our Philosophy</h2>
          <p>
            Essence is more than just a fragrance brand; it is a journey through
            the delicate balance of scents that define personal expression. Our
            expertly crafted perfumes are designed to awaken the senses,
            offering an olfactory experience that evolves over time.
          </p>
        </div>
        <img src={pic1} alt="Philosophy of Essence" />
      </div>

      <div className="section fragrance-layers">
        <h2>The Essence of Our Creations</h2>
        <div className="notes">
          <div className="note">
            <img src={pic3} alt="Top Notes" />
            <h3>Top Notes</h3>
            <p>
              The first impression of a perfume, delivering a fresh and
              invigorating aroma that sets the stage for the experience ahead.
            </p>
          </div>
          <div className="note">
            <img src={pic2} alt="Middle Notes" />
            <h3>Middle Notes</h3>
            <p>
              Also known as the heart of the fragrance, these notes emerge after
              the initial burst, creating warmth and depth.
            </p>
          </div>
          <div className="note">
            <img src={pic4} alt="Base Notes" />
            <h3>Base Notes</h3>
            <p>
              The foundation of every Essence perfume, these notes linger the
              longest, providing a lasting and memorable finish.
            </p>
          </div>
        </div>
      </div>
      <div className="section mission">
        <img src={pic5} alt="Mission" />
        <div className="text">
          <h2>Our Mission</h2>
          <p>
            To share our genuine passion for perfume and people and offer the
            most knowledgeable fragrance expertise on the high street.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
