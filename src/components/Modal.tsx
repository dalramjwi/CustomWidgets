import React, { useState } from "react";
import textContent from "./textContent";

interface ModalProps {
  content: {
    name: string;
    bgColor: string;
    isNameHidden: boolean;
    gridConfig: { row: number; col: number };
  };
  setContent: React.Dispatch<
    React.SetStateAction<{
      name: string;
      bgColor: string;
      isNameHidden: boolean;
      gridConfig: { row: number; col: number };
    }>
  >;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({
  content,
  setContent,
  setIsModalOpen,
}) => {
  const [newName, setNewName] = useState(content.name);
  const [newBgColor, setNewBgColor] = useState(content.bgColor);
  const [newRow, setNewRow] = useState(content.gridConfig.row);
  const [newCol, setNewCol] = useState(content.gridConfig.col);
  const [nameHidden, setNameHidden] = useState(content.isNameHidden);

  const handleSave = () => {
    setContent((prev) => ({
      ...prev,
      name: newName,
      bgColor: newBgColor,
      gridConfig: { row: newRow, col: newCol },
      isNameHidden: nameHidden,
    }));
    setIsModalOpen(false);
  };

  return (
    <div className="bg-white p-6 rounded shadow-lg">
      {/* Background Color */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Background Color:
        </label>
        <input
          type="color"
          value={newBgColor}
          onChange={(e) => setNewBgColor(e.target.value)}
          className="border rounded w-full py-1 px-2"
        />
      </div>

      {/* Name */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name:</label>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          className="border rounded w-full py-1 px-2"
        />
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => setNameHidden(!nameHidden)}
        >
          {nameHidden ? "Show Name" : "Hide Name"}
        </button>
      </div>

      {/* Grid Configuration */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Grid Rows:</label>
        <input
          type="number"
          value={newRow}
          onChange={(e) => setNewRow(Number(e.target.value))}
          className="border rounded w-full py-1 px-2"
        />
        <label className="block text-sm font-medium mb-1 mt-2">
          Grid Columns:
        </label>
        <input
          type="number"
          value={newCol}
          onChange={(e) => setNewCol(Number(e.target.value))}
          className="border rounded w-full py-1 px-2"
        />
      </div>

      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={handleSave}
      >
        Save Changes
      </button>
    </div>
  );
};

export default Modal;
