import React, { useState } from "react";
import Modal from "./Modal";
import textContent from "./textContent";
const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  return (
    <div style={{ backgroundColor: bgColor }}>
      <h1>{textContent.name}</h1> {/* textContent의 name 값을 보여주는 부분 */}
      <div onClick={() => setIsModalOpen(true)}>Click to open modal</div>
      {isModalOpen && (
        <Modal
          setBgColor={setBgColor}
          setIsModalOpen={setIsModalOpen}
          name={textContent.name}
        />
      )}
    </div>
  );
};

export default Main;
