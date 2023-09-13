import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";
import axios from "axios";

const Notification = () => {
  const [notification, setNotification] = useState([]);

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

  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Notification</h2>
          <table className="table table-bordered w-75 m-auto">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Time stamp</th>
              </tr>
            </thead>
            <tbody>
              {notification &&
                notification.map((element) => (
                  <tr key={element.id}>
                    <td>{element.title}</td>
                    <td>{element.description}</td>
                    <td>{element.timestamp}</td>
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

export default Notification;
