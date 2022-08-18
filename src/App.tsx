import React from "react";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Keyboard from "./Keyboard";
import { maxAttempts } from "./utils";
import Game from "./Game";

const todaysWord = "grant";

// TODO: Use grid layout instead of flexbox?
// TODO: Put attempts, current into context?
function App() {
  const [attempts, setAttempts] = useState(["pairs", "grain"]);
  const [current, setCurrent] = useState("tra");
  if (attempts.length >= maxAttempts) return <div>Game Over</div>;
  const actual = todaysWord.split("");
  return (
    <>
      <GlobalStyles />
      <Game attempts={attempts} current={current} actual={actual} />
      <Keyboard attempts={attempts} actual={actual} />
    </>
  );
}

export default App;
