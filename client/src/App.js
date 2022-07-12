import React from "react";
import Homepage from "./components/Homepage";
<<<<<<< HEAD
import Message from "./components/Message"

function App() {
  return (
    <div >
      <Message />
=======
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
>>>>>>> dfddea71c9b67ddea32e63df6a95f77307e64f85
    </div>
  );
}

export default App;
