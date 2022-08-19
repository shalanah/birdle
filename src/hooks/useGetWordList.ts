import { useEffect, useState } from "react";

function useGetWordList() {
  const [wordList, setWordList] = useState();
  useEffect(() => {
    if (!wordList) {
      const fetchData = async () => {
        const data = await fetch("/wordList.json");
        const json = await data.json();
        setWordList(json.words);
      };

      // TODO: handle error
      fetchData().catch(console.error);
    }
  }, []);
  return wordList;
}

export default useGetWordList;
