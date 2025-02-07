import Navbar from "../components/navbar";
import ProductSection from "../components/productsection";
import Slider from "../components/slider";
import BrandSection from "../components/topbrand";
import Footer from "../components/footer";
import p13 from "../img/chanel.jpg";
import p1 from "../img/chanelno5.png";
import p2 from "../img/dior_sauvage.png";
import p14 from "../img/giorgio.jpg";
import p5 from "../img/giorgioarmani.png";
import p11 from "../img/gucci.jpg";
import p4 from "../img/guccibloom.png";
import p7 from "../img/khamrahlattafa.png";
import p8 from "../img/marlylayton.png";
import p9 from "../img/muskrose.png";
import p18 from "../img/myway.png";
import p17 from "../img/pradaparadoxe.png";
import p3 from "../img/versaceeros.png";
import p6 from "../img/youarmani.png";
import p15 from "../img/ysl.png";
import p16 from "../img/yslblack.jpg";
import "./home.css";

const bestSellers = [
  {
    id: 1,
    name: "Chanel No.5 Eau De Parfum Women",
    price: "Rs. 26,500",
    image: p1,
  },
  {
    id: 2,
    name: "Christian Dior Sauvage Eau de Parfum Men",
    price: "Rs. 26,500",
    image: p2,
  },
  {
    id: 3,
    name: "Gucci Bloom Women",
    price: "Rs. 24,660",
    image: p4,
  },
  {
    id: 4,
    name: "Giorgio Armani Code Men ",
    price: "Rs. 11,000",
    image: p5,
  },
];

const newArrivals = [
  {
    id: 8,
    name: "Emporio Armani Stronger With You Intensely Men",
    price: "Rs. 16,500",
    image: p6,
  },
  {
    id: 23,
    name: "Lattafa Khamrah Unisex",
    price: "Rs. 5,000",
    image: p7,
  },
  {
    id: 24,
    name: "Parfums De Marly Layton Men",
    price: "Rs. 1,800",
    image: p8,
  },
  {
    id: 25,
    name: "Ajmal Musk Rose Unisex",
    price: "Rs. 1,440",
    image: p9,
  },
  // {
  //   id: 22,
  //   name: "Princesse Marina De Bourbon Cristal D’or Eau De Parfum Women",
  //   price: "Rs. 9,000",
  //   image: p10,
  // },
];

const topBrands = [
  {
    id: 100,
    brand: "Gucci",
    image: p11,
  },
  // {
  //   id: 2,
  //   name: "Dior",
  //   image: p12,
  // },
  {
    brand: "Chanel",
    image: p13,
  },
  {
    brand: "Giorgio Armani",
    image: p14,
  },

  {
    brand: "Yves Saint Laurent",
    image: p15,
  },
];

const youMayAlsoLike = [
  {
    id: 21,
    name: "Prada Paradoxe Intense",
    price: "Rs. 24,280",
    image: p17,
  },
  {
    id: 20,
    name: "YSL Black Opium Eau De Parfum",
    price: "Rs. 21,045",
    image: p16,
  },
  {
    id: 12,
    name: "Giorgio Armani My Way",
    price: "Rs. 14,490",
    image: p18,
  },
  {
    id: 5,
    name: "Versace Eros Men",
    price: "Rs. 10,200",
    image: p3,
  },
];

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <ProductSection title="Best Selling" products={bestSellers} />
      <ProductSection title="New Arrivals" products={newArrivals} />
      <BrandSection title="Top Brand" products={topBrands} />
      <ProductSection title="You May Also Like" products={youMayAlsoLike} />
      <Footer/>
    </div>
  );
};

export default Home;
