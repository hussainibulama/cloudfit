import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "./routes";
const Index = (props) => (
  <Router>
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  </Router>
);
export default Index;
