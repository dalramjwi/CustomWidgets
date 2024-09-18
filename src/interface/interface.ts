export interface Content {
  name: string;
  bgColor: string;
  textColor: string;
  isNameHidden: boolean;
  gridConfig: { row: number; col: number };
}
export interface ModalProps {
  content: Content;
  setContent: React.Dispatch<React.SetStateAction<Content>>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showName?: boolean;
  showGridConfig?: boolean;
}
export interface Item {
  id: number;
  name: string;
  bgColor: string;
  textColor: string;
}

export interface ItemModalProps {
  item: Item;
  onClose: () => void;
  onUpdate: (updatedItem: Item) => void;
}
