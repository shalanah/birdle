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

export const getIndexes = (arr: any[], item: any) => {
  const indexes: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      indexes.push(i);
    }
  }
  return indexes;
};

// Do more testing around this
export const getTodaysWord = (wordList) => {
  const begin = new Date("08/18/2022"); // start date
  // const today = new Date(Date.now()); // current date
  const today = new Date("08/19/2022");
  const diff = today.getTime() - begin.getTime();
  const diffInDays = Math.floor(diff / (1000 * 3600 * 24));
  return wordList[diffInDays % wordList.length];
};

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
  let status = "normal"; // default

  for (const a of attempts) {
    const attempt = a.split("");
    if (!attempt.includes(letter)) continue; // letter not found in attempt
    if (!actual.includes(letter)) return "incorrect";

    // Letters can be in multiple places in a word, want to check if any are correct
    const actualIndexes = getIndexes(actual, letter);
    const attemptIndexes = getIndexes(attempt, letter);
    let sharesAnIndex = actualIndexes.some((index) =>
      attemptIndexes.includes(index)
    );
    if (sharesAnIndex) return "correct";

    // Otherwise it exists but in the incorrect place - could be correct in another attempt
    status = "offcenter";
  }

  return status;
};
