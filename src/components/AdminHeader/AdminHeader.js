import React, { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

const AdminHeader = () => {
  const [adminId, setAdminId] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAdminId("");
    localStorage.removeItem("adminId");
    navigate("/");
  };
  return (
    <div className="admin-header">
      <h1>Welcome {localStorage.getItem("adminId")}</h1>
      <button type="button" class="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AdminHeader;
 