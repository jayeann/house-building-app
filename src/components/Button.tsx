import React from "react";
// import { Button } from "react-bootstrap";
import "./button.css";

function Button({ handleClick, active, children }: any) {
  return <button>{children}</button>;
}

export default Button;
