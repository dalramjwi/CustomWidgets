import React, { useState } from "react";

interface ModalProps {
  setBgColor: React.Dispatch<React.SetStateAction<string>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
}

const Modal: React.FC<ModalProps> = ({ setBgColor, setIsModalOpen, name }) => {
  const [newName, setNewName] = useState(name);
  const [row, setRow] = useState(1);
  const [col, setCol] = useState(1);

  const changeBackgroundColor = (color: string) => {
    setBgColor(color);
  };

  const createGrid = () => {
    let gridItems = [];
    for (let i = 0; i < row * col; i++) {
      gridItems.push(
        <div key={i} className="grid-item">
          Grid Item {i + 1}
        </div>
      );
    }
    return gridItems;
  };

  return (
    <div className="modal">
      <button onClick={() => setIsModalOpen(false)}>Close</button>

      {/* 배경색 변경 */}
      <div>
        <label>Background Color: </label>
        <input
          type="color"
          onChange={(e) => changeBackgroundColor(e.target.value)}
        />
      </div>

      {/* 이름 변경 */}
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <button onClick={() => alert("Name changed to: " + newName)}>
          Change Name
        </button>
      </div>

      {/* Grid 설정 */}
      <div>
        <label>Row: </label>
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(Number(e.target.value))}
        />
        <label>Col: </label>
        <input
          type="number"
          value={col}
          onChange={(e) => setCol(Number(e.target.value))}
        />
        <div
          className="grid-container"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${col}, 1fr)`,
          }}
        >
          {createGrid()}
        </div>
      </div>
    </div>
  );
};

export default Modal;
