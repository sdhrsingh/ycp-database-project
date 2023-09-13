import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const AdminProtectedRoute = ({ children }) => {
  const [adminId, setAdminId] = useContext(AuthContext);
  let location = useLocation();

  if (!(localStorage.getItem("adminId"))) {
    return <Navigate to="/admin-login" state={{ from: location }} replace />;
  }
  return children;
};

export default AdminProtectedRoute;
