import React, { useContext, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import StepHeader from "../components/StepHeader";
import BasicButton from "../components/BasicButton";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CardButton from "../components/CardButton";
import { FoundationProps } from "../types/pages/Foundation.props";
import StepContext from "../context/StepContext";
import { Link } from "react-router-dom";
import BackButton from "../components/BackButton";
import Note from "../components/Note";
import { FOUNDATION_TYPE } from "../data";
import useLocalStorage from "../hooks/useLocalStorage";

function Foundation() {
  const stepContext = useContext(StepContext);
  const [storedValue, setLocalValue] = useLocalStorage("foundation", {});
  const [selectedFoundation, setSelectedFoundation] = useState(
    storedValue || {}
  );

  const handleClick = (item: any) => {
    setSelectedFoundation(item);
  };

  const handleCancel = () => {
    localStorage.clear();
  };

  const handleNext = () => {
    setLocalValue(selectedFoundation);
    stepContext?.handleNextBtn();
  };

  return (
    <Card className="container-step-content">
      <Card.Body>
        <StepHeader question={`What type of foundation?`} step={1} />
        <Row>
          {FOUNDATION_TYPE.map((item) => {
            return (
              <Col key={item.id}>
                <CardButton
                  isSelected={item.id === selectedFoundation?.id}
                  item={item}
                  handleClick={handleClick}
                />
              </Col>
            );
          })}
        </Row>
        {Object.keys(selectedFoundation).length !== 0 && (
          <Note description={selectedFoundation?.description || ""} />
        )}
      </Card.Body>
      <Card.Footer>
        <Link to="/">
          <BackButton handleClick={handleCancel}>Cancel</BackButton>
        </Link>
        <BasicButton
          icon={faChevronRight}
          className={"step-btn"}
          size={"lg"}
          hasIcon
          handleClick={handleNext}
        >
          Next
        </BasicButton>
      </Card.Footer>
    </Card>
  );
}

export default Foundation;
