import React, {
  useEffect,
  useContext,
  createContext,
  useState,
  ReactNode,
} from "react";
import { maxAttempts, getTodaysWord } from "../utils";
import useGetWordList from "./useGetWordList";
import birds from "../birds";
import useLocalStorage from "./useLocalStorage";

const defaultError: string[] = [];
const defaultAttempts: string[] = [];

interface GameContextInterface {
  actual: string[];
  allowedWordsLoading: boolean;
  attempts: string[];
  current?: string;
  errors: string[];
  fail: boolean;
  onKey: (key: string) => void;
  success: boolean;
  todaysWord: string;
  wiki: string;
}

// Game state... could probably be broken out into smaller files / hooks
export const GameContext = createContext<GameContextInterface | null>(null);
export const GameContextProvider = ({ children }: { children: ReactNode }) => {
  const birdWords = birds.map((bird) => bird.name);
  const [attempts, setAttempts] = useState(defaultAttempts);
  const [current, setCurrent] = useState("");
  const [errors, setErrors] = useState(defaultError);
  const allowedWords = useGetWordList();
  const { name: todaysWord, wiki } = getTodaysWord(birds);
  useLocalStorage({ todaysWord, attempts, setAttempts });

  const success = attempts.length ? attempts.includes(todaysWord) : false;
  const fail = attempts.length === maxAttempts && !success;
  const done = success || fail;

  // TODO: Look into ways to avoid using current in here...
  const onKey = async (key: string) => {
    if (done) return; // nothing to do... done
    if (
      key.length === 1 &&
      key.match(/[a-z]/i) &&
      current.length < todaysWord.length
    ) {
      setCurrent((prev) => prev + key);
      return;
    }
    if (["delete", "backspace"].includes(key)) {
      setCurrent((prev) => prev.slice(0, -1));
      return;
    }
    if (key === "enter") {
      if (current.length !== todaysWord.length) {
        setErrors((prev) => [...prev, "Enter more letters"]);
        return;
      }
      if (![...(allowedWords || []), ...birdWords].includes(current)) {
        setErrors((prev) => [...prev, "Not in word list"]);
        return;
      }
      setAttempts((prev) => [...prev, current]);
      setCurrent("");
      return;
    }
  };

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey || e.altKey || e.metaKey) return; // don't want ctrl/alt/meta
      onKey(e.key.toLowerCase());
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onKey]);

  return (
    <GameContext.Provider
      value={{
        actual: todaysWord.split(""),
        allowedWordsLoading: (allowedWords || []).length === 0,
        attempts,
        current,
        errors,
        fail,
        onKey,
        success,
        todaysWord,
        wiki,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    // Let's yell at ourselves to make sure we use our Provider wrapper
    throw new Error(
      "Oooops, I'm guessing your forgot to use the Provider for this context"
    );
  }
  return context;
};

export default useGameContext;
