import React from "react";
import GlobalStyles from "./GlobalStyles";
import Keyboard from "./Keyboard";
import Game from "./Game";
import styled from "styled-components";
import Toast from "./Toast";
import { ModalFail, ModalSuccess } from "./ModalsDone";
import useGameContext from "./hooks/useGameContext";
import { navHeight } from "./utils";
import Nav from "./Nav";

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
// TODO: Switch from arrays to string functions
function App() {
  const { errors, attempts, todaysWord, allowedWords, wiki, fail, success } =
    useGameContext();
  return (
    <>
      <GlobalStyles />
      <Main>
        <Nav />
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
