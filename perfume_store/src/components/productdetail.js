import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QuantitySelector from "../components/quantityselector";
import StarRating from "../components/starrating";
import productsData from "../data/productdata";
import "./productdetail.css";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    const foundProduct = productsData.find(
      (item) => item.id === parseInt(id, 10)
    );

    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedSize(foundProduct.sizes[0]);
      setError(null);

      // Load stored reviews from localStorage
      const storedReviews = localStorage.getItem(`reviews-${id}`);
      if (storedReviews) {
        setReviews(JSON.parse(storedReviews));
      }
    } else {
      setError("Product not found");
    }

    setLoading(false);
  }, [id]);

  const handleAddReview = () => {
    if (reviewText.trim() === "") return; // Prevent empty reviews

    const newReview = {
      id: new Date().getTime(), // Unique ID for each review
      text: reviewText,
    };

    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews); // Update the review list
    setReviewText(""); // Clear the input field

    // Save the updated reviews in localStorage
    localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
  };

  const handleAddToCart = () => {
    if (!selectedSize) return;

    addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      quantity: quantity,
      price: selectedSize.price,
      size: selectedSize.amount,
    });

    navigate("/cart");
  };

  const handleSizeChange = (event) => {
    const newSize = product.sizes.find(
      (size) => size.amount === event.target.value
    );
    setSelectedSize(newSize);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <Navbar />
      <div className="product-details">
        <div className="product-container">
          <div className="product-image">
            <img
              src={product.image}
              alt={product.name}
              className="product-img-lg"
            />
          </div>
          <div className="product-info">
            <h2>{product.name}</h2>
            <StarRating productId={id} />
            <p>
              <span className="product-price">
                {selectedSize ? `Rs. ${selectedSize.price}` : "Select a size"}
              </span>
            </p>
            <p>
              <strong>Brand: </strong>
              {product.brand}
            </p>
            <div className="product-note">
              {product.highNoteImage && (
                <div>
                  <h3>
                    <strong>Top Notes:</strong>
                  </h3>
                  <img src={product.highNoteImage} alt="high note" />
                </div>
              )}
              {product.middleNoteImage && (
                <div>
                  <h3>
                    <strong>Middle Notes:</strong>
                  </h3>
                  <img src={product.middleNoteImage} alt="middle note" />
                </div>
              )}
              {product.baseNoteImage && (
                <div>
                  <h3>
                    <strong>Base Notes:</strong>
                  </h3>
                  <img src={product.baseNoteImage} alt="base note" />
                </div>
              )}
            </div>

            <div className="size-area">
              <label htmlFor="size">
                <strong>Select Size:</strong>
              </label>
              <select
                id="size"
                onChange={handleSizeChange}
                value={selectedSize?.amount}
              >
                {product.sizes.map((size) => (
                  <option key={size.amount} value={size.amount}>
                    {size.amount}
                  </option>
                ))}
              </select>
            </div>
            <div className="description-area">
              <strong>Product Details</strong>

              <p>{product.description}</p>
            </div>

            <div className="cart-area">
              <button className="add-to-cart" onClick={handleAddToCart}>
                Add to cart
              </button>
              <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
            </div>
          </div>
        </div>
      </div>
      <div className="reviews-section">
        <h3>Customer Reviews</h3>
        {reviews.length > 0 ? (
          <ul className="review-list">
            {reviews.map((review) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet. Be the first to review!</p>
        )}

        <textarea
          placeholder="Write a review..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="review-input"
        ></textarea>

        <button className="review-submit" onClick={handleAddReview}>
          Submit Review
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default ProductDetails;
// import StarRating from "../components/starrating";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Navbar from "../components/navbar";
// import QuantitySelector from "../components/quantityselector";
// import productsData from "../data/productdata";
// import "./productdetail.css";

// const ProductDetails = ({ addToCart }) => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [reviews, setReviews] = useState([]);
//   const [reviewText, setReviewText] = useState("");
//   const [ratings, setRatings] = useState([]);
//   const [selectedRating, setSelectedRating] = useState(5); // Default rating

//   useEffect(() => {
//     const foundProduct = productsData.find(
//       (item) => item.id === parseInt(id, 10)
//     );

//     if (foundProduct) {
//       setProduct(foundProduct);
//       setSelectedSize(foundProduct.sizes[0]);
//       setError(null);

//       // Load stored reviews from localStorage
//       const storedReviews = localStorage.getItem(`reviews-${id}`);
//       if (storedReviews) {
//         setReviews(JSON.parse(storedReviews));
//       }

//       // Load stored ratings from localStorage
//       const storedRatings = localStorage.getItem(`ratings-${id}`);
//       if (storedRatings) {
//         setRatings(JSON.parse(storedRatings));
//       } else {
//         setRatings(foundProduct.ratings || []);
//       }
//     } else {
//       setError("Product not found");
//     }

//     setLoading(false);
//   }, [id]);

//   const handleAddReview = () => {
//     if (reviewText.trim() === "") return; // Prevent empty reviews

//     const newReview = {
//       id: new Date().getTime(),
//       text: reviewText,
//     };

//     const updatedReviews = [...reviews, newReview];
//     setReviews(updatedReviews);
//     setReviewText("");

//     localStorage.setItem(`reviews-${id}`, JSON.stringify(updatedReviews));
//   };

//   const handleAddRating = () => {
//     const updatedRatings = [...ratings, selectedRating];
//     setRatings(updatedRatings);

//     localStorage.setItem(`ratings-${id}`, JSON.stringify(updatedRatings));
//   };

//   const handleAddToCart = () => {
//     if (!selectedSize) return;

//     addToCart({
//       id: product.id,
//       name: product.name,
//       image: product.image,
//       quantity: quantity,
//       price: selectedSize.price,
//       size: selectedSize.amount,
//     });

//     navigate("/cart");
//   };

//   const handleSizeChange = (event) => {
//     const newSize = product.sizes.find(
//       (size) => size.amount === event.target.value
//     );
//     setSelectedSize(newSize);
//   };

//   // Calculate average rating
//   const averageRating =
//     ratings.length > 0
//       ? (
//           ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
//         ).toFixed(1)
//       : "No ratings yet";

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div>
//       <Navbar />
//       <div className="product-details">
//         <div className="product-container">
//           <div className="product-image">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="product-img-lg"
//             />
//           </div>
//           <div className="product-info">
//             <h2>{product.name}</h2>
//             <p>{product.description}</p>
//             <p>
//               <strong>Brand: </strong>
//               {product.brand}
//             </p>

//             <p>
//               <strong>Average Rating: </strong> {averageRating} ⭐
//             </p>

//             <label htmlFor="size">
//               <strong>Select Size:</strong>
//             </label>
//             <select
//               id="size"
//               onChange={handleSizeChange}
//               value={selectedSize?.amount}
//             >
//               {product.sizes.map((size) => (
//                 <option key={size.amount} value={size.amount}>
//                   {size.amount}
//                 </option>
//               ))}
//             </select>

//             <p>
//               <strong>Price:</strong>
//               <span className="product-price">
//                 {selectedSize ? `Rs. ${selectedSize.price}` : "Select a size"}
//               </span>
//             </p>

//             <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
//             <button className="add-to-cart" onClick={handleAddToCart}>
//               Add to cart
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="reviews-section">
//         <h3>Customer Reviews</h3>
//         {reviews.length > 0 ? (
//           <ul className="review-list">
//             {reviews.map((review) => (
//               <li key={review.id}>{review.text}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>No reviews yet. Be the first to review!</p>
//         )}

//         <textarea
//           placeholder="Write a review..."
//           value={reviewText}
//           onChange={(e) => setReviewText(e.target.value)}
//           className="review-input"
//         ></textarea>

//         <button className="review-submit" onClick={handleAddReview}>
//           Submit Review
//         </button>
//       </div>

//       <div className="ratings-section">
//         <h3>Rate This Product</h3>
//         <select
//           value={selectedRating}
//           onChange={(e) => setSelectedRating(parseInt(e.target.value, 10))}
//         >
//           {[5, 4, 3, 2, 1].map((star) => (
//             <option key={star} value={star}>
//               {star} Stars
//             </option>
//           ))}
//         </select>
//         <button className="rating-submit" onClick={handleAddRating}>
//           Submit Rating
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ProductDetails;
