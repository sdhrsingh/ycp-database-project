import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPushNotification = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const getNotification = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/api/notifications/${id}`
      );
      setTitle(response.data.title);
      setDescription(response.data.description);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getNotification();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/api/notifications/${id}`,
        { title, description }
      );
      navigate("/push-notification");
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = () => {};
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main"> 
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Push Notification</h2>
          <form
            className="form w-50 mx-auto push-notification-form"
            onSubmit={handleUpdate}
          >
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                rows={3}
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100">
              Edit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EditPushNotification;
