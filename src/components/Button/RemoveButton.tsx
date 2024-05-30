import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackButtonProps } from "../../types/component/BackButton.props";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import "../../style/components/button.css";

function RemoveButton({ children, value, size, handleClick }: BackButtonProps) {
  return (
    <Button
      id="remove-btn"
      variant="light"
      onClick={handleClick}
      value={value}
      size={size && size}
    >
      <FontAwesomeIcon icon={faTrashCan} size="lg" fixedWidth />
      {children}
    </Button>
  );
}

export default RemoveButton;
