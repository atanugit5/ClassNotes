import React from "react";
import { Routes, Route } from "react-router-dom";

import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Orders from "../Pages/Orders";
import Product from "../Pages/Product";
import Products from "../Pages/Products";
import AuthWrapper from "./AuthWrapper";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<AuthWrapper><Product /></AuthWrapper>} />
      <Route path="/cart" element={<AuthWrapper><Cart /></AuthWrapper>} />
      <Route path="/order" element={<Orders/>} />
      <Route path="/login" element={<Login/>} />
    </Routes>
  );
};

export default AllRoutes;
