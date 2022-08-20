/// <reference types="vite-plugin-svgr/client" />
import React from "react";
import styled from "styled-components";
import { ReactComponent as Bird } from "./assets/bird.svg";
import { navHeight } from "./utils";

const Container = styled.header`
  font-family: Kurale, sans-serif;
  height: ${navHeight}px;
  border-bottom: 1px solid #3a3a3c;
  display: flex;
  font-size: 16px;
  line-height: 1;
  h1 {
    margin: auto;
    display: flex;
    align-items: center;
    gap: 5px;
    justify-content: center;
  }
  svg {
    width: 50px;
    height: 50px;
    padding-top: 4px;
  }
  span {
    padding-right: 10px;
  }
`;

function Nav() {
  return (
    <Container>
      <h1>
        <Bird title="cute brown bird" />
        <span>Birdle</span>
      </h1>
    </Container>
  );
}

export default Nav;
