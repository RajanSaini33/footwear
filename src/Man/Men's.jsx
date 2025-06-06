import React from "react";
import "./Men's.css"
import bbb  from "../assets/image/hero.webp"
import Navbar from '../navbar/Navbar';
import Footer from "../footer/footer";
import { FaShoppingCart } from "react-icons/fa";

import xaa from "../assets/image/shoes1.webp";
import xba from "../assets/image/shoes2.webp";
import xca from "../assets/image/shoes3.webp";
import xda from "../assets/image/shoes4.webp";
import xea from "../assets/image/shoes5.webp";
import xfa from "../assets/image/shoes6.jpg";
import xga from "../assets/image/shoes7.webp";
import xha from "../assets/image/shoes8.webp";
import xja from "../assets/image/shoes9.webp";
import xka from "../assets/image/shoes10.webp";
import xla from "../assets/image/shoes11.webp";
import xma from "../assets/image/shoes12.webp";
import AAA from "../assets/image/wshoes.webp";
import BBB from "../assets/image/wshoes2.webp";
import CCC from "../assets/image/wshoes3.webp";
import DDD from "../assets/image/wshoes.webp";
import EEE from "../assets/image/wshoes5.webp";
import FFF from "../assets/image/wshoes6.webp";
import GGG from "../assets/image/wshoes7.webp";
import HHH from "../assets/image/wshoes8.webp";
import III from "../assets/image/wshoes9.webp";
import KKK from "../assets/image/wshoes10.webp";
import LLL from "../assets/image/wshoes11.webp";
import MMM from "../assets/image/wshoes12.webp";
import AAB from "../assets/image/kids1.webp";
import ABB from "../assets/image/kids2.webp";
import ACC from "../assets/image/kids3.webp";
import ADD from "../assets/image/kids4.webp";
import AEE from "../assets/image/kids5.webp";
import AFF from "../assets/image/kids6.webp";
import AGG from "../assets/image/kids7.webp";
import AHH from "../assets/image/kids8.webp";
import AII from "../assets/image/kids9.webp";
import AJJ from "../assets/image/kids10.webp";
import AKK from "../assets/image/kids11.webp";
import ALL from "../assets/image/kids12.webp";
import AMM from "../assets/image/Offers.webp";
import ANN from "../assets/image/Offers1.webp";
import AOO from "../assets/image/Offers2.webp";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slice";

 export const product = [
  {
    id: 1,
    name: "adidas",
    description: "Grip Fit Slip Ons : Black",
    deco: "3,999",
    prize: 200,
    rating:"⭐⭐⭐⭐⭐",
    img: xaa,
    categery: "men",
    size:"7"
  },
  {
    id: 2,
    name: "Redtap",
    description: "Brunch Loafers : Black/Tan",
    deco: "3,999",
    prize: 200,
    rating:"4.5⭐⭐⭐⭐⭐",
    img: xba,
    categery: "men"
  },
  {
    id: 3,
    name: "Neki",
    description: "Crossover Brogues : Black",
    deco: "2,999",
    prize: 1499,
    rating:"4.5⭐⭐⭐⭐⭐",
    img: xca,
    categery: "men"
  },
  {
    id: 4,
    name: "rana",
    description: "The Dependables : Black-Blue",
    deco: "2,999",
    prize: 1999,
    rating:"5.0⭐⭐⭐⭐⭐",
    img: xda,
    categery: "men"
  },
  {
    id: 5,
    name: "rana",
    description: "Dapper Loafers : Black",
    deco: "4,999",
    prize: 2999,
    rating:"4.4⭐⭐⭐⭐",
    img: xea,
    categery: "men"
  },
  {
    id: 6,
    name: "rana",
    description: "Purewhoosh Slides : Brown",
    deco: "5,999",
    prize: 4009,
    rating:"4.4⭐⭐⭐⭐",
    img: xfa,
    categery: "men"
  },
  {
    id: 7,
    name: "rana",
    description: "PureWhoosh Duo Glides : Tan",
    deco: "3,999",
    prize: 2099,
    rating:"4.5⭐⭐⭐⭐⭐",
    img: xga,
    categery: "men"
  },
  {
    id: 8,
    name: "rana",
    description: "The Minimals : Black",
    deco: "5,999",
    prize: 3999,
    rating:"4.5⭐⭐⭐⭐⭐",
    img: xha,
    categery: "men"
  },
  {
    id: 9,
    name: "rana",
    description: "The Minimals : Black",
    deco: "5,999",
    prize: 4999,
    rating:"4.0⭐⭐⭐⭐",
    img: xja,
    categery: "men"
  },
  {
    id: 10,
    name: "rana",
    description: "The Minimals : Black",
    deco: "2,599",
    prize: 1999,
    rating:"4.5⭐⭐⭐⭐⭐",
    img: xka,
    categery: "men"
  },
  {
    id: 11,
    name: "rana",
    description: "The Minimals : Black",
    deco: "3,999",
    prize: 2999,
    rating:"4.5⭐⭐⭐⭐⭐",
    img: xla,
    categery: "men"
  },
  {
    id: 12,
    name: "rana",
    description: "The Minimals : Black",
    deco: "2,999",
    prize: 1999,
    rating:"4.2⭐⭐⭐⭐",
    img: xma,
    categery: "men"
  },
  {
    id: 13,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.2⭐⭐⭐⭐",
    img: AAA
  },
  {
    id: 14,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.5⭐⭐⭐⭐⭐",
    img: BBB
  },
   {
    id: 15,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"3.5⭐⭐⭐",
    img: CCC
  },
  {
    id: 16,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"5.4⭐⭐⭐⭐⭐",
    img: DDD
  },
   {
    id: 17,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.4⭐⭐⭐⭐⭐",
    img: EEE
  },
   {
    id: 18,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.4⭐⭐⭐⭐⭐",
    img: FFF
  },
   {
    id: 19,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.5⭐⭐⭐⭐⭐",
    img: GGG
  },
   {
    id: 20,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"5.0⭐⭐⭐⭐⭐",
    img: HHH
  },
  {
    id: 20,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"3.5⭐⭐⭐",
    img: III
  },
  {
    id: 20,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.2⭐⭐⭐⭐",
    img: KKK
  },
  {
    id: 20,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.5⭐⭐⭐⭐⭐",
    img: LLL
  },
  {
    id: 20,
    name: "adidas",
    description: "Latest Women Casual Shoes",
    categery: "women",
    deco: "3,999",
    prize: "3,599",
    rating:"4.2⭐⭐⭐⭐",
    img: MMM
  },
  {
    id: 21,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AAB,
  },
  {
    id: 22,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img:ABB ,
  }
  ,
  {
    id: 23,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: ACC,
  },
  {
    id: 24,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: ADD,
  },
  {
    id: 25,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AEE,
  },
  {
    id: 26,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AFF,
  },
  {
    id: 27,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AGG,
  },
  {
    id: 28,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AHH,
  },
  {
    id: 29,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AII,
  },
  {
    id: 30,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AJJ,
  }
,
  {
    id: 31,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: AKK,
  }
,
  {
    id: 32,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: ALL,
  },
  {
    id: 33,
    name: "redtap",
    description: "Crossover Brogues : Black",
    categery: "Kids",
    deco: "2,999",
    prize: 1499,
    rating:" 4.2⭐⭐⭐⭐",
    img: ALL,
  },
  {
    id: 34,
    name: "redtap",
    description: "The CloudKnit Sneakers : Ivory",
    categery: "Offers",
    deco: "2,999",
    prize: 1999,
    rating:" 3.2⭐⭐⭐",
    img:AMM ,
  },
  {
    id: 35,
    name: "adidas",
    description: "The CloudKnit Sneakers : Ivory",
    categery: "Offers",
    deco: "999 ",
    prize: 599,
    rating:" 3.2⭐⭐⭐",
    img:ANN ,
  },
  {
    id: 36,
    name: "adidas",
    description: "The CloudKnit Sneakers : Ivory",
    categery: "Offers",
    deco: "999 ",
    prize: 599,
    rating:" 3.2⭐⭐⭐",
    img:AOO ,
  }







];


