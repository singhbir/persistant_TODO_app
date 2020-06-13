import React from "react";
import Header from "./Components/Header";
import Taskbar from "./Components/Taskbar";
import Tasklist from "./Components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Taskbar />
      <Tasklist />
    </div>
  );
}

export default App;
