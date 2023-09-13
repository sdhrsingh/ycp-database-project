import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const StudentProtectedRoute = ({ children }) => {
  const [prn, setPrn, firstName, setFirstName] = useContext(AuthContext);
  let location = useLocation();

  if (!(localStorage.getItem("prn")) && !(localStorage.getItem("firstName"))) {
    return <Navigate to="/student-login" state={{ from: location }} replace />;
  }
  return children;
};

export default StudentProtectedRoute;
