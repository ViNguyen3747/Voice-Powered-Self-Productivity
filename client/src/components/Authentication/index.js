import React from "react";
import Register from "./registration";
import Sinin from "./signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Auth.css";
const Index = () => {
  return (
    <div>
      <Router>
        <Switch>
<<<<<<< HEAD
          <Route exact path="/">
            <Register />
          </Route>
          <Route>
            <Sinin />
          </Route>
=======
            <Route exact path='/'>
                <Register/>
            </Route>
            <Route exact path='/login'>
                <Sinin/>
            </Route>
>>>>>>> fc0019057289de81011588aa0047560bbe582f9f
        </Switch>
      </Router>
    </div>
  );
};

export default Index;
