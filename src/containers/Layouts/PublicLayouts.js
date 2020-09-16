import React from "react";
// import PublicNavbar from "../PublicNavbar";  
import CreateEditViewCv from "../CreateEditViewCv";
import LoginPage from "../LoginPage";
import RegisterPage from "../RegisterPage";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import AlertMsg from "./AlertMsg";
import DashboardPage from '../DashboardPage'
import PrivateRoute from "../Routes/PrivateRoute";
import VerifyEmailPage from "../VerifyEmailPage";

const PublicLayout = () => {
  return (
    <>
      {/* <PublicNavbar /> */}
      <Container>
        <AlertMsg />
        <Switch>
          <Route exact path="/user/cv" component={CreateEditViewCv} />
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
