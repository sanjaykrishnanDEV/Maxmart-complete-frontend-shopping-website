import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Productdetails from "../pages/Productdetails";
import Shop from "../pages/Shop";
import Signup from "../pages/Signup";
import ProtectedRoute from "./ProtectedRoute";
import Allproducts from "../admin/Allproducts";
import Addproducts from "../admin/Addproducts";
import Dashboard from "../admin/Dashboard";
import Adminprivate from "../routers/Adminprivate";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<Productdetails />} />
      <Route path="cart" element={<Cart />} />
      <Route path="/*" element={<ProtectedRoute />}>
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route path="/*" element={<Adminprivate />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/allproducts" element={<Allproducts />} />
        <Route path="dashboard/addproducts" element={<Addproducts />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
