import React, { useState } from "react";

type s = string;

class DivClass {
  text: s;
  textColor: s;
  backColor: s;

  constructor(text: s, textColor: s, backColor: s) {
    this.text = text;
    this.textColor = textColor;
    this.backColor = backColor;
  }

  // divSet 메서드를 수정하여 React 컴포넌트처럼 동작하도록 함
  divSet() {
    const [localText, setLocalText] = useState(this.text);
    const [localTextColor, setLocalTextColor] = useState(this.textColor);
    const [localBackColor, setLocalBackColor] = useState(this.backColor);

    const handleChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocalText(event.target.value);
    };

    const handleChangeTextColor = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setLocalTextColor(event.target.value);
    };

    const handleChangeBackColor = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      setLocalBackColor(event.target.value);
    };

    const handleClick = () => {
      if (window.confirm("Do you want to apply these changes?")) {
        this.text = localText;
        this.textColor = localTextColor;
        this.backColor = localBackColor;
      }
    };

    return (
      <div
        style={{
          color: localTextColor,
          backgroundColor: localBackColor,
          padding: "10px",
          margin: "5px",
          border: "1px solid black",
        }}
      >
        <div>{localText}</div>
        <div id="textChange">
          <input
            type="text"
            value={localText}
            onChange={handleChangeText}
            placeholder="Change text"
          />
        </div>
        <div id="colorChange">
          <input
            type="color"
            value={localTextColor}
            onChange={handleChangeTextColor}
            title="Change text color"
          />
        </div>
        <div id="backColorChange">
          <input
            type="color"
            value={localBackColor}
            onChange={handleChangeBackColor}
            title="Change background color"
          />
        </div>
        <div id="confirmButton">
          <button onClick={handleClick}>Confirm Changes</button>
        </div>
      </div>
    );
  }
}

export default DivClass;
