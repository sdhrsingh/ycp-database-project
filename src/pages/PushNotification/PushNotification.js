import React from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const PushNotification = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notification, setNotification] = useState([]);
  const navigate = useNavigate();

  const getNotifications = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/notifications"
      );
      console.log(response.data);
      setNotification(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getNotifications();
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    console.log(title);
    console.log(description);
    try {
      const response = await axios.post(
        "http://localhost:8080/api/notifications",
        { title, description }
      );
      console.log(response);
      setTitle("");
      setDescription("");
      getNotifications();
    } catch (error) {
      alert(error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-push-notification/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/api/notifications/${id}`
      );
      getNotifications();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Push Notification</h2>
          <form
            className="form w-50 mx-auto push-notification-form"
            onSubmit={handlePost}
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
              Post
            </button>
          </form>
          <table className="table table-bordered w-75 mx-auto mt-5">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Timestamp</th>
              </tr>
            </thead>
            <tbody>
              {notification &&
                notification.map((element) => (
                  <tr key={element.id}>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                    <td>{element.timestamp}</td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => handleEdit(element.id)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-danger"
                        onClick={() => handleDelete(element.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PushNotification;
