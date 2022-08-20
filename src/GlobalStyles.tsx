import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  html {
    font-family: sans-serif;
    background: #121213;
    color: #fff;
  }
  body, html, #root {
    width: 100%;
    height: 100%;
  }
  a, button {
    cursor: pointer;
    background: transparent;
    border: none;
    /* :focus {
      outline: none;
    }
    :focus-visible {
      outline: 1px solid blue;
    } */

    /* Utility function */
    .pos-full {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
  }
`;

export default GlobalStyles;
