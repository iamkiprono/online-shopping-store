import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./Components/Products";
import Checkout from "./Components/Checkout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
