import React, { useState } from "react";
import Modal from "./Modal";
import textContent from "./textContent"; // textContent를 import

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState({
    name: textContent.name, // textContent의 name 값을 초기값으로 설정
    bgColor: "white", // 배경색 초기값
    isNameHidden: false, // 이름 숨김 여부
    gridConfig: { row: 1, col: 1 }, // grid 설정 초기값
  });

  return (
    <div
      className={`relative min-h-screen`}
      style={{ backgroundColor: content.bgColor }}
    >
      <h1 className="text-2xl font-bold text-center py-4">
        {!content.isNameHidden && content.name}
      </h1>
      <div
        className="cursor-pointer w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg"
        onClick={() => setIsModalOpen(true)}
      ></div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Modal
            content={content}
            setContent={setContent}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
      )}

      {/* Grid Rendering */}
      <div
        className="grid gap-4 mt-4"
        style={{
          gridTemplateColumns: `repeat(${content.gridConfig.col}, 1fr)`,
        }}
      >
        {[...Array(content.gridConfig.row * content.gridConfig.col)].map(
          (_, i) => (
            <div key={i} className="border border-gray-300 w-32 h-32">
              Grid Item {i + 1}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Main;
