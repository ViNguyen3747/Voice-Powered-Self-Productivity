import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Authentication from "./components/Authentication";
import Report from "./components/Report";
import TodayTasks from "./components/TodayTasks";
import UpcomingTasks from "./components/UpcomingTasks";
import UserGuide from "./components/UserGuide";
import Navbar from "./components/Navbar";
function App() {
<<<<<<< HEAD
  return(
    <div className="App">
    </div>
  ) 
=======
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={UserGuide} />
        <Route path="/today" component={TodayTasks} />
        <Route path="/upcoming" component={UpcomingTasks} />
        <Route path="/report" component={Report} />
        <Route path="/auth" component={Authentication} />
      </Switch>
    </Router>
  );
>>>>>>> 09f6520cfeb892e90d6b1ac49211ac7bccc3c6cd
}

export default App;
