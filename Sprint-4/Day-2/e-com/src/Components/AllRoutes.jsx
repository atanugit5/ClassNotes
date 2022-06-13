import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import Products from "../Pages/Products";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product/>} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AllRoutes;
