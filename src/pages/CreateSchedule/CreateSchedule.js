import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateSchedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [id, setId] = useState(null);
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

  const handleAdd = async (e) => {
    e.preventDefault();
    console.log(id);
    console.log(courses);
    console.log(facultyName);
    console.log(lectureType);
    console.log(lectureDate);
    console.log(startTime);
    console.log(endTime);
    try {
      const response = await axios.post("http://localhost:8080/addSchedule", {
        id,
        course: { courseId: courses },
        facultyName,
        lectureType,
        lectureDate,
        startTime,
        endTime,
      });
      getSchedule();
    } catch (error) {
      alert(error);
    }
  };

  const handleEdit = async (editId) => {
    navigate(`/edit-schedule/${editId}`);
  };

  const getSchedule = async () => {
    try {
      const response = await axios.get("http://localhost:8080/getSchedule_all");
      console.log(response.data);
      setSchedule(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const handleDelete = async (deleteId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8080/delete_Schedule/${deleteId}`
      );
      getSchedule();
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
          <h2 className="mt-3 text-center mb-5">Create Schedule</h2>
          <form
            className="form w-50 mx-auto create-schedule-form"
            onSubmit={handleAdd}
          >
            <div className="form-group">
              <input
                type="Number"
                className="form-control"
                placeholder="Enter Id"
                required
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label for="exampleInputCourse">Enter Course</label>
              <select
                class="form-control"
                id="exampleInputCourse"
                required
                value={courses}
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
              Add
            </button>
          </form>
          <table className="table table-bordered mt-5">
            <thead>
              <tr>
                <th scope="col">Id</th>
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
                    <td>{element.id}</td>
                    <td>{element.lectureType}</td>
                    <td>{element.lectureDate}</td>
                    <td>{element.course.courseName}</td>
                    <td>{element.facultyName}</td>
                    <td>
                      {element.startTime} to {element.endTime}
                    </td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-success mr-3"
                        onClick={() => handleEdit(element.id)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
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

export default CreateSchedule;
