import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RegisterPage from '../RegisterPage'
import DashboardPage from '../DashboardPage'
import LoginPage from "../LoginPage";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/login" component={LoginPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
    </Switch>
  );
};
export default Routes;
