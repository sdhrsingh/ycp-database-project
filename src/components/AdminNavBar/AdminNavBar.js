import React from "react";
import { NavLink } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <>
      <div
        className="nav flex-column nav-pills bg-light"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <NavLink
          to="/generate-attendence-report"
          className="nav-link"
          id="v-pills-profile-tab"
          data-toggle="pill"
          href="#v-pills-profile"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Generate Attendence Report
        </NavLink>
        <NavLink
          to="/create-schedule"
          className="nav-link"
          id="v-pills-messages-tab"
          data-toggle="pill"
          href="#v-pills-messages"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Create Schedule
        </NavLink>
        <NavLink
          to="/push-notification"
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-settings"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Push Notification
        </NavLink>
        <NavLink
          to="/generate-student-report"
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-settings"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Generate Student Report
        </NavLink>
      </div>
    </>
  );
};

export default AdminNavBar;
