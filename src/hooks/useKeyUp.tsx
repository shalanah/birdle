import { useEffect } from "react";

function useKeyUp(onKeyUp: (e: Event) => void): void {
  useEffect(() => {
    window.addEventListener("keyup", onKeyUp);
    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return;
}

export default useKeyUp;
