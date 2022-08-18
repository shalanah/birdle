import React from "react";
import { getLetterStatusKeyboard, bgKeyboard, keysArray } from "./utils";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  width: 43px;
  height: 58px;
  color: #fff;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
`;

function Keyboard({ attempts, actual }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop: 30,
        gap: 8,
      }}
    >
      {keysArray.map((row, i) => {
        return (
          <div key={i} style={{ margin: "0 auto", display: "flex", gap: 6 }}>
            {row.map((letter) => {
              const status = getLetterStatusKeyboard(attempts, actual, letter);
              return (
                <Btn
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
