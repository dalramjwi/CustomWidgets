// src/ItemModal.tsx
import React, { useState, useEffect } from "react";
import { ItemModalProps } from "../../interface/interface";

const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onUpdate }) => {
  const [name, setName] = useState(item.name);
  const [bgColor, setBgColor] = useState(item.bgColor);
  const [textColor, setTextColor] = useState(item.textColor);

  useEffect(() => {
    setName(item.name);
    setBgColor(item.bgColor);
    setTextColor(item.textColor);
  }, [item]);

  const handleSubmit = () => {
    onUpdate({ ...item, name, bgColor, textColor });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-80">
        <h2 className="text-xl font-bold mb-4">Edit Item</h2>
        <div className="mb-2">
          <label className="block mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Background Color</label>
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="mb-2">
          <label className="block mb-1">Text Color</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
