// src/Modal.tsx
import React, { useState } from "react";
import { ModalProps } from "../interface/interface";

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

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
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
              style={{ color: newTextColor }}
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

        <div className="flex justify-end space-x-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={handleSave}
          >
            Save Changes
          </button>
          <button
            className="bg-gray-500 text-white py-2 px-4 rounded"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
