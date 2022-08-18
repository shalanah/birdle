import React from "react";
import styled from "styled-components";
import Letter from "./Letter";
import { maxAttempts, wordLength, getLetterStatusWord } from "./utils";

const WordsContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px auto;
`;

const emptyWord = Array(wordLength).fill("");

function Word({ guess = "", actual }: { guess: string; actual?: string[] }) {
  const letters = guess.split("");
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {emptyWord.map((_, i) => {
        const letter = letters[i] || "";
        const status = actual
          ? getLetterStatusWord(letter, actual, i)
          : "normal";
        return <Letter key={i} letter={letter} status={status} />;
      })}
    </div>
  );
}

function Game({ attempts, current, actual }) {
  const len = attempts.length;
  const attemptsLeft = maxAttempts - len - 1;
  return (
    <div style={{ display: "flex" }}>
      <WordsContainer>
        {/* 1. Attempts */}
        {attempts.map((guess, i) => (
          <Word key={i} guess={guess} actual={actual} />
        ))}
        {/* 2. Current */}
        {len < maxAttempts && <Word key={len} guess={current} />}
        {/* 3. Empty rows */}
        {Array.from({ length: attemptsLeft }).map((_, i) => (
          <Word key={i + 1 + len} guess={""} />
        ))}
      </WordsContainer>
    </div>
  );
}

export default Game;
