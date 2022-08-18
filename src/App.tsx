import React from "react";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Keyboard from "./Keyboard";
import { maxAttempts } from "./utils";
import Game from "./Game";

const letters = "abcdefghijklmnopqrstuvwxyz".split("");

const todaysWord = "grant";

// TODO: Use grid layout instead of flexbox?
// TODO: Put attempts, current into context?
function App() {
  const [attempts, setAttempts] = useState(["pairs", "grain"]);
  const [current, setCurrent] = useState("tra");

  // TODO: Use for keydown event
  const onKeyDown = (key: string) => {
    // TODO: Don't allow if max attempts reached
    if (letters.includes(key) && current.length < todaysWord.length) {
      setCurrent(current + key);
      return;
    }
    if (["delete", "backspace"].includes(key)) {
      setCurrent(current.slice(0, -1));
      return;
    }
    if (key === "enter") {
      // TODO: Need to do some checking here if real word
      setAttempts([...attempts, current]);
      setCurrent("");
      return;
    }
  };

  if (attempts.length >= maxAttempts) return <div>Game Over</div>;
  const actual = todaysWord.split("");
  return (
    <>
      <GlobalStyles />
      <Game attempts={attempts} current={current} actual={actual} />
      <Keyboard attempts={attempts} actual={actual} onKeyDown={onKeyDown} />
    </>
  );
}

export default App;
