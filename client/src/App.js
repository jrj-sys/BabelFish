import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  // createHttpLink,
} from '@apollo/client'
import { GraphQLWsLink } from '@apollo/client/link/subscriptions'
import { createClient } from 'graphql-ws'
import { createServer } from 'http';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
// import { setContext } from '@apollo/client/link/context';
import Homepage from "./components/Homepage";
import LoginPage from "./components/Login/login";
import { Drawer } from "@mui/material";
import ProfilePage from "./components/Profile";

import Chat from "./components/Chat";
import NoMatch from "./pages/NoMatch";

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:3000/subscriptions'
}))

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
