import React, { useState, useEffect } from "react";
import useTypeEffect from "../hooks/useTypeEffect";
import startStyle from "./startStyle";
import { handleInputChange, handleKeyPress } from "./handlers";
const textContent = {
  h1: "Hello",
  h2: "Type Your Name HERE",
  name: "",
};

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
    <div style={startStyle.public}>
      <h1 style={startStyle.h1}>{displayText[0]}</h1>
      <h2 style={startStyle.h2}>{displayText[1]}</h2>
      {inputVisible && (
        <input
          style={startStyle.h3}
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
