import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import {
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from "@speechly/react-client";

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
  const { speechState } = useSpeechContext();
  // const main = useRef(null);

  // const executeScroll = () => main.current.scrollIntoView();

  // useEffect(() => {
  //   if (speechState === SpeechState.Recording) {
  //     executeScroll();
  //   }
  // }, [speechState]);
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>There was an error</div>;
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
