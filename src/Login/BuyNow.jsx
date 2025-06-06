import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { useSelector } from "react-redux";

const BuyNow = () => {
  const items = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  if (items.length === 0) {
    return <div className="text-center text-2xl mt-10">No product selected</div>;
  }

  const handleConfirmOrder = () => {
    alert("Order confirmed!");
    navigate("/");
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6 mt-6 bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center">Confirm Your Purchase</h1>

        {items.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 mb-6 border-b pb-6 last:border-b-0">
            <img src={item.img} alt={item.name} className="w-full md:w-1/2 rounded-xl shadow" />
            <div className="flex-1">
              <p className="text-xl font-semibold mb-2">{item.description}</p>
              <p className="text-gray-600 mb-2">Size: {item.size}</p>
              <p className="text-gray-600 mb-2">Quantity: {item.quantity}</p>
              <p className="text-lg font-bold text-green-600">
                Total: ₹{item.prize * item.quantity}
              </p>
            </div>
          </div>
        ))}

        <button
          onClick={handleConfirmOrder}
          className="mt-6 w-full bg-green-500 text-white py-3 rounded-full hover:bg-green-600 transition"
        >
          Confirm Order
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BuyNow;
