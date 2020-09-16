import React from "react";
import { Route, Switch } from "react-router-dom";
import PublicLayout from "../Layouts/PublicLayouts.js"

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" component={PublicLayout} />
    </Switch>
  );
};
export default Routes;
