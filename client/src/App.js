import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import "./App.css";
import LoginPage from "./components/login";
import { Drawer } from "@mui/material";

function App() {
  return (
    <div>
      <Drawer />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chat" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/thought/:id" element={<SingleThought />} />
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
