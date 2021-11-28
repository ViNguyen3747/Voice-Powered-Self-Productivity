import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSpeechContext } from "@speechly/react-client";

import Authentication from "./components/Authentication";
import Report from "./components/Report";
import TodayTasks from "./components/TodayTasks";
import UpcomingTasks from "./components/UpcomingTasks";
import UserGuide from "./components/UserGuide";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import useAuth from "./utils/Hooks/useAuth";

const Window = () => {
  const { segment } = useSpeechContext();
  const [logout] = useAuth();
  useEffect(() => {
    if (segment) {
      if (segment.isFinal) {
        console.log(segment);
        switch (segment.intent.intent) {
          case "authentication":
            logout();
            break;
          case "routing":
            switch (segment.entities[0].value) {
              case "TODAY":
                window.location.assign("/today");
                break;
              case "USER GUIDE":
                window.location.assign("/");
                break;
              case "FUTURE":
                window.location.assign("/upcoming");
                break;
              case "REPORT":
                window.location.assign("/report");
                break;
              default:
                break;
            }
            break;
          default:
            break;
        }
      }
    }
  }, [segment]);
  return (
    <Router>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <Navbar />
      <Switch>
        <Route path="/" exact component={UserGuide} />
        <Route path="/today">
          <TodayTasks />
        </Route>
        <Route path="/upcoming" component={UpcomingTasks} />
        <Route path="/report">
          <Report />
        </Route>
        <Route path="/auth" component={Authentication} />
      </Switch>
    </Router>
  );
};

export default Window;
