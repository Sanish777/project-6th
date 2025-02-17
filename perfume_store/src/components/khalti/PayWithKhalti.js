import React from "react";
import { useKhalti } from "../../components/khalti/useKhalti";
import { useNavigate } from "react-router-dom";

const PayWithKhalti = ({ amount, product, customer }) => {
  const navigate = useNavigate();

  const { initiate } = useKhalti({
    onSuccess: (response) => {
      navigate("/success", { state: { product, response } });
    },
    onError: (error) => {
      console.error("Payment error:", error.message);
    },
  });

  const handlePayment = () => {
    if (product) {
      const paymentRequest = {
        amount: amount / 10,
        purchase_order_id: `order-${product.id}`,
        purchase_order_name: product.name,
        customer_info: {
          name: customer.name,
          email: customer.email,
          phone: customer.phone,
        },
        return_url: `${window.location.origin}/success`,
        website_url: window.location.origin,
      };

      initiate(paymentRequest);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-purple-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-700 transition"
    >
      Pay with Khalti
    </button>
  );
};

export default PayWithKhalti;
