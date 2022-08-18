import React from "react";
import { getLetterStatusKeyboard, bg, keysArray } from "./utils";
import styled from "styled-components";

const Btn = styled.button`
  border: none;
  width: 43px;
  height: 58px;
  color: #fff;
`;

function Keyboard({ attempts, actual }) {
  return (
    <div>
      {keysArray.map((row, i) => {
        return (
          <div key={i}>
            {row.map((letter) => {
              const status = getLetterStatusKeyboard(attempts, actual, letter);
              return (
                <Btn
                  key={letter}
                  style={{
                    background: bg[status],
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
