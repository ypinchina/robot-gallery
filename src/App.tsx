import React from "react";
import "./App.css";
import robots from "./mockdata/robots.json";
import Robots from "./components/robots";
function App() {
  return (
    <ul>
      {robots.map((robot) => (
        <Robots key={robot.id} {...robot} />
      ))}
    </ul>
  );
}

export default App;
