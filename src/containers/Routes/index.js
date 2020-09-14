import React from "react";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import RegisterPage from '../RegisterPage'
import DashboardPage from '../DashboardPage'

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/register" component={RegisterPage} />
      <PrivateRoute exact path="/dashboard" component={DashboardPage} />
    </Switch>
  );
};
export default Routes;
