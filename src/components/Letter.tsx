import React from "react";

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
  console.log(letter, status);
  return (
    <div
      style={{
        width: 40,
        height: 40,
        background: bg[status],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {letter}
    </div>
  );
}

export default Letter;
