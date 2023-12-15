import React from "react";
import useAuth from "../components/customhooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
const Adminprivate = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  if (!currentUser.email === "test@gmail.com") {
    return <Navigate to="/login" />;
  }

  return <Outlet></Outlet>;
};
export default Adminprivate;
