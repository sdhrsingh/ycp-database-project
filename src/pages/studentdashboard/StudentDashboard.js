import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";

const StudentDashboard = () => {
  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <div className="bg-light content-section">
          <h3 className="mt-5 ml-5 text-danger">Assignments Pending: 3</h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
 