import React from "react";
import Register from "./registration";
import Signin from "./signin";
import "./Auth.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const Index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route>
            <Signin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
