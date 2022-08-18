import React from "react";
import styled from "styled-components";
import { bg, getLetterStatusWord } from "./utils";

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
