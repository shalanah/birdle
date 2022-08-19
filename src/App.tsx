import React, { useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Keyboard from "./Keyboard";
import { maxAttempts } from "./utils";
import Game from "./Game";
import styled from "styled-components";
import Toast from "./Toast";
import usePrevious from "./hooks/usePrevious";
import useGetWordList from "./hooks/useGetWordList";

const navHeight = 66;
const Nav = styled.header`
  font-family: Kurale, sans-serif;
  height: ${navHeight}px;
  border-bottom: 1px solid #3a3a3c;
  display: flex;
  font-size: 16px;
  line-height: 1;
`;
const Main = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const todaysWord = "grant";
const defaultError: string[] = [];
const defaultAttempts: string[] = [];

// TODO: Put attempts, current into context?
// TODO: Move to reducer?
function App() {
  const [attempts, setAttempts] = useState(["pairs", "grain"]);
  const [current, setCurrent] = useState("");
  const [errors, setErrors] = useState(defaultError);
  const prevErrorCount = usePrevious(errors.length);
  const allowedWords = useGetWordList();

  // TODO: Look into ways to avoid using current in here...
  const onKey = async (key: string) => {
    // TODO: Don't allow if max attempts reached
    if (alphabet.includes(key) && current.length < todaysWord.length) {
      setCurrent((prev) => prev + key);
      return;
    }
    if (["delete", "backspace"].includes(key)) {
      setCurrent((prev) => prev.slice(0, -1));
      return;
    }
    if (key === "enter") {
      // Too short
      if (current.length !== todaysWord.length) {
        setErrors((prev) => [...prev, "Not enough letters"]);
        return;
      }

      // Not a word
      if (!(allowedWords || [""]).includes(current)) {
        setErrors((prev) => [...prev, "Not in word list"]);
        return;
      }

      setAttempts((prev) => [...prev, current]);
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
        <Nav>
          <h1 style={{ margin: "auto" }}>Wordley</h1>
        </Nav>
        <Game
          errors={errors}
          attempts={attempts}
          current={current}
          actual={actual}
        />
        <Keyboard attempts={attempts} actual={actual} onKeyDown={onKey} />
        <Toast
          // errors={errors}
          key={errors.length}
          text={errors[errors.length - 1]}
          style={{ top: navHeight + 15 }}
        />
      </Main>
    </>
  );
}

export default App;
