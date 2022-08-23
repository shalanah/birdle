import React from "react";
import styled from "styled-components";
import { maxAttempts } from "./utils";
import Word from "./GameWord";
import useGameContext from "./hooks/useGameContext";

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 5px;
  margin: auto;
`;

function Game() {
  const { attempts, current, actual, errors } = useGameContext();
  const len = attempts.length;
  const attemptsLeft = maxAttempts - len - 1;
  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Container>
        {/* 1. Attempts */}
        {attempts.map((attempt, i) => (
          <Word key={i} attempt={attempt} actual={actual} />
        ))}
        {/* 2. Current */}
        {len < maxAttempts && (
          <Word key={len} attempt={current} errorCount={errors.length} />
        )}
        {/* 3. Empty rows */}
        {Array.from({ length: attemptsLeft }).map((_, i) => (
          <Word key={i + 1 + len} attempt={""} />
        ))}
      </Container>
    </div>
  );
}

export default Game;
