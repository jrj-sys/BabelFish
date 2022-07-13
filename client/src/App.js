import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import LoginPage from "./components/login";
import ProfilePage from "./components/Profile";
import Drawer from "./components/Drawer";
import Message from "./components/Message";
import NoMatch from "./pages/NoMatch";

function App() {
  return (
    <div>
      <Router>
        <Drawer />
        <Routes>
          <Route exact path="/" component={<Homepage />} />
          <Route path="/login" component={<LoginPage />} />
          <Route path="/chat" component={<Message />} />
          <Route path="/profile" component={<ProfilePage />} />
          <Route path="*" component={<NoMatch />} />
        </Routes>
        <div className="App">
          {" "}
          <LoginPage />
        </div>
      </Router>
    </div>
  );
}

export default App;
