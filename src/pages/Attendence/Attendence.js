import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";

const Attendence = () => {
  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <div className="bg-light content-section">
          <h2 className="text-center mt-3">Attendence</h2>
          <h4 className="mt-3 ml-5">Attendence Percentage(%): 10</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Attendence;
