import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  // createHttpLink,
} from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';
// import Homepage from "./components/Homepage";
import LoginPage from "./components/Login/login";
import Drawer from "./components/Drawer";
import ProfilePage from "./components/Profile";
import ChatApp from "./components/ChatApp";
import NoMatch from "./pages/NoMatch";
import Auth from "./utils/auth";

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? Bearer ${token} : '',
//     },
//   };
// });

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  if (Auth.loggedIn()) {
    return (
      <ApolloProvider client={client}>
        <div>
          <Router>
            <Drawer />

            <Routes>
              {/* <Route path="/" element={<Homepage />} /> */}
              <Route path="/chat" element={<ChatApp />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
            <div className="App"></div>
          </Router>
        </div>
      </ApolloProvider>
    );
  } else {
    return (
      <ApolloProvider client={client}>
        <LoginPage />
      </ApolloProvider>
    );
  }
}

export default App;
