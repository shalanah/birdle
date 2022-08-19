import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { GameContextProvider } from "./hooks/useGameContext";

// Not a fan of the double logging from StrictMode
ReactDOM.createRoot(document.getElementById("root")!).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
