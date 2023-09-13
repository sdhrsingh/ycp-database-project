import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div
        className="nav flex-column nav-pills bg-light"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <NavLink
          to="/attendence"
          className="nav-link"
          id="v-pills-home-tab"
          data-toggle="pill"
          href="#v-pills-home"
          role="tab"
          aria-controls="v-pills-home"
          aria-selected="true"
        >
          Attendence
        </NavLink>
        <NavLink
          to="/assignments"
          className="nav-link"
          id="v-pills-profile-tab"
          data-toggle="pill"
          href="#v-pills-profile"
          role="tab"
          aria-controls="v-pills-profile"
          aria-selected="false"
        >
          Assignments
        </NavLink>
        <NavLink
          to="/schedule"
          className="nav-link"
          id="v-pills-messages-tab"
          data-toggle="pill"
          href="#v-pills-messages"
          role="tab"
          aria-controls="v-pills-messages"
          aria-selected="false"
        >
          Schedule
        </NavLink>
        <a
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-settings"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Feedback
        </a>
        <NavLink
          to="/notification"
          className="nav-link"
          id="v-pills-settings-tab"
          data-toggle="pill"
          href="#v-pills-settings"
          role="tab"
          aria-controls="v-pills-settings"
          aria-selected="false"
        >
          Notification
        </NavLink>
      </div>
    </>
  );
};

export default NavBar;
