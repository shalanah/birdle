export const maxAttempts = 6;
export const wordLength = 5;
export const bg = {
  normal: "#121213",
  correct: "#6aaa64",
  offcenter: "#b59f3b",
  incorrect: "#3a3a3c",
};
export const bgKeyboard = {
  normal: "#818384",
  correct: "#6aaa64",
  offcenter: "#b59f3b",
  incorrect: "#3a3a3c",
};

export const keys = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
export const keysArray = keys.map((row) => row.split(""));
keysArray[2].unshift("enter");
keysArray[2].push("delete");

export const getLetterStatusWord = (
  letter: string,
  actual: string[],
  index: number
) => {
  if (letter === "") return "normal";
  if (letter === actual[index]) return "correct";
  if ([...actual.slice(0, index), ...actual.slice(index + 1)].includes(letter))
    return "offcenter";
  else return "incorrect";
};

export const getLetterStatusKeyboard = (
  attempts: string[],
  actual: string[],
  letter: string
) => {
  // Not used?
  for (const attempt of attempts) {
    if (!attempt.split("").includes(letter)) return "normal";
    else if (!actual.includes(letter)) return "incorrect";
    else return "correct";
  }
  return "correct";
  // if (letter === actual[index]) return "correct";
  // if ([...actual.slice(0, index), ...actual.slice(index + 1)].includes(letter))
  //   return "offcenter";
  // else return "incorrect";
};
