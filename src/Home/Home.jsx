import React from 'react'
import "./Home.css"
import { FaRegSurprise } from "react-icons/fa";
import { GiIndiaGate } from "react-icons/gi";
import Ms from "../assets/image/01.webp";
import Pp from "../assets/image/02.webp";
import p from "../assets/image/03.webp";



import { FcReuse } from "react-icons/fc";


import Navbar from '../navbar/Navbar';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import Crousle from './Crousle';



const Home = (() => {
  return (
    <>
    
       <Navbar/>
   
   <div>
   
    <Crousle />
    </div>

    <div className='sc'>
      <div className='sa'> <FaRegSurprise /> 3M+ Happy Customers
      </div>
      <div className='sa'> <GiIndiaGate />3M+ Happy Customers
      </div>
      <div className='sa'><FcReuse />3M+ Happy Customers
      </div>
      <div className='sa'> <FcReuse />3M+ Happy Customers
      </div>
    </div>
    <div className='hh'><img src="https://neemans.com/cdn/shop/files/Impact_Desktop.jpg?v=1727250715&width=1500r" alt="" /></div>
    <div className='sh'> 
      <h1 className='pk text-4xl mb-4 font-bold'>Shop by collection </h1>
<div className='oo'>
 <Link to="/Men's"> <img className='chai' src="https://neemans.com/cdn/shop/files/For_Men.jpg?v=1712743136&width=400" alt="" /> </Link>
<Link to="/Women's"><img className='chai1'src="https://neemans.com/cdn/shop/files/For_Women.jpg?v=1712743136&width=400" alt="" /> </Link>
  <img className='chai2'src="https://neemans.com/cdn/shop/files/Limited_Stock_Banner.jpg?v=1741084491&width=400" alt="" />
  <img className='chai3'src="https://neemans.com/cdn/shop/files/For_Men-1.jpg?v=1712743136&width=400" alt="" />
</div>
<div className='bu'> <button>VIEW ALL PRODUCTS</button></div>
    </div >
    <div className="s"><img src="https://neemans.com/cdn/shop/files/Awards_Desktop.jpg?v=1727499800&width=1500" alt="" /></div>
    <div className="new"><div className="newchaild"><h1 className="text-4xl font-bold">New Launches </h1></div>
    <Link to="/Offers"> <div className='chaild1'>
   <div className='image'>
      <img src="https://neemans.com/cdn/shop/files/TCKS-Ivory.png?v=1745313994&width=450" /> 
       <p> The CloudKnit Sneakers : Ivory</p>
         <p>   Rs. 1,999
               Rs. 2,699
               25% OFF</p>
               <button>ADD TO CART</button>
                </div> <div className='image'>
      <img src="https://neemans.com/cdn/shop/files/PWDG-Grey.png?v=1745226535&width=450" /> 
       <p> The CloudKnit Sneakers : Ivory</p>
         <p>   Rs. 1,999
               Rs. 2,699
               25% OFF</p>
               <button>ADD TO CART</button>
                </div>
                <div className='image'>
      <img src="https://neemans.com/cdn/shop/files/Grey_644ef1da-de70-4cff-958d-763d415a049e.png?v=1744976570&width=450" /> 
       <p> The CloudKnit Sneakers : Ivory</p>
         <p>   Rs. 1,999
               Rs. 2,699
               25% OFF</p>
               <button>ADD TO CART</button>
                </div>
                <div className='image'>
      <img src="https://neemans.com/cdn/shop/files/Beige_531f19f0-17b1-4395-b79f-79fd3ad809e6.png?v=1744882155&width=450" /> 
       <p> The CloudKnit Sneakers : Ivory</p>
         <p>   Rs. 1,999
               Rs. 2,699
               25% OFF</p>
               <button>ADD TO CART</button>
                </div>
   


    </div> </Link>

   <div className='su'> <Link to="/Offers"><button>VIEW ALL PRODUCTS </button> </Link></div>
   <img src={Ms}  className="pt-5 w-full  "/>
   <img src={Pp} className="w-full" />
    
    </div>
    
    <div className='w-full bg-pink-50 '><div className='flex justify-around w-80 gap-8 m-18 '>
     <img src={p} />
    <img src={p} />
    <img src={p}/>
    <img src={p} /></div>
    <div className='flex justify-around w-80 gap-8 m-18 '>
     <img src={p} />
    <img src={p} />
    <img src={p}/>
    <img src={p} /></div>

    <button></button>

    </div>
    <Footer />
    
    </>
    
  )
  })

export default Home;




