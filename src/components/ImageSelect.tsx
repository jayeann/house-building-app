import { Card, Form, Image } from "react-bootstrap";
import { ImageSelectProps } from "../types/component/ImageSelect.props";
import "../style/components/card.css";

function ImageSelect({ item, isSelected, handleClick }: ImageSelectProps) {
  return (
    <Card className={`card-image ${isSelected && `card-active`}`}>
      <Form.Check
        id={item.id}
        type="checkbox"
        name={item.common_name}
        checked={isSelected}
        onChange={(e) => handleClick && handleClick(item, e)}
        label={
          <>
            <Image src={item?.default_image?.thumbnail} width={80} rounded />
            <label>{item?.common_name}</label>
          </>
        }
      />
    </Card>
  );
}

export default ImageSelect;
