import React from "react";
import Homepage from "./components/Homepage";
import "./App.css";
import LoginPage from "./components/login";

function App() {
  return (
    <div>
      <Homepage></Homepage>
    <div className="App">
      {" "}
      <LoginPage />{" "}
    </div>
    </div>
  );
}

export default App;
