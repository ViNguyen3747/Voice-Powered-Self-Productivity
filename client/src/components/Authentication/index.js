import React from "react";
import Register from "./registration";
import Sinin from "./signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../common/Styles/commonStyles.css";
import "./Auth.css";
const Index = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route>
            <Sinin />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
