import React, { useState } from "react";
import AdminHeader from "../../components/AdminHeader/AdminHeader";
import AdminNavBar from "../../components/AdminNavBar/AdminNavBar";
import Footer from "../../components/Footer/Footer";
import { DatePicker } from "antd";

const GenerateAttendenceReport = () => {
  const { RangePicker } = DatePicker;
  return (
    <div className="dashboard">
      <AdminHeader />
      <div className="main">
        <AdminNavBar />
        <div className="bg-light content-section">
          <h2 className="mt-3 text-center mb-5">Generate Attendence Report</h2>
          <form className="form w-50 m-auto">
            <RangePicker />
            <button type="submit" className="btn btn-primary mt-3">
              Generate
            </button>
          </form>
          <table className="table table-bordered mt-5 w-50 mx-auto">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">PRN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">12/12/12</th>
                <td>230343420027</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GenerateAttendenceReport;
