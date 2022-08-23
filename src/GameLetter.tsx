import React from "react";
import styled, { css } from "styled-components";
import { bg } from "./utils";
import { Spin, Bounce } from "./keyframes";

const Container = styled.div<{
  index: number;
  animateIn: boolean;
  entered: boolean;
}>`
  border: 2px solid transparent;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  width: 62px;
  height: 62px;
  font-size: 32px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 28px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s border;
  ${({ animateIn, index }) =>
    animateIn
      ? css`
          animation: ${Spin} 0.6s both ease-in-out;
          animation-delay: ${index * 0.2}s;
        `
      : ""};
  ${({ entered }) =>
    entered
      ? css`
          animation: ${Bounce} 0.1s both ease-out;
        `
      : ""}
`;

function Letter({
  letter = "",
  status = "normal",
  animateIn = false,
  index = 0,
}: {
  letter: string;
  status: string;
  animateIn?: boolean;
  index: number;
}) {
  const varBg = { "--bg": bg[status] } as React.CSSProperties;
  return (
    <Container
      index={index}
      animateIn={animateIn}
      entered={letter !== "" && status === "normal"}
      style={{
        borderColor:
          status === "normal" ? (letter ? "#565758" : "#3a3a3c") : "",
        background: bg["normal"],
        ...varBg,
      }}
    >
      {letter}
    </Container>
  );
}

export default Letter;
