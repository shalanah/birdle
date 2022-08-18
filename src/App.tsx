import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";
import Letter, { getLetterStatus } from "./components/Letter";
import styled from "styled-components";

const WordsContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px auto;
`;

const todaysWord = "grant";
const maxAttempts = 6;
const wordLength = 5;
const emptyWord = Array(wordLength).fill("");

function Word({ guess = "", actual }: { guess: string; actual?: string[] }) {
  const letters = guess.split("");
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {emptyWord.map((_, i) => {
        const letter = letters[i] || "";
        const status = actual ? getLetterStatus(letter, actual, i) : "normal";
        return (
          <Letter key={`${i}-${letters[i]}`} letter={letter} status={status} />
        );
      })}
    </div>
  );
}

// TODO: Use grid layout instead of flexbox?
function App() {
  const [attempts, setAttempts] = useState(["pairs", "grain"]); // could use array of arrays since this isn't a lot of data, keeping as strings
  const [current, setCurrent] = useState("tra");
  const len = attempts.length;
  if (len >= maxAttempts) return <div>Game Over</div>;
  const actual = todaysWord.split("");
  const attemptsLeft = maxAttempts - len - 1;
  return (
    <>
      <GlobalStyles />
      <div style={{ display: "flex" }}>
        <WordsContainer>
          {/* Past */}
          {attempts.map((guess, i) => (
            <Word key={i} guess={guess} actual={actual} />
          ))}
          {/* Current */}
          <Word key={len} guess={current} />
          {/* Empty */}
          {Array.from({ length: attemptsLeft }).map((_, i) => (
            <Word key={i + 1 + len} guess={""} />
          ))}
          {/* TODO: Keyboard */}
        </WordsContainer>
      </div>
      <div></div>
    </>
  );
}

export default App;
