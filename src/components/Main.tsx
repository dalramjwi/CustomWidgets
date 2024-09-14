import React, { useState } from "react";
import textContent from "./textContent";
import Modal from "./Modal";

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  return (
    <div
      className={`relative min-h-screen`}
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-2xl font-bold text-center py-4">
        {textContent.name}
      </h1>
      <div
        className="cursor-pointer text-center underline"
        onClick={() => setIsModalOpen(true)}
      >
        Click to open modal
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Modal
            setBgColor={setBgColor}
            setIsModalOpen={setIsModalOpen}
            name={textContent.name}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
