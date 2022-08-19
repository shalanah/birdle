/// <reference types="vite-plugin-svgr/client" />
import React, { useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import { useState } from "react";
import Keyboard from "./Keyboard";
import { maxAttempts, getTodaysWord } from "./utils";
import Game from "./Game";
import styled from "styled-components";
import Toast from "./Toast";
import useGetWordList from "./hooks/useGetWordList";
import birds from "./birds";
import { ReactComponent as Bird } from "./assets/bird.svg";
import { ModalFail, ModalSuccess } from "./ModalsDone";
import useLocalStorage from "./hooks/useLocalStorage";

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
const NonInteractiveOverlay = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  background: transparent;
  pointer-events: none;
`;

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
const defaultError: string[] = [];
const defaultAttempts: string[] = [];

// TODO: Put attempts, current into context?
// TODO: Make more types and interfaces
function App() {
  const birdWords = birds.map((bird) => bird.name);
  const [attempts, setAttempts] = useState(defaultAttempts);
  const [current, setCurrent] = useState("");
  const [errors, setErrors] = useState(defaultError);
  const allowedWords = useGetWordList();
  const { name: todaysWord, wiki } = getTodaysWord(birds);
  const actual = todaysWord.split("");
  const success = attempts.length ? attempts.includes(todaysWord) : false;
  const fail = attempts.length === maxAttempts && !success;
  const done = success || fail;
  useLocalStorage({ todaysWord, attempts, setAttempts });

  // TODO: Look into ways to avoid using current in here...
  const onKey = async (key: string) => {
    if (done) return; // nothing to do... done
    if (alphabet.includes(key) && current.length < todaysWord.length) {
      setCurrent((prev) => prev + key);
      return;
    }
    if (["delete", "backspace"].includes(key)) {
      setCurrent((prev) => prev.slice(0, -1));
      return;
    }
    if (key === "enter") {
      if (current.length !== todaysWord.length) {
        setErrors((prev) => [...prev, "Enter more letters"]);
        return;
      }
      if (
        !([...(allowedWords || []), ...birdWords] || [""]).includes(current)
      ) {
        setErrors((prev) => [...prev, "Not in word list"]);
        return;
      }
      setAttempts((prev) => [...prev, current]);
      setCurrent("");
      return;
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return; // don't want ctrl/alt/meta
      onKey(e.key.toLowerCase());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKey]);

  return (
    <>
      <GlobalStyles />
      <Main>
        <Nav>
          <h1
            style={{
              margin: "auto",
              display: "flex",
              alignItems: "center",
              gap: 5,
              justifyContent: "center",
            }}
          >
            <Bird style={{ width: 50, height: 50, paddingTop: 4 }} />
            <span style={{ paddingRight: 10 }}>Birdle</span>
          </h1>
        </Nav>
        <Game
          errors={errors}
          attempts={attempts}
          current={current}
          actual={actual}
        />
        <Keyboard attempts={attempts} actual={actual} onKeyDown={onKey} />
        {errors.map((text, i) => {
          return <Toast key={i} text={text} style={{ top: navHeight + 15 }} />;
        })}
        {success && (
          <ModalSuccess
            todaysWord={todaysWord}
            guessCount={attempts.length}
            wiki={wiki}
          />
        )}
        {fail && <ModalFail todaysWord={todaysWord} wiki={wiki} />}
        {/* Stalling while loading words... could put a spinner here */}
        {(allowedWords || []).length === 0 && <NonInteractiveOverlay />}
      </Main>
    </>
  );
}

export default App;
