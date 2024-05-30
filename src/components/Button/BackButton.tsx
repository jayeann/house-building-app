import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { BackButtonProps } from "../../types/component/BackButton.props";
import "../../style/components/button.css";

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
