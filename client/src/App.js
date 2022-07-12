import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/Login/login";
import { Drawer } from "@mui/material";
import ProfilePage from "./components/Profile";

import Message from "./components/Message";
import NoMatch from "./pages/NoMatch";
// import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Drawer />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<Message />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <div className="App">
          {" "}
          <LoginPage />{" "}
        </div>
      </Router>
    </div>
  );
}

export default App;
