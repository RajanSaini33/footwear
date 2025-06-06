import React from "react";
import "./Women's.css";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/footer";
import { FaShoppingCart } from "react-icons/fa";
import acc from "../assets/image/hero.webp"
import { product } from "../Man/Men's";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";


const woMenproduct = product.filter((item) => item.categery === "women");


const Women = () => {
  const dispatch = useDispatch();

   const handleAddToCart = (item) => {
    
    
    dispatch(addToCart(item))
  }
  return (
    <div>
      <Navbar />
      <div>
        <img src={acc} alt="" className="w-full" />
      </div>
      <div className="grid grid-cols-4 mt-8 gap-10  mr-8 ml-8 bg-amber-50">
        {woMenproduct.map((item) => (
          <div key={item.id} className="border  rounded-3xl h-135">
             <Link to={`/Detal/${item.id}`}>
             <img src={item.img} alt=""  className="  w-full h-[350px] object-contain rounded-3xl "/>
             </Link>
            <h2 className="text-lg font-semibold ml-5 opacity-20">{item.name}</h2>
            <p className="text-lg font-semibold ml-5 opacity-30" >{item.description}</p>
            
            <div className="flex gap-2">
            <p className="text-black font-bold ml-5">₹{item.prize}</p>
            <p className="line-through opacity-40"> Rs{item.deco}</p> </div>
            <div>
            <p className="ml-5">{item.rating}</p> </div>
            
            <button className="bg-black  ml-5 border-2 flex  w-[290px] h-10 py-2 px-8 gap-0.5 hover:bg-gradient-to-r from-red-500 via-yellow-500 to-purple-500 text-white mt-3 transition-all duration-[1200ms] hover:text-[#fcf8f8] hover:shadow-inner rounded-3xl "  onClick={()=>handleAddToCart(item)}> <FaShoppingCart className="mt-1 mr-1"/>
                                ADD TO CART</button>
           
          </div>
        ))}
      </div>
       <Footer/>  
    </div>
  );
};
export default Women;