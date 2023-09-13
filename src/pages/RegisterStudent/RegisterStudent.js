import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterStudent = () => {
  const [prn, setPrn] = useState(null);
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
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/student", {
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
        password,
      });
      console.log(response);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
    navigate("/student-login");
  };

  return (
    <>
      <section className="vh-100 login">
        <h1 className="heading text-center">YCP DATABASE MANAGEMENT</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 className="mt-5">Register Student</h1>
          <form
            className="w-75 mx-auto form register-student-form my-5"
            onSubmit={handleAdd}
          >
            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Enter PRN"
                value={prn}
                onChange={(e) => setPrn(e.target.value)}
                required
              />
            </div>
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
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary d-block w-100">
              Add
            </button>
          </form>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default RegisterStudent;
