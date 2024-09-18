import React from "react";

// 입력 필드의 값이 변경될 때 호출되는 핸들러
export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setName: React.Dispatch<React.SetStateAction<string>>
) => {
  setName(e.target.value);
};

// 엔터 키를 눌렀을 때 호출되는 핸들러
export const handleKeyPress = (
  e: React.KeyboardEvent<HTMLInputElement>,
  name: string,
  setMainPage: React.Dispatch<React.SetStateAction<boolean>>,
  setState: React.Dispatch<React.SetStateAction<number>>,
  textContent: { name: string }
) => {
  if (e.key === "Enter") {
    textContent.name = name;
    setState(4);
    setMainPage(true); // 메인 페이지로 이동
  }
};
