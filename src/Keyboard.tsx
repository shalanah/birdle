import React from "react";
import { getLetterStatusKeyboard, bgKeyboard, keysArray } from "./utils";
import styled from "styled-components";
import { ReactComponent as Delete } from "./assets/backspace.svg";
import useGameContext from "./hooks/useGameContext";

const Btn = styled.button`
  border: none;
  padding: 0 10px;
  min-width: 43px;
  height: 58px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 0;
  font-weight: bold;
  transition: background 0.2s 1.4s; /* delay so we can see flip animation first */
  @media (max-width: 768px) {
    min-width: 30px;
    height: 40px;
  }
`;

function Keyboard() {
  const { attempts, actual, onKey } = useGameContext();
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
                  onClick={() => onKey(letter)}
                  key={letter}
                  style={{
                    background: bgKeyboard[status],
                  }}
                >
                  {letter === "delete" ? (
                    <Delete style={{ width: 30 }} />
                  ) : (
                    letter
                  )}
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
