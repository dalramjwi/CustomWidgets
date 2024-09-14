import React, { useState } from "react";
import useTypeEffect from "../hooks/useTypeEffect";
import { handleInputChange, handleKeyPress } from "./handlers";
import textContent from "./textContent";

interface StartProps {
  setMainPage: (value: boolean) => void;
}

const Start: React.FC<StartProps> = ({ setMainPage }) => {
  const [state, setState] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [displayText, setDisplayText] = useState<string[]>(["", ""]);
  const [inputVisible, setInputVisible] = useState<boolean>(false);

  useTypeEffect(displayText, setDisplayText, state, setState, setInputVisible);

  return (
    <div className="bg-black h-screen flex flex-col justify-center items-center text-[#58FF29] gap-12 font-bold">
      <h1 className="text-[6vw] text-[#58FF29] self-start pl-[5vw]">
        {displayText[0]}
      </h1>
      <h2 className="text-[4vw] text-[#58FF29] self-start pl-[5vw]">
        {displayText[1]}
      </h2>
      {inputVisible && (
        <input
          className="text-[4vw] text-black p-1"
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e, setName)}
          onKeyPress={(e) =>
            handleKeyPress(
              e,
              name,
              () => setMainPage(true),
              setState,
              textContent
            )
          }
          placeholder="Enter your name"
          aria-label="Name input"
        />
      )}
    </div>
  );
};

export default Start;
