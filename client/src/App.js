import React from "react";
import "./App.css";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Window from "./window";
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
  return (
    <>
      <ApolloProvider client={client}>
        <Window />
      </ApolloProvider>
      <PushToTalkButtonContainer>
        <PushToTalkButton />
      </PushToTalkButtonContainer>
    </>
  );
}

export default App;