const Men =() => {
const dispatch = useDispatch();

   const handleAddToCart = (item) => {
    
    
    dispatch(addToCart(item))
  }
    return (
       
<div>
<Navbar/>
    <div>
        <img src={bbb} alt=""className="w-full" />
    </div>
       <div className="grid grid-cols-3 mt-8 gap-10 ml-8 mr-8 bg-amber-50">
  {product
    .filter((item) => item.categery === "men") 
    .map((item) => (
      <div key={item.id} className= "M border-1 rounded-3xl h-130">
        <Link to={`/Detal/${item.id}`}>
          <img
            src={item.img}
            alt=""
            className="w-full h-[350px] object-contain"
          />
        </Link>
        <div className="ml-5">
          <p className="text-[19px] font-bold">{item.name}</p>
          <p className="text-[19px] font-bold">{item.description}</p>
          <div className="flex">
            <p className="mr-3 font-bold">Rs.{item.prize}</p>
            <p className="line-through opacity-40">Rs.{item.deco}</p>
          </div>
          <div>{item.rating}rf</div>
        </div>
        <button className="bg-black ml-5 border-2 flex w-[190px] h-10  rounded-3xl py-2 px-8 gap-0.5 hover:bg-blue-800 text-white"  onClick={()=>handleAddToCart(item)}>
          <FaShoppingCart className="mt-1 " />
          ADD TO CART
        </button>
      </div>
    ))}
</div>

     <Footer/>   
        </div>

        
       
    )
}


export default Men;