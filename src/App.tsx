/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import GlobalStyles from "./GlobalStyles";
import Keyboard from "./Keyboard";
import Game from "./Game";
import styled from "styled-components";
import Toast from "./Toast";
import { ReactComponent as Bird } from "./assets/bird.svg";
import { ModalFail, ModalSuccess } from "./ModalsDone";
import useGameContext from "./hooks/useGameContext";

const navHeight = 66;
const Nav = styled.header`
  font-family: Kurale, sans-serif;
  height: ${navHeight}px;
  border-bottom: 1px solid #3a3a3c;
  display: flex;
  font-size: 16px;
  line-height: 1;
  h1 {
    margin: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
  }
  svg {
    width: 50px;
    height: 50px;
    padding-top: 4px;
  }
  span {
    padding-right: 10px;
  }
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

// TODO: Make more types and interfaces
function App() {
  const { errors, attempts, todaysWord, allowedWords, wiki, fail, success } =
    useGameContext();
  return (
    <>
      <GlobalStyles />
      <Main>
        <Nav>
          <h1>
            <Bird />
            <span>Birdle</span>
          </h1>
        </Nav>
        <Game />
        <Keyboard />
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
