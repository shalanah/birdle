import React from "react";
import GlobalStyles from "./components/GlobalStyles";
import { useState } from "react";

const todaysWord = "grant";
const maxAttempts = 8;

// TODO: A letter comp
function Word({ guess, actual }: { guess: string; actual?: string }) {
  return <div>{guess}</div>;
}

function App() {
  const [attempts, setAttempts] = useState([]); // could use array of arrays since this isn't a lot of data, keeping as strings
  const [current, setCurrent] = useState("");
  const len = attempts.length;
  if (len > maxAttempts) return <div>Game Over</div>;
  return (
    <>
      <GlobalStyles />
      {attempts.map((guess, i) => (
        <Word key={i} guess={guess} actual={todaysWord} />
      ))}
      {/* TODO: Make own type with keypress... or use a hidden input? */}
      {/* TODO: Have own state as well - set current there */}
      <Word key={len} guess={current} />
      {/* TODO: rest of empty words... use array.from etc */}
      <Word key={len + 1} guess={""} />
    </>
  );
}

export default App;
