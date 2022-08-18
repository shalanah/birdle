import React, { useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Keyboard from "./Keyboard";
import { maxAttempts } from "./utils";
import Game from "./Game";
import styled from "styled-components";

const Nav = styled.header`
  height: 66px;
  border-bottom: 1px solid #3a3a3c;
`;
const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const letters = "abcdefghijklmnopqrstuvwxyz".split("");
const todaysWord = "grant";

// TODO: Put attempts, current into context?
function App() {
  const [attempts, setAttempts] = useState(["pairs", "grain"]);
  const [current, setCurrent] = useState("tra");

  // TODO: Look into ways to avoid using current in here...
  const onKey = (key: string) => {
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

  useEffect(() => {
    const onKeyUp = (e: KeyboardEvent) => {
      onKey(e.key.toLowerCase());
    };
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [onKey]);

  if (attempts.length >= maxAttempts) return <div>Game Over</div>;
  const actual = todaysWord.split("");
  return (
    <>
      <GlobalStyles />
      <Main>
        <Nav />
        <Game attempts={attempts} current={current} actual={actual} />
        <Keyboard attempts={attempts} actual={actual} onKeyDown={onKey} />
      </Main>
    </>
  );
}

export default App;
