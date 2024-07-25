import { useEffect } from "react";

const useTypeEffect = (
  displayText: string[],
  setDisplayText: React.Dispatch<React.SetStateAction<string[]>>,
  state: number,
  setState: React.Dispatch<React.SetStateAction<number>>
) => {
  // 타이핑 효과를 줄 텍스트 객체
  const textContent = {
    h1: "Hello",
    h2: "Type Your Name HERE",
  };

  useEffect(() => {
    if (state === 0) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => {
          const newText = textContent.h1.slice(0, (prev[0]?.length ?? 0) + 1);
          return [newText, prev[1]];
        });
        if ((displayText[0]?.length ?? 0) + 1 === textContent.h1.length) {
          setState(1);
        }
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [displayText, state, setDisplayText, setState]);

  useEffect(() => {
    if (state === 1) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prev) => {
          const newText = textContent.h2.slice(0, (prev[1]?.length ?? 0) + 1);
          return [prev[0], newText];
        });
        if ((displayText[1]?.length ?? 0) + 1 === textContent.h2.length) {
          setState(2);
        }
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [displayText, state, setDisplayText, setState]);
};

export default useTypeEffect;
