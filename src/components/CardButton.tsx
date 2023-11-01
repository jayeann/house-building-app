import { Card } from "react-bootstrap";
import "../style/components/card.css";
import { CardButtonProps } from "../types/component/CardButton.props";

function CardButton({ item, isSelected, handleClick }: CardButtonProps) {
  return (
    <Card
      className={`card-btn ${isSelected && `card-active`}`}
      key={item.id}
      onClick={() => handleClick(item)}
    >
      {item.icon}
      <p>{item.value}</p>
    </Card>
  );
}

export default CardButton;
