import React from "react";
import "./App.css";
import Decrement from "./Decrement.js";

function App() {
  return (
    <>
      <Decrement start={5} />
      <Decrement start={10} />
      <Decrement start={15} />
    </>
  );
}

export default App;
