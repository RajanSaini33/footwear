
import React from "react";
import Navbar from './Navbar';
import KCM from "../assets/image/shoes2.webp"; 
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
    } else {
      navigate("/BuyNow");
    }
  }
  return (
    <div className="w-full  min-h-screen p-5">
      <Navbar />
    
      <div className="w-full mx-auto mt-5 bg-white p-4 flex flex-col md:flex-row gap-8">
      
        <div className="w-full md:w-2/3">
        
          <div className="border border-gray-300 p-4 mb-4">
            <h1 className="text-red-500 font-bold text-xl">Free Shipping for Members.</h1>
            <p className="text-gray-600 text-sm">
              Become a Nike Member for fast and free shipping.{" "}
              <a href="#" className="underline">Join us</a> or{" "}
              <a href="#" className="underline">Sign-in</a>
            </p>
          </div>

          <div className="bg-gray-100 p-3 mb-4">
            <p className="text-sm font-semibold">Save Up to 40%</p>
            <a href="#" className="text-xs underline">Shop All Our New Markdowns</a>
          </div>

         
          <h2 className="text-2xl font-bold mb-4">Cart Items</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <img src={item.img} alt={item.name} className="w-32 h-24 object-contain" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-sm text-gray-500">{item.color}</p>
                <div className="flex gap-4 text-sm mt-1">
                  <p>Size: {item.size}</p>

                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="flex gap-4 mt-2 text-sm underline text-gray-600">
                  <button>Move to Favorites</button>
                  <button onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                </div>
              </div>
              <p className="text-right font-semibold">${item.prize}</p>
            </div>
          ))}
      
       
          <div>
            <h4 className="font-bold">Shipping</h4>
            <p className="text-sm mt-1">Arrives Tue, Jul 20 – Thu, Jul 22 <span className="underline cursor-pointer">Edit Location</span></p>
            <h4 className="font-bold mt-3">Pickup</h4>
            <p className="underline text-sm">Find a Store</p>
            <div className="text-yellow-600 text-sm mt-3 flex items-center gap-2">
              <span>⏱</span> Just a few left. Order soon.
            </div>
          </div>
        </div>

        
        <div className="w-full md:w-1/3 border border-gray-300 p-4 h-fit">
          <h2 className="font-semibold text-lg mb-4">Summary</h2>

          <div className="text-sm mb-4">
            <p className="flex justify-between">Subtotal <span>$90.00</span></p>
            <p className="flex justify-between">Estimated Shipping & Handling <span>$8.00</span></p>
            <p className="flex justify-between">Estimated Tax <span>—</span></p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-md mb-4">
            <p>Total</p>
            <p>$98.00</p>
          </div>

          <button className="w-full bg-black text-white py-2 rounded-full mb-3" onClick={handleChange}>Checkout</button>
          <button className="w-full border border-gray-400 py-2 rounded-full text-blue-600 font-medium">PayPal</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
