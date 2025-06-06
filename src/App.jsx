import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from "./navbar/Navbar";
import Login from "./Login/Login";
import Submit from "./Login/Submit";
import Footer from "./footer/footer";
import Men from "./Man/Men's";
import Detal from "./Man/Detal";
import Women from "./Women's/Women's";
import Kids from "./Kid/Kids";
import Crousle from "./Home/Crousle";
import Offers from "./Offers/Offers";
import ProtectRoute from "./Login/Protect";
import Profile from "./Login/profile";
import Cart from "./navbar/Cart";
import BuyNow from "./Login/BuyNow";


const App = () => {
  const isAuthenticated =!!localStorage.getItem("user")
  return (
    <BrowserRouter>
      <Routes>
       <Route
          path="/"
          element={
            <ProtectRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectRoute>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/Men's" element={<Men />} />
        <Route path="/women's" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/detal/:id" element={<Detal />} />
        <Route path="/crousle" element={<Crousle />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path ="/BuyNow" element={<BuyNow/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;



// import React, { createContext, useState } from 'react'
// import Footer from './footer/footer'

// export const  UserContext= createContext();

// const App = () => {


//   return (
//     <div>
//       <h1>home</h1>
// <UserContext.Provider value={"name"}>

// <Footer />
// </UserContext.Provider>

//     </div>
//   )
// }

// export default App