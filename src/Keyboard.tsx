import React from "react";
import { getLetterStatusKeyboard, bgKeyboard, keysArray } from "./utils";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  padding: 0 10px;
  min-width: 43px;
  height: 58px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  transition: 0.2s 0.8s; /* delay so we can see flip animation first */
`;

function Keyboard({
  attempts,
  actual,
  onKeyDown,
}: {
  attempts: string[];
  actual: string[];
  onKeyDown: (key: string) => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
        gap: 8,
        marginBottom: 8,
      }}
    >
      {keysArray.map((row, i) => {
        return (
          <div key={i} style={{ margin: "0 auto", display: "flex", gap: 6 }}>
            {row.map((letter) => {
              const status = getLetterStatusKeyboard(attempts, actual, letter);
              return (
                <Btn
                  onClick={() => onKeyDown(letter)}
                  key={letter}
                  style={{
                    background: bgKeyboard[status],
                  }}
                >
                  {letter}
                </Btn>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Keyboard;
