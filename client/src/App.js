import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  // createHttpLink,
} from "@apollo/client";
import { createTheme, ThemeProvider, colors } from "@mui/material";
// import { setContext } from '@apollo/client/link/context';
import Homepage from "./components/Homepage";
import LoginPage from "./components/Login/login";
import Drawer from "./components/Drawer";
import ProfilePage from "./components/Profile";
import ChatApp from "./components/ChatApp";
import NoMatch from "./pages/NoMatch";
import Auth from "./utils/auth";
import "@fontsource/black-han-sans";

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? Bearer ${token} : '',
//     },
//   };
// });

const theme = createTheme({
  palette: {
    primary: {
      light: "#8c0e14",
      main: "#C9141D",
      dark: "#d3434a",
      contrastText: "#fff",
    },
    secondary: {
      light: "#af7614",
      main: "#FAA91D",
      dark: "#fbba4a",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Black Han sans",
  },
});

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  uri: "https://babelfishapp.herokuapp.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  if (Auth.loggedIn()) {
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
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
