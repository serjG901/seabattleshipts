import React from "react";
import { BoardConnect } from "./board/connect/BoardConnect";
import Background from "./common/Background";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BoardConnect />
      <Background />
    </div>
  );
}

export default App;
