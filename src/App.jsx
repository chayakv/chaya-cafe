import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/pages/Header";
import Home from "./components/pages/Home";
import Product from "./components/Product";
import Footer from "./components/pages/Footer";
import Cart from "./components/pages/Cart";
import Checkout from "./components/pages/Checkout";
import OrderSuccess from "./components/pages/OrderSuccess";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route 
path="/success" 
element={<OrderSuccess />}
/>
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
