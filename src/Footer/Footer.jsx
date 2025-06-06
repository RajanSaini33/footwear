import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import kla from "../assets/image/Desktop.avif";
import NN from "../assets/image/09.png" 


 const Footer =(()=>{
    
    
return(
    <>
    <div className="w-full h-190 bg-black color text-white absolute  z-10 mt-10" >

        <div className="flex justify-center relative z-[9999] "><img src={NN}  /> </div>
       <p className="max-w-[800px] mx-auto font-semibold text-5xl leading-[51px] text-center tracking-[0.01em] text-white font-['Open_Sans']">Our page has come to an end, but our relationship with you has not</p>  
       
       <div className=" flex justify-center mt-8"><p className="text-3xl">Stay sustainable and subscribe now
       </p> 
     
       </div>
    <div className="flex justify-center pt-5"><input className="bg-white text-black p-4 w-60" type="email" placeholder="Enter Your Email" /> <button className="bg-amber-200 w-30">Search</button></div>
    <div className="flex justify-between items-start mx-auto w-[80%] pt-5 border-t text-white mt-7">
  <div className="flex flex-col space-y-1 ml-10">
    <p>CONTACT US-</p>
    <p>WhatsApp: +91 90599-38941</p>
    <p>(9:30AM to 9:00PM)</p>
  </div>
  
  <div className="flex flex-row space-x-6 mr-10 mt-6">
    <FaFacebook />
    <FaInstagram />
    <FaYoutube />
  </div>
 
</div>
    <div className="flex justify-center pt-3"> <img src={kla} /></div>


    </div>
    
    </>
)


 })
 export default Footer;

