import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import "./App.css";
import Authentication from "./components/Authentication";
import Report from "./components/Report";
import TodayTasks from "./components/TodayTasks";
import UpcomingTasks from "./components/UpcomingTasks";
import UserGuide from "./components/UserGuide";
import Navbar from "./components/Navbar";

const GET_TASKS = gql`
  query Tasks {
    tasks {
      id
      name
      category
      priorityLevel
      duration
      isDone
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_TASKS);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>There was an error</div>;
  return (
    <Router>
      <Navbar />
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
