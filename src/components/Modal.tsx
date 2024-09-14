// Modal.tsx
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
        <div key={i} className="p-4 border border-gray-300">
          Grid Item {i + 1}
        </div>
      );
    }
    return gridItems;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg z-50 w-full max-w-lg">
      <button
        className="text-red-500 mb-4"
        onClick={() => setIsModalOpen(false)}
      >
        Close
      </button>

      {/* 배경색 변경 */}
      <div className="mb-4">
        <label className="block mb-2">Background Color:</label>
        <input
          type="color"
          onChange={(e) => changeBackgroundColor(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
      </div>

      {/* 이름 변경 */}
      <div className="mb-4">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="p-2 border border-gray-300 rounded w-full"
        />
        <button
          className="bg-blue-500 text-white p-2 mt-2 rounded"
          onClick={() => alert("Name changed to: " + newName)}
        >
          Change Name
        </button>
      </div>

      {/* Grid 설정 */}
      <div>
        <label className="block mb-2">Row:</label>
        <input
          type="number"
          value={row}
          onChange={(e) => setRow(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded mb-4"
        />
        <label className="block mb-2">Col:</label>
        <input
          type="number"
          value={col}
          onChange={(e) => setCol(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded mb-4"
        />
        <div
          className="grid gap-4"
          style={{
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
