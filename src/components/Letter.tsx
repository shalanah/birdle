import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  width: 62px;
  height: 62px;
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const getLetterStatus = (
  letter: string,
  actual: string[],
  index: number
) => {
  console.log({
    letter,
    actual,
    index,
    left: [...actual.slice(0, index), ...actual.slice(index + 1)],
  });
  if (letter === "") return "normal";
  if (letter === actual[index]) return "correct";
  if ([...actual.slice(0, index), ...actual.slice(index + 1)].includes(letter))
    return "offcenter";
  else return "incorrect";
};

const bg = {
  normal: "#121213",
  correct: "#6aaa64",
  offcenter: "#b59f3b",
  incorrect: "#3a3a3c",
};

function Letter({
  letter = "",
  status = "normal",
}: {
  letter: string;
  status: string;
}) {
  return (
    <Container
      style={{
        border: status === "normal" ? `2px solid #3a3a3c` : "",
        background: bg[status],
      }}
    >
      {letter}
    </Container>
  );
}

export default Letter;
