import React from "react";
import styled from "styled-components";
import { maxAttempts } from "./utils";
import Word from "./GameWord";
import useGameContext from "./hooks/useGameContext";

const WordsContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  margin: auto;
`;

// TODO: Make more generic types
function Game() {
  const { attempts, current, actual, errors } = useGameContext();
  const len = attempts.length;
  const attemptsLeft = maxAttempts - len - 1;
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <WordsContainer>
        {/* 1. Attempts */}
        {attempts.map((guess, i) => (
          <Word key={i} guess={guess} actual={actual} />
        ))}
        {/* 2. Current */}
        {len < maxAttempts && (
          <Word key={len} guess={current} errorCount={errors.length} />
        )}
        {/* 3. Empty rows */}
        {Array.from({ length: attemptsLeft }).map((_, i) => (
          <Word key={i + 1 + len} guess={""} />
        ))}
      </WordsContainer>
    </div>
  );
}

export default Game;
