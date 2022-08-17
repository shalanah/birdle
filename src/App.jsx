import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }
  html {
    background: #222;
    color: #fff;
  }
  body, html, #root {
    width: 100%;
    height: 100%;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      Hey
    </div>
  );
}

export default App;
