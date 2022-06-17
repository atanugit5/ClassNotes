import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthWrapper = ({ children }) => {
  const auth = useSelector((state) => state.auth.auth);
  const location = useLocation();
  if (auth) {
    return children;
  }
  return <Navigate to="/login" replace={true} state={location} />;
};

export default AuthWrapper;
