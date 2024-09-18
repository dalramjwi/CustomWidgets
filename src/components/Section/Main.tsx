import React, { useState } from "react";
import Modal from "../Modal/Modal";
import ItemModal from "../Modal/ItemModal";
import { Content } from "../../interface/interface";
import { MaintextContent, textContent } from "../../data/textContent";

const Main: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [hasConfiguredGrid, setHasConfiguredGrid] = useState(false);
  const [content, setContent] = useState<Content>({
    name: textContent.name,
    bgColor: MaintextContent.bgColor,
    textColor: MaintextContent.textColor,
    isNameHidden: MaintextContent.isNameHidden,
    gridConfig: MaintextContent.gridConfig,
  });

  // Grid items 상태 관리
  const [gridItems, setGridItems] = useState(
    [...Array(content.gridConfig.row * content.gridConfig.col)].map((_, i) => ({
      id: i,
      name: `Item ${i + 1}`,
      bgColor: content.bgColor,
      textColor: content.textColor,
    }))
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
    const totalItems = content.gridConfig.row * content.gridConfig.col;

    // 기존 아이템을 유지하면서 그리드 설정 업데이트
    const updatedGridItems = [...gridItems];

    // 아이템이 부족할 경우 새 아이템 추가
    if (updatedGridItems.length < totalItems) {
      for (let i = updatedGridItems.length; i < totalItems; i++) {
        updatedGridItems.push({
          id: i,
          name: `Item ${i + 1}`,
          bgColor: content.bgColor,
          textColor: content.textColor,
        });
      }
    }

    // 아이템이 초과할 경우 남는 아이템 제거
    if (updatedGridItems.length > totalItems) {
      updatedGridItems.length = totalItems;
    }

    setGridItems(updatedGridItems);
  }, [content.gridConfig]);

  const [selectedItem, setSelectedItem] = useState<{
    id: number;
    name: string;
    bgColor: string;
    textColor: string;
  } | null>(null);

  const handleItemClick = (item: {
    id: number;
    name: string;
    bgColor: string;
    textColor: string;
  }) => {
    setSelectedItem(item);
    setIsItemModalOpen(true);
  };

  const closeItemModal = () => {
    setSelectedItem(null);
    setIsItemModalOpen(false);
  };

  const handleItemUpdate = (updatedItem: {
    id: number;
    name: string;
    bgColor: string;
    textColor: string;
  }) => {
    setGridItems((prevItems) =>
      prevItems.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
    closeItemModal();
  };

  const handleSave = () => {
    setHasConfiguredGrid(true); // 설정 완료 후 true로 변경
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div
      className="relative min-h-screen"
      style={{ backgroundColor: content.bgColor }}
    >
      <h1 className="text-4xl font-bold text-center py-4">
        {!content.isNameHidden && (
          <span style={{ color: content.textColor }}>{content.name}</span>
        )}
      </h1>
      <div
        className="cursor-pointer w-10 h-10 bg-black text-white flex items-center justify-center rounded-full text-lg absolute top-4 right-4"
        onClick={() => {
          if (!hasConfiguredGrid) setIsModalOpen(true); // 설정이 완료되지 않았다면 모달 열기
        }}
      >
        <span>⚙️</span>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <Modal
            content={content}
            setContent={setContent}
            setIsModalOpen={setIsModalOpen}
            showName={true}
            showGridConfig={true}
            handleSave={handleSave} // 저장 시 설정 완료
          />
        </div>
      )}

      {isItemModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <ItemModal
            item={selectedItem}
            onClose={closeItemModal}
            onUpdate={handleItemUpdate}
          />
        </div>
      )}

      <div
        className="grid gap-4 mt-4 justify-items-center px-10"
        style={{
          gridTemplateColumns: `repeat(${content.gridConfig.col}, 1fr)`,
          gap: "0.8vw",
          height: "85vh",
        }}
      >
        {gridItems.map((item, i) => (
          <div
            key={item.id}
            className="border border-gray-300 w-32 h-32 flex items-center justify-center"
            style={{
              backgroundColor: item.bgColor,
              color: item.textColor,
              height: "100%",
              width: "100%",
              borderRadius: "0.25vw",
            }}
            draggable
            onDragStart={() => handleDragStart(i)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(i)}
            onClick={() => handleItemClick(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
