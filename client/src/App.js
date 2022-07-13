import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  // createHttpLink,
  split,
  HttpLink
} from '@apollo/client'
// import { setContext } from '@apollo/client/link/context';
import Homepage from "./components/Homepage";
import LoginPage from "./components/Login/login";
import { Drawer } from "@mui/material";
import ProfilePage from "./components/Profile";

import Chat from "./components/Chat";
import NoMatch from "./pages/NoMatch";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { getMainDefinition } from '@apollo/client/utilities'
import { createClient } from 'graphql-ws'

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const httpLink = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:3001/graphql'
}))

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink
)

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <Drawer />
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <div className="App">
            {" "}
            <LoginPage></LoginPage>
            {" "}
          </div>
        </Router>
      </div>

    </ApolloProvider>
  );
}

export default App;
