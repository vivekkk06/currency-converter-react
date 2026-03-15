import React from "react";
import Converter from "./components/Converter";
import TickerBar from "./components/TickerBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TickerBar />
      <Converter />
    </div>
  );
}

export default App;