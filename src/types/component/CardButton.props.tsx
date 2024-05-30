export interface Item {
  id: number;
  value: string;
  icon: any;
  description: string;
}

export interface CardButtonProps {
  isSelected: boolean;
  item: Item;
  handleClick: (item: Item) => void;
}
