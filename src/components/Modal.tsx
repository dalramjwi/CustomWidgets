import React, { useState } from "react";

interface Content {
  name: string;
  bgColor: string;
  textColor: string;
  isNameHidden: boolean;
  gridConfig: { row: number; col: number };
}

interface ModalProps {
  content: Content;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showName?: boolean;
  showGridConfig?: boolean;
}
const Modal: React.FC<ModalProps> = ({
  content,
  setContent,
  setIsModalOpen,
  showName = true,
  showGridConfig = true,
}) => {
  const [newName, setNewName] = useState(content.name);
  const [newBgColor, setNewBgColor] = useState(content.bgColor);
  const [newTextColor, setNewTextColor] = useState(content.textColor);
  const [newRow, setNewRow] = useState(content.gridConfig.row);
  const [newCol, setNewCol] = useState(content.gridConfig.col);
  const [nameHidden, setNameHidden] = useState(content.isNameHidden);

  const handleSave = () => {
    setContent({
      name: newName,
      bgColor: newBgColor,
      textColor: newTextColor,
      gridConfig: { row: newRow, col: newCol },
      isNameHidden: nameHidden,
    });
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

      {/* Text Color */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Text Color:</label>
        <input
          type="color"
          value={newTextColor}
          onChange={(e) => setNewTextColor(e.target.value)}
          className="border rounded w-full py-1 px-2"
        />
      </div>

      {/* Name */}
      {showName && (
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name:</label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="border rounded w-full py-1 px-2"
            style={{ color: newTextColor }} // 텍스트 색상 적용
          />
          <button
            className="mt-2 p-2 bg-blue-500 text-white rounded"
            onClick={() => setNameHidden(!nameHidden)}
          >
            {nameHidden ? "Show Name" : "Hide Name"}
          </button>
        </div>
      )}

      {/* Grid Configuration */}
      {showGridConfig && (
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
      )}

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
