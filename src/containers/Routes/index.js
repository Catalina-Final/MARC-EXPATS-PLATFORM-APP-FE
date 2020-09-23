import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLayout from "../Layouts/AdminLayout";
import PublicLayout from "../Layouts/PublicLayouts.js";
import PrivateRoute from "../Routes/PrivateRoute";

const Routes = (props) => {
  return (
    <Switch>
      <PrivateRoute path="/profile" component={AdminLayout} />
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
