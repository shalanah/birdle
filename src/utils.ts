export const maxAttempts = 6;
export const wordLength = 5;
export const navHeight = 66;

export const bg = {
  normal: "#121213",
  correct: "#6aaa64",
  offcenter: "#b59f3b",
  incorrect: "#3a3a3c",
};

export const bgKeyboard = {
  normal: "#3a3a3c",
  correct: "#6aaa64",
  offcenter: "#b59f3b",
  incorrect: "#818384",
};

export const fail = [
  "Not this time...",
  "That's tough",
  "Looks like you came up empty this time",
  "You'll get it next time",
  "It's the lows in life that make the highs so great",
  "Making mistakes is how we grow",
  "I feel like you got this, tomorrow",
  "Someone out there loves you",
];

// Ordered
export const congrats = [
  "OMG! Outstanding!",
  "You're a bird-brainiac!",
  "We're birds of a feather!",
  "Birds like you ❤️",
  "Well-done!",
  "Whew... that was a close one!",
];

export const getRandomFromArray = (arr: any[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
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
export const getTodaysWord = (wordList: { name: string; wiki: string }[]) => {
  const begin = new Date("08/18/2022"); // start date... make sure CST restart?
  const today = new Date(Date.now()); // current date
  const diff = today.getTime() - begin.getTime();
  const diffInDays = Math.floor(diff / (1000 * 3600 * 24));
  return wordList[diffInDays % wordList.length];
};

export const getLetterStatusWord = (
  word: string[],
  actual: string[],
  index: number
) => {
  const letter = word[index];
  if (letter === "") return "normal"; // empty
  if (!actual.includes(letter)) return "incorrect";
  if (letter === actual[index]) return "correct";

  const actualIndexes = getIndexes(actual, letter);
  const attemptIndexes = getIndexes(word, letter);
  if (attemptIndexes.length <= actualIndexes.length) {
    return "offcenter"; // Correct letter wrong position and not too many of this letter in guess
  }

  // Dealing with excess of this letter in guess
  // - Removing letters that are in correct positions to compare
  // - NOTE: actualIndexes + attemptIndexes get mutated below
  // - NOTE: could pull in lodash to help with this
  for (let i = 0; i < actualIndexes.length; i++) {
    const overlap = attemptIndexes.indexOf(actualIndexes[i]);
    if (overlap !== -1) {
      attemptIndexes.splice(overlap, 1);
      actualIndexes.splice(i, 1);
    }
  }
  return attemptIndexes.indexOf(index) > actualIndexes.length - 1
    ? "incorrect" // Too many of this letter in our guess
    : "offcenter";
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

    status = "offcenter";
  }

  return status;
};
