


import React, { useState, useEffect } from "react";
import "./Navbar.css";
import IIM from "../assets/image/logo.jpg";
import { TbLogout } from "react-icons/tb";

import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { FaShoppingCart } from "react-icons/fa";

import { IoPersonCircleSharp } from "react-icons/io5";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("loginuser");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loginUser");
    navigate("/");
  };

  return (
    <div className="main">
 <Link to ="/Home" >   <div className="nev">
        <img
          src={IIM}
          alt="Logo"
          style={{ height: "80px", width: "80px", marginLeft: "40px" }}
        />
      </div> </Link>

      <div className="u">
        <ul>
          <Link style={{ textDecoration: "none" }} to="/Home">Home</Link>
          <Link to="/Men's">Men's</Link>
          <Link to="/Women's">Women's</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/Offers">Offers</Link>
          <Link to="/">About</Link>
          <input className="nm" type="text" placeholder="Search" />
         
        

        <div style={{ marginLeft: "auto", marginRight: "30px" }}>
          {isLoggedIn === true ? 
          <>
   <Link to="/login" className="text-2xl gap-2">
              <IoPersonCircleSharp />
            </Link>

          </>
          : 
         <><div className="flex items-center gap-5">
         
          <Link to="/Profile"><CgProfile  className="mt-2"/></Link>
          <Link to="/cart"><FaShoppingCart className="mt-2"/></Link>
          <button onClick={handleLogout} className="mt-2"><TbLogout /></button>
          </div>
         </>
          }
        </div>
          
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
