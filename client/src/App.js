import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useQuery } from "@apollo/client";
import "./App.css";
import Authentication from "./components/Authentication";
import Report from "./components/Report";
import TodayTasks from "./components/TodayTasks";
import UpcomingTasks from "./components/UpcomingTasks";
import UserGuide from "./components/UserGuide";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { GET_TASKS } from "./utils/query";

function App() {
  const { loading, error, data } = useQuery(GET_TASKS);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error</div>;
  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path="/" exact component={UserGuide} />
        <Route path="/today">
          <TodayTasks tasks={data} />
        </Route>
        <Route path="/upcoming" component={UpcomingTasks} />
        <Route path="/report">
          <Report data={data} />
        </Route>
        <Route path="/auth" component={Authentication} />
      </Switch>
    </Router>
  );
}

export default App;
