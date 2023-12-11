import React from "react";

import useAuth from "../components/customhooks/useAuth";
import { Navigate } from "react-router-dom";

const Adminprivate = ({ children }) => {
  const { currentUser } = useAuth();

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  if (!currentUser.email === "admin@gmail.com") {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
};
export default Adminprivate;

// const ProtectedRoute = ({ children }) => {
//     const { currentUser } = useAuth();

//     if (!currentUser) {
//       return <Navigate to="/login" />;
//     }

//     return <>{children}</>;
//   };
