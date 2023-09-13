import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const StudentsHeader = () => {
  const [firstName, setFirstName, prn, setPrn] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setFirstName("");
    setPrn("");
    localStorage.removeItem("prn");
    localStorage.removeItem("firstName");
    navigate("/");
  };
  return (
    <div className="student-header">
      <h1>Welcome {localStorage.getItem("firstName")}</h1>
      <NavLink to="/" type="button" class="btn btn-primary" onClick={handleLogout}>
        Logout
      </NavLink>
    </div>
  );
};

export default StudentsHeader;
