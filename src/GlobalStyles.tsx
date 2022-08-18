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
`;

export default GlobalStyles;
