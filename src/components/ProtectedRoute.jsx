import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { isLoggedIn } = useAuth();
  const token = localStorage.getItem("token");

  return isLoggedIn || token ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
