import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../../images/logo.svg";
import { useSelector } from "react-redux";
import { authActions } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PublicNavbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(authActions.logout());
  };
  const authLinks = (
    <Nav>
      <Nav.Link as={Link} to="/admin/profile">
        <FontAwesomeIcon icon="chart-line" size="sm" /> My Profile
      </Nav.Link>
      <Nav.Link onClick={handleLogout}>
        <FontAwesomeIcon icon="sign-out-alt" size="sm" /> Logout
      </Nav.Link>
    </Nav>
  );
  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <FontAwesomeIcon icon="registered" size="sm" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <FontAwesomeIcon icon="sign-in-alt" size="sm" /> Login
      </Nav.Link>
    </Nav>
  );

  return (
      <Navbar bg="primary" variant="dark" className="blue-gradient">
        <Navbar.Brand as={Link} to="/">
          Teach Saigon
        </Navbar.Brand>
        <Nav className="mr-auto">
        <Nav className="mr-auto"></Nav>
          {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
          
        </Nav>
        
      </Navbar>

     
  );
};

export default PublicNavbar;
