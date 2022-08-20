/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import { getLetterStatusKeyboard, bgKeyboard, keysArray } from "./utils";
import styled from "styled-components";
import { ReactComponent as Delete } from "./assets/backspace.svg";
import useGameContext from "./hooks/useGameContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  gap: 8px;
  margin-bottom: 8px;
  @media (max-width: 768px) {
    gap: 4px;
  }
`;
const Row = styled.div`
  margin: 0 auto;
  display: flex;
  gap: 6px;
  @media (max-width: 768px) {
    gap: 4px;
  }
`;
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
    min-width: 28px;
    height: 48px;
    padding: 0 7px;
  }
`;

function Keyboard() {
  const { attempts, actual, onKey } = useGameContext();
  return (
    <Container>
      {keysArray.map((row, i) => {
        return (
          <Row key={i}>
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
          </Row>
        );
      })}
    </Container>
  );
}

export default Keyboard;
