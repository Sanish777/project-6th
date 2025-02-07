// import React, { useEffect, useState } from "react";

// const StarRating = ({ productId }) => {
//   const [ratings, setRatings] = useState([]);
//   const [selectedRating, setSelectedRating] = useState(0);

//   useEffect(() => {
//     const storedRatings = localStorage.getItem(`ratings-${productId}`);
//     if (storedRatings) {
//       setRatings(JSON.parse(storedRatings));
//     }
//   }, [productId]);

//   const handleRating = (rating) => {
//     const updatedRatings = [...ratings, rating];
//     setRatings(updatedRatings);
//     localStorage.setItem(
//       `ratings-${productId}`,
//       JSON.stringify(updatedRatings)
//     );
//     setSelectedRating(rating);
//   };

//   const averageRating = ratings.length
//     ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1)
//     : "No ratings yet";

//   return (
//     <div className="star-rating">
//       <div className="stars">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             className={star <= selectedRating ? "filled" : ""}
//             onClick={() => handleRating(star)}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StarRating;

// import React, { useEffect, useState } from "react";
// import productsData from "../data/productdata"; // Adjust the import path accordingly
// import "./starrating.css";

// const StarRating = ({ productId }) => {
//   const [ratings, setRatings] = useState([]);
//   const [selectedRating, setSelectedRating] = useState(0);

//   useEffect(() => {
//     // Get stored ratings from localStorage
//     const storedRatings = localStorage.getItem(`ratings-${productId}`);
//     const storedRatingsArray = storedRatings ? JSON.parse(storedRatings) : [];

//     // Find the product in productsData and get its initial ratings
//     const product = productsData.find((p) => p.id === productId);
//     const productRatings = product ? product.ratings : [];

//     // Combine stored ratings and product ratings
//     const combinedRatings = [...productRatings, ...storedRatingsArray];

//     setRatings(combinedRatings);
//   }, [productId]);

//   const handleRating = (rating) => {
//     const updatedRatings = [...ratings, rating];
//     setRatings(updatedRatings);
//     localStorage.setItem(
//       `ratings-${productId}`,
//       JSON.stringify(updatedRatings)
//     );
//     setSelectedRating(rating);
//   };

//   const averageRating = ratings.length
//     ? (ratings.reduce((sum, r) => sum + r, 0) / ratings.length).toFixed(1)
//     : "No ratings yet";

//   return (
//     <div className="star-rating">
//       <div className="stars">
//         {[1, 2, 3, 4, 5].map((star) => (
//           <span
//             key={star}
//             className={star <= selectedRating ? "filled" : ""}
//             onClick={() => handleRating(star)}
//           >
//             ★
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default StarRating;
// import React from "react";
// import productsData from "../path-to-your/productData";

// const StarRating = ({ productId }) => {
//   // Find the product based on productId
//   const product = productsData.find((p) => p.id === productId);

//   if (!product || !product.ratings) return <p>No ratings available</p>;

//   // Calculate the average rating
//   const avgRating =
//     product.ratings.reduce((sum, rating) => sum + rating, 0) /
//     product.ratings.length;

//   // Round to nearest half-star
//   const roundedRating = Math.round(avgRating * 2) / 2;

//   return (
//     <div className="star-rating">
//       {Array.from({ length: 5 }, (_, index) => {
//         const starValue = index + 1;
//         return (
//           <span key={index}>
//             {starValue <= roundedRating ? "★" : "☆"}
//           </span>
//         );
//       })}
//       <span> ({avgRating.toFixed(1)})</span>
//     </div>
//   );
// };

// export default StarRating;
// import React from "react";
// import productsData from "../data/productdata";

// const StarRating = ({ id }) => {
//   // Find the product based on productId
//   const product = productsData.find((p) => p.id === id);

//   if (!product || !product.ratings) return <p>No ratings available</p>;

//   // Calculate the average rating
//   const avgRating =
//     product.ratings.reduce((sum, rating) => sum + rating, 0) /
//     product.ratings.length;

//   // Round to nearest half-star
//   const roundedRating = Math.round(avgRating * 2) / 2;

//   return (
//     <div className="star-rating">
//       {Array.from({ length: 5 }, (_, index) => {
//         const starValue = index + 1;
//         return (
//           <span key={index}>{starValue <= roundedRating ? "★" : "☆"}</span>
//         );
//       })}
//       <span> ({avgRating.toFixed(1)})</span>
//     </div>
//   );
// };

// export default StarRating;
import React from "react";
import productsData from "../data/productdata";
import "./starrating.css";


const StarRating = ({ productId }) => {
  const product = productsData.find((p) => p.id == productId);
console.log(product);
  // If product not found or has no ratings, show 0 stars
  if (!product || !product.ratings || product.ratings.length === 0) {
    return <div className="star-rating">{"☆☆☆☆☆"}</div>;
  }

  // Calculate the average rating
  const avgRating =
    product.ratings.reduce((sum, rating) => sum + rating, 0) /
    product.ratings.length;
  // console.log(product.rating);
  // Round to nearest half-star
  const roundedRating = Math.round(avgRating * 2) / 2;

  return (
    <div className="star-rating">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <span className={starValue <= roundedRating ? "filled-star" : "unfilled-star"} key={index}>{"★"}</span>
        );
      })}
      <span class="rating-score"> ({avgRating.toFixed(1)})</span>
    </div>
  );
};

export default StarRating;
