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
        {/* Toasts */}
        {errors.map((text, i) => {
          return <Toast key={i} text={text} style={{ top: navHeight + 15 }} />;
        })}
        {/* Success */}
        {success && (
          <ModalSuccess
            todaysWord={todaysWord}
            guessCount={attempts.length}
            wiki={wiki}
          />
        )}
        {/* Fail */}
        {fail && <ModalFail todaysWord={todaysWord} wiki={wiki} />}
        {/* Loading - Stalling while loading words... could put a spinner here */}
        {(allowedWords || []).length === 0 && (
          <div className="pos-full" style={{ pointerEvents: "none" }} />
        )}
      </Main>
    </>
  );
}

export default App;
