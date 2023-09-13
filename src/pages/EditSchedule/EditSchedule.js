import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import { Footer } from "antd/es/layout/layout";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditSchedule = () => {
  const { id } = useParams();
  const [courses, setCourses] = useState(0);
  const [facultyName, setFacultyName] = useState("");
  const [lectureType, setLactureType] = useState("");
  const [lectureDate, setLectureDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const navigate = useNavigate();
  const courseArray = [
    { courseId: 1, courseName: "DBT" },
    { courseId: 2, courseName: "COP and Os" },
    { courseId: 3, courseName: "Core java" },
    { courseId: 4, courseName: "Advanced java" },
    { courseId: 5, courseName: "Data structures" },
    { courseId: 6, courseName: "Web development" },
    { courseId: 7, courseName: ".net" },
    { courseId: 8, courseName: "Software Engineering" },
  ];

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `http://localhost:8080/update_Schedule/${id}`,
        {
          id,
          course: { courseId: courses },
          facultyName,
          lectureType,
          lectureDate,
          startTime,
          endTime,
        }
      );
      navigate("/create-schedule");
    } catch (error) {
      alert(error);
    }
  };

  const getSchedule = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/getSchedule/${id}`
      );
      setCourses(response.data.course);
      setFacultyName(response.data.facultyName);
      setLactureType(response.data.lectureType);
      setLectureDate(response.data.lectureDate);
      setStartTime(response.data.startTime);
      setEndTime(response.data.endTime);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Edit Schedule</h2>
          <form
            className="form w-50 mx-auto create-schedule-form"
            onSubmit={handleEdit}
          >
            <div className="form-group">
              <label for="exampleInputCourse">Enter Course</label>
              <select
                class="form-control"
                id="exampleInputCourse"
                required
                value={courses.courseName}
                onChange={(e) => setCourses(e.target.value)}
              >
                {courseArray &&
                  courseArray.map((element) => (
                    <option value={element.courseId}>
                      {element.courseName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Faculty Name"
                required
                value={facultyName}
                onChange={(e) => setFacultyName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Enter Lecture Type</label>
              <select
                className="form-control"
                required
                value={lectureType}
                onChange={(e) => setLactureType(e.target.value)}
              >
                <option>Enter Lecture Type</option>
                <option value="Theory">Theory</option>
                <option value="Lab">Lab</option>
              </select>
            </div>
            <div className="form-group">
              <label for="date">Enter Date</label>
              <input
                type="date"
                id="date"
                className="form-control"
                placeholder="Enter Date"
                required
                value={lectureDate}
                onChange={(e) => setLectureDate(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="starttime">Enter Start Time</label>
              <input
                type="time"
                id="starttime"
                className="form-control"
                placeholder="Enter time"
                step="2"
                required
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="endtime">Enter End Time</label>
              <input
                type="time"
                id="endtime"
                className="form-control"
                placeholder="Enter time"
                step="2"
                required
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
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

export default EditSchedule;
