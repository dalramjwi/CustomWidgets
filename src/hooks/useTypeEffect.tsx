import { useEffect } from "react";

const useTypeEffect = (
  displayText: string,
  setDisplayText: React.Dispatch<React.SetStateAction<string>>,
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    if (state === 0) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => prev + "Hello".charAt(prev.length));
        if (displayText.length + 1 === "Hello".length) {
          setState(1);
        }
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [displayText, state, setDisplayText, setState]);

  useEffect(() => {
    if (state === 1 && displayText === "Type Your Name HERE") {
      const timeoutId = setTimeout(() => {
        setState(2);
      }, 1500);

      return () => clearTimeout(timeoutId);
    }
  }, [displayText, state, setState]);
};

export default useTypeEffect;
