import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import "../style/components/button.css";
import { BackButtonProps } from "../../types/component/BackButton.props";

function BackButton({ children, value, size, handleClick }: BackButtonProps) {
  return (
    <Button
      id="back-button"
      variant={"link"}
      onClick={handleClick}
      value={value}
      size={size && size}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="lg" fixedWidth />
      {children}
    </Button>
  );
}

export default BackButton;
