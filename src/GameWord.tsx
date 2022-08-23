import React from "react";
import { wordLength, getLetterStatusWord } from "./utils";
import Letter from "./GameLetter";
import styled, { css } from "styled-components";
import usePrevious from "./hooks/usePrevious";
import { Shake } from "./keyframes";

const Word = styled.div<{ showShake: boolean }>`
  display: flex;
  gap: 5px;
  ${({ showShake }) =>
    showShake
      ? css`
          animation: ${Shake} 0.65s linear;
        `
      : ""}
`;

function GameWord({
  attempt = "",
  actual,
  errorCount = 0,
}: {
  attempt?: string;
  actual?: string[];
  errorCount?: number;
}) {
  const prevErrorCount = usePrevious(errorCount);
  const showShake = prevErrorCount !== errorCount;
  const letters = attempt.split("");
  return (
    <Word showShake={showShake} key={errorCount}>
      {Array.from({ length: wordLength }).map((_, i) => {
        const letter = letters[i] || "";
        const status = actual
          ? getLetterStatusWord(letters, actual, i)
          : "normal";
        return (
          <Letter
            key={i}
            letter={letter}
            status={status}
            animateIn={!!actual}
            index={i}
          />
        );
      })}
    </Word>
  );
}

export default GameWord;
