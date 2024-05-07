import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./view/login/Login";
import Products from "./view/product/Products";
import MyCart from "./view/product/MyCart";
import Checkout from "./view/product/Checkout";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Login />} />
          <Route path="/products" element={<Products/>}/>
          <Route path="/mycart" element={<MyCart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
