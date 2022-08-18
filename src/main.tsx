import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Not a fan of the double logging from StrictMode
ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
