import React from "react";
import { wordLength, getLetterStatusWord } from "./utils";
import Letter from "./GameLetter";
import styled, { keyframes, css } from "styled-components";
import usePrevious from "./hooks/usePrevious";

// Inspired by https://css-tricks.com/snippets/css/shake-css-keyframe-animation/
const shake = keyframes`
  10%, 90% {
    transform: translate(-5px, 0);
  }
  20%, 80% {
    transform: translate(5px, 0);
  }
  30%, 50%, 70% {
    transform: translate(-5px, 0);
  }
  40%, 60% {
    transform: translate(5px, 0);
  }
`;

const Word = styled.div<{ showShake: boolean }>`
  display: flex;
  gap: 5px;
  ${({ showShake }) =>
    showShake
      ? css`
          animation: ${shake} 0.65s linear;
        `
      : ""}
`;

// Empty word doesn't seem necessary... just an array of 5 will do
const emptyWord = Array(wordLength).fill("");

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
  const letters = attempt.split("");
  const showShake = prevErrorCount !== errorCount;
  return (
    <Word showShake={showShake} key={errorCount}>
      {emptyWord.map((_, i) => {
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
