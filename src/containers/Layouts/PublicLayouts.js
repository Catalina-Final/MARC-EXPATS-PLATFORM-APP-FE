import React from "react";
// import PublicNavbar from "../PublicNavbar";
import CreateCv from "../CreateCv";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import AlertMsg from "./AlertMsg";
import DashboardPage from "../DashboardPage";
import PrivateRoute from "../Routes/PrivateRoute";
import VerifyEmailPage from "../VerifyEmailPage";
import HomePage from "../HomePage";
import AddJobPage from "../AddJobPage"
import Navbar from "../PublicNavbar"

const PublicLayout = () => {
  return (
    <>
      <Container>
        <Navbar/>
        <AlertMsg />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/employer/job" component={AddJobPage} />
          <Route exact path="/user/cv" component={CreateCv} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/verify/:code" component={VerifyEmailPage} />
          <PrivateRoute exact path="/dashboard" component={DashboardPage} />

          <Route component={NotFoundPage} />
        </Switch>
      </Container>
    </>
  );
};

export default PublicLayout;
