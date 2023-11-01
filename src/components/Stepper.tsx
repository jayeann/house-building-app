import React from "react";
import { StepperProps } from "../types/component/Stepper.props";
import { Row, Col } from "react-bootstrap";

function Stepper({ data, selectedStep, selectedItem, onClick }: StepperProps) {
  return (
    <Row>
      <Col lg={3}>
        <ul className="list-group ">
          {data.length === 0 && <p>No item found.</p>}
          {data.map((item, index) => (
            <li
              key={index}
              className={`list-group-item ${
                selectedStep === item.id && "active"
              } pull-right`}
            >
              <Row>
                <Col>{item.stepName}</Col>
                <Col lg={4}>{item.icon}</Col>
              </Row>
            </li>
          ))}
        </ul>
      </Col>
      <Col>{selectedItem?.module}</Col>
    </Row>
  );
}

export default Stepper;
