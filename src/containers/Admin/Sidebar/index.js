import React from "react";
import  { useSelector } from "react-redux";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";

const Sidebar = () => {
  const currentUser = useSelector((state) => state.auth.user);

  const clientLink = (
    <Nav.Item>
      <Nav.Link
        as={NavLink}
        to="/profile/pendingApplications"
        activeClassName="active"
        strict={true}
      >
        Pending Job Applications
      </Nav.Link>
    </Nav.Item>
  );

  const employerLink = (
    <>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/profile/myjobs"
          activeClassName="active"
          strict={true}
        >
          My Jobs
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="/profile/applicants"
          activeClassName="active"
          strict={true}
        >
          Applicants
        </Nav.Link>
      </Nav.Item>
    </>
  );

  return (
    <Nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div className="sidebar-sticky pt-3">
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            to="/profile"
            activeClassName="active"
            strict={true}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
        {currentUser.accType === "client" ? clientLink : employerLink }
      </div>
    </Nav>
  );
};

export default Sidebar;
