import React, { useState } from "react";
import Modal from "./Modal";
import Content from "./interface";
import { MaintextContent, textContent } from "./textContent";

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [content, setContent] = useState<Content>({
    name: textContent.name,
    bgColor: MaintextContent.bgColor,
    textColor: MaintextContent.textColor,
    isNameHidden: MaintextContent.isNameHidden,
    gridConfig: MaintextContent.gridConfig,
  });

  // Grid items 상태 관리
  const [gridItems, setGridItems] = useState(
    [...Array(content.gridConfig.row * content.gridConfig.col)].map(
      (_, i) => `Item ${i + 1}`
    )
  );

  // 드래그 중인 아이템의 인덱스
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  // 드래그 시작
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  // 드래그 중
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // 드롭
  const handleDrop = (index: number) => {
    if (draggedIndex !== null) {
      const updatedItems = [...gridItems];
      [updatedItems[draggedIndex], updatedItems[index]] = [
        updatedItems[index],
        updatedItems[draggedIndex],
      ];
      setGridItems(updatedItems);
      setDraggedIndex(null);
    }
  };

  // Grid items 상태 업데이트 (content.gridConfig 변경 시 호출)
  React.useEffect(() => {
    setGridItems(
      [...Array(content.gridConfig.row * content.gridConfig.col)].map(
        (_, i) => `Item ${i + 1}`
      )
    );
  }, [content.gridConfig]);

  return (
    <div
      className={`relative min-h-screen`}
      style={{ backgroundColor: content.bgColor }}
    >
      <h1 className="text-2xl font-bold text-center py-4">
        {!content.isNameHidden && (
          <span style={{ color: content.textColor }}>{content.name}</span>
        )}
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
            showName={true} // 필요에 따라 true/false 설정
            showGridConfig={true} // 필요에 따라 true/false 설정
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
        {gridItems.map((item, i) => (
          <div
            key={i}
            className="border border-gray-300 w-32 h-32 flex items-center justify-center"
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(i)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
