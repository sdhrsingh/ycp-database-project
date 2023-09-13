import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const GenerateStudentReport = () => {
  const [prn, setPrn] = useState(null);
  const [studentData, setStudentData] = useState({});
  const navigate = useNavigate();

  const handleGenerate = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:8080/student/${prn}`)
      console.log(response.data);
      setStudentData(response.data);
    } catch (error) {
      alert(error);
    }
  }

  const handleEdit = () => {
    navigate(`/edit-student/${prn}`);
  };

  const handleDelete = async() => {
    try {
      const response = await axios.delete(`http://localhost:8080/student/${prn}`);
      alert("student deleted successfully");
    } catch (error) {
      alert(error);
    }
  }
  
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Generate Student Report</h2>
          <form className="form w-50 m-auto" onSubmit={handleGenerate}>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter PRN"
                value={prn}
                onChange={(e) => setPrn(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Generate
            </button>
          </form>
          <div className="student-details mt-5 w-50 mx-auto d-block p-5">
            <h5>PRN: {studentData.prn}</h5>
            <h5>First Name: {studentData.firstName}</h5>
            <h5>Last Name: {studentData.lastName}</h5>
            <h5>DOB: {studentData.dateOfBirth}</h5>
            <h5>Gender: {studentData.gender}</h5>
            <h5>Email: {studentData.email}</h5>
            <h5>Phone No.: {studentData.phone}</h5>
            <h5>Joining Month & Year: {studentData.joiningMonthAndYear}</h5>
            <h5>City: {studentData.city}</h5>
            <h5>10th (% or CGPA): {studentData.tenthMarks}</h5>
            <h5>12th (% or CGPA): {studentData.twelthMarks}</h5>
            <h5>Diploma (% or CGPA): {studentData.diplomaMarks}</h5>
            <h5>Graduation (% or CGPA): {studentData.graduationMarks}</h5>
            <h5>Post Graduation (% or CGPA): {studentData.postGraduationMarks}</h5>
            <h5>Work Experience: {studentData.workExperience}</h5>
            <div>
              <div className="d-flex justify-content-center mt-3">
                <button
                  type="button"
                  className="btn btn-success mr-3"
                  onClick={handleEdit}
                >
                  Edit
                </button>
                <button type="button" className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenerateStudentReport;
