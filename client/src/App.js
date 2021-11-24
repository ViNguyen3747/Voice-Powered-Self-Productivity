import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Authentication from "./components/Authentication";
import Report from "./components/Report";
import TodayTasks from "./components/TodayTasks";
import UpcomingTasks from "./components/UpcomingTasks";
import UserGuide from "./components/UserGuide";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const link = createHttpLink({ uri: "/graphql" });

const authLink = setContext((_, { headers }) => {
  // Retrieve the authorization token from local storage.
  const token = localStorage.getItem("id_token");

  // Set the HTTP headers
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache(),
});

function App() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>There was an error</div>;
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
