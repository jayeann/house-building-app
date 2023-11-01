import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../style/components/button.css";

function BasicButton({
  className,
  variant,
  handleClick,
  children,
  value,
  size,
  hasIcon,
  icon,
}: any) {
  return (
    <Button
      id={"build-btn"}
      className={className}
      variant={variant}
      onClick={handleClick}
      value={value}
      size={size}
    >
      {children}
      {hasIcon && <FontAwesomeIcon icon={icon} size="lg" fixedWidth />}
    </Button>
  );
}

export default BasicButton;
