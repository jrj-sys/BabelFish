import React from "react";
import Homepage from "./components/Homepage";
import Message from "./components/Message"
import Drawer from './components/Drawer'

function App() {
  return (
    <div >
      <Drawer />
      <Message></Message>
    </div>
  );
}

export default App;
