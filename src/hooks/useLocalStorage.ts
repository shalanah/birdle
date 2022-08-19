import { useEffect } from "react";

function useLocalStorage({
  todaysWord,
  attempts,
  setAttempts,
}: {
  todaysWord: string;
  attempts: string[];
  setAttempts: (attempts: string[]) => void;
}) {
  useEffect(() => {
    if (todaysWord) {
      if (attempts.length === 0) {
        // Set from localStorage if exists
        const saved = JSON.parse(
          window.localStorage.getItem("attempts") || "{}"
        );
        if (saved.todaysWord === todaysWord && saved.attempts.length) {
          setAttempts(saved.attempts);
        }
      } else {
        // Save changes to localsStorage
        console.log("here");
        window.localStorage.setItem(
          "attempts",
          JSON.stringify({ attempts, todaysWord })
        );
      }
    }
  }, [attempts, todaysWord]);
}

export default useLocalStorage;
