import React, { useEffect, useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditStudent = () => {
  const { prn } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [joiningMonthAndYear, setJoiningMonthAndYear] = useState(null);
  const [city, setCity] = useState("");
  const [tenthMarks, setTenthMarks] = useState(null);
  const [twelthMarks, setTwelthMarks] = useState(null);
  const [diplomaMarks, setDiplomaMarks] = useState(null);
  const [graduationMarks, setGraduationMarks] = useState(null);
  const [postGraduationMarks, setPostGraduationMarks] = useState(null);
  const [workExperience, setWorkExperience] = useState(null);
  const navigate = useNavigate();

  const handleEdit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8080/student",{
        prn,
        firstName,
        lastName,
        dateOfBirth,
        gender,
        email,
        phone,
        joiningMonthAndYear,
        city,
        tenthMarks,
        twelthMarks,
        diplomaMarks,
        graduationMarks,
        postGraduationMarks,
        workExperience,
      });
      alert("Updated successfully");
      navigate("/generate-student-report");
    } catch (error) {
      alert(error)
    }
  };

  const getStudent = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/student/${prn}`);
      setFirstName(response.data.firstName);
      setLastName(response.data.lastName);
      setDateOfBirth(response.data.dateOfBirth);
      setGender(response.data.gender);
      setEmail(response.data.email);
      setPhone(response.data.phone);
      setJoiningMonthAndYear(response.data.joiningMonthAndYear);
      setCity(response.data.city);
      setTenthMarks(response.data.tenthMarks);
      setTwelthMarks(response.data.twelthMarks);
      setDiplomaMarks(response.data.diplomaMarks);
      setGraduationMarks(response.data.graduationMarks);
      setPostGraduationMarks(response.data.postGraduationMarks);
      setWorkExperience(response.data.workExperience);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getStudent();
  }, []);
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Edit Student</h2>
          <form
            className="w-75 mx-auto form register-student-form my-5"
            onSubmit={handleEdit}
          >
            <div className="row form-group">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label for="exampleInputDOB">Enter DOB</label>
              <input
                type="date"
                className="form-control"
                id="exampleInputDOB"
                placeholder="Enter DOB"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputGender">
                Enter Gender
              </label>
              <select
                class="form-control"
                id="exampleInputGender"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputMonth">
                Enter Joining Month and Year
              </label>
              <input
                type="month"
                className="form-control"
                id="exampleInputMonth"
                value={joiningMonthAndYear}
                onChange={(e) => setJoiningMonthAndYear(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Enter City"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter 10th Percentage or CGPA"
                value={tenthMarks}
                onChange={(e) => setTenthMarks(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter 12th Percentage or CGPA"
                value={twelthMarks}
                onChange={(e) => setTwelthMarks(e.target.value)}
                required={!diplomaMarks}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Diploma Percentage or CGPA"
                value={diplomaMarks}
                onChange={(e) => setDiplomaMarks(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Graduation Percentage or CGPA"
                value={graduationMarks}
                onChange={(e) => setGraduationMarks(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Post Graduation Percentage or CGPA"
                value={postGraduationMarks}
                onChange={(e) => setPostGraduationMarks(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter Work Experience (In years)"
                value={workExperience}
                onChange={(e) => setWorkExperience(e.target.value)}
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

export default EditStudent;
