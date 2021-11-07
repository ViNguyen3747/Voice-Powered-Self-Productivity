import React from "react";
import "../common/Styles/commonStyles.css";
import Register from "./registration"
import Sinin from './signin'
import {BrowserRouter as Router, Route, Switch,} from "react-router-dom"
const Index = ()=>{


  return (
      <div>
          <Router>
        <Switch>
            <Route exact path='/'>
                <Register/>
            </Route>
            <Route exact path='/login'>
                <Sinin/>
            </Route>
        </Switch>
    </Router>
      </div>
    
    
  );
}


export default Index;
