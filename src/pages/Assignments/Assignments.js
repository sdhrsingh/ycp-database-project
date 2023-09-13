import React, { useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";
import StudentsHeader from "../../components/StudentHeader/StudentsHeader";

const Assignments = () => {
  const [assignments, setAssignments] = useState([
    { id: 1, title: "Assignment1", status: true },
    { id: 2, title: "Assignment2", status: true },
    { id: 3, title: "Assignment3", status: false },
    { id: 4, title: "Assignment4", status: false },
    { id: 5, title: "Assignment5", status: true },
  ]);

  return (
    <div className="dashboard">
      <StudentsHeader />
      <div className="main">
        <NavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Assignments</h2>
          <table className="table table-bordered w-75 m-auto">
            <tbody>
              {assignments &&
                assignments.map((assignment) => (
                  <tr key={assignment.id}>
                    <td>{assignment.title}</td>
                    <td>{assignment.status ? "Completed" : <input type="file" />}</td>
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

export default Assignments;
