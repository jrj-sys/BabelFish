import React from "react";
import Homepage from "./components/Homepage";
import LoginPage from "./components/login";
import ProfilePage from './components/Profile'
// import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Homepage />
    <div className="App">
      {" "}
      <LoginPage />{" "}
    </div>
      {/* <ProfilePage /> */}
    </div>
  );
}

export default App;
