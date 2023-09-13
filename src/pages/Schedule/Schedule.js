import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";
import axios from "axios";

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);

  const getSchedule = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getSchedule_all");
      console.log(response.data);
      setSchedule(response.data)
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);
  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <div className="bg-light content-section">
          <h2 className="text-center mt-3 mb-5">Schedule</h2>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Type</th>
                <th scope="col">Date</th>
                <th scope="col">Module</th>
                <th scope="col">Faculty</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {schedule &&
                schedule.map((element) => (
                  <tr key={element.id}>
                    <td>{element.lectureType}</td>
                    <td>{element.lectureDate}</td>
                    <td>{element.course.courseName}</td>
                    <td>{element.facultyName}</td>
                    <td>{element.startTime} to {element.endTime}</td>
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

export default Schedule;
