import React from "react";
import { wordLength, getLetterStatusWord } from "./utils";
import Letter from "./GameLetter";

// Empty word doesn't seem necessary... just an array of 5 will do
const emptyWord = Array(wordLength).fill("");

function GameWord({
  guess = "",
  actual,
}: {
  guess: string;
  actual?: string[];
}) {
  const letters = guess.split("");
  return (
    <div style={{ display: "flex", gap: 5 }}>
      {emptyWord.map((_, i) => {
        const letter = letters[i] || "";
        const status = actual
          ? getLetterStatusWord(letter, actual, i)
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
    </div>
  );
}

export default GameWord;
