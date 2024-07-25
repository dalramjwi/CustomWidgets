import React, { useState, useEffect } from "react";
import useTypeEffect from "../hooks/useTypeEffect";

const startStyle: { [key: string]: React.CSSProperties } = {
  h1: {
    fontSize: "3rem",
    color: "#58FF29",
  },
  h2: {
    fontSize: "2rem",
    color: "#58FF29",
  },
  h3: {
    fontSize: "1.5rem",
    color: "white",
  },
  public: {
    backgroundColor: "black",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "#58FF29",
  },
};

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
  const [displayText, setDisplayText] = useState<string>("");

  useTypeEffect(displayText, setDisplayText, state, setState);

  useEffect(() => {
    if (state === 1) setDisplayText(textContent.h2);
  }, [state]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      textContent.name = name;
      setState(4);
      setMainPage(true); // main 페이지로 이동
    }
  };

  return (
    <div style={startStyle.public}>
      {state === 0 && <h1 style={startStyle.h1}>{textContent.h1}</h1>}
      {state === 1 && <h2 style={startStyle.h2}>{displayText}</h2>}
      {state === 2 && (
        <input
          style={startStyle.h3}
          type="text"
          value={name}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Enter your name"
          aria-label="Name input"
        />
      )}
    </div>
  );
};

export default Start;
