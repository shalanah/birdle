import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  :root {
    --bg: #222;
    --text: #fff;
  }
  html {
    background: var(--bg);
    color: var(--text);
  }
  body, html, #root {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
