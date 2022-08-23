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
  const { errors, allowedWordsLoading, fail, success } = useGameContext();
  return (
    <>
      <GlobalStyles />
      <Main>
        <Nav />
        <Game />
        <Keyboard />
        {errors.map((error, i) => {
          return <Toast key={i} text={error} style={{ top: navHeight + 15 }} />;
        })}
        {success && <ModalSuccess />}
        {fail && <ModalFail />}
        {/* Stalling while loading words... could put a spinner here */}
        {allowedWordsLoading && (
          <div className="pos-full" style={{ pointerEvents: "none" }} />
        )}
      </Main>
    </>
  );
}

export default App;
