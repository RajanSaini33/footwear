
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { product } from "./Men's";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import IIA from "../assets/image/emoge1.svg";
import IIB from "../assets/image/emoge2.svg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice"; 
import { Link } from 'react-router-dom';

const Detal = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState("");
  const handleQuantity = (e) => setQuantity(e.target.value);

  const [size, setSize] = useState("");
  const handleSizeChange = (e) => setSize(e.target.value);

  const productData = product.find((item) => item?.id === Number(id));

  const handleAddToCart = () => {
    if (!size || !quantity) {
      alert("Please select both size and quantity.");
      return;
    }

    const productToAdd = {
      ...productData,
      size,
      quantity: Number(quantity),
    };

    dispatch(addToCart(productToAdd));
    alert("Product added to cart!");
  };

  return (
    <div>
      <Navbar />
      {productData ? (
        <div className="h-200 flex justify-center bg-amber-100 pt-8">
          <div className="flex border-2 border-black justify-between w-300 h-150 rounded-3xl">
            <div className="flex-col w-1/2 ml-10">
              <img
                src={productData.img}
                alt={productData.name}
                className="ml-2 h-100 w-130 mt-4 rounded-3xl"
              />
            <Link to="/BuyNow"> <button className="border-2 bg-yellow-300 text-white w-130 ml-4 p-3 mt-5 rounded-3xl hover:bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500">
                Buy now
              </button></Link> 
              <button
                onClick={handleAddToCart}
                className="border-2 bg-green-500 text-white w-130 ml-4 p-3 mt-3 rounded-3xl hover:bg-green-600"
              >
                Add to Cart
              </button>
            </div>

            <div className=" w-1/2 ml-20">
              <p className="text-3xl font-bold mt-16">{productData.description}</p>
              <div className="flex gap-2 mt-4 font-bold">
                <span>Rs.{productData.prize}</span>
                <p className="line-through opacity-40">MRP.{productData.deco}</p>
              </div>
              <p>{productData.rating}</p>

              <div className="flex mt-4 gap-3">
                <img src={IIA} alt="" className="w-15 h-15 " />
                <p className="mt-4">Snug, embracing fit</p>
              </div>
              <div className="flex mt-6  gap-3">
                <img src={IIB} className="w-15 h-15"  />
                <p className="mt-4">Great grip & traction</p>
              </div>

              <div className="flex gap-3 mt-4">
                <h3 className="text-2xl">Size:</h3>
                <select
                  className="border-2 border-black rounded-3xl h-10 w-40 ml-4 text-center"
                  value={size}
                  onChange={handleSizeChange}
                >
                  <option value="">--choose size--</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                </select>
              </div>

              <div className="flex mt-8 gap-3">
                <h3 className="text-2xl">Quantity:</h3>
                <input
                  type="number"
                  value={quantity}
                  onChange={handleQuantity}
                  min="1"
                  max="10"
                  className="border-2 w-20 text-center rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
      <Footer />
    </div>
  );
};

export default Detal;
