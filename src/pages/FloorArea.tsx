import React, { useContext, useState } from "react";
import { Card, Col, Form, Row, Image, InputGroup } from "react-bootstrap";
import StepHeader from "../components/StepHeader";
import BackButton from "../components/BackButton";
import BasicButton from "../components/BasicButton";
import StepContext from "../context/StepContext";
import IMAGES from "../assets";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useLocalStorage from "../hooks/useLocalStorage";

function FloorArea() {
  const stepContext = useContext(StepContext);
  const [storedValue, setLocalValue] = useLocalStorage("floorArea", {});

  const [floorAreaData, setFloorAreaData] = useState(storedValue);

  const handleInputChange = (e: any) => {
    setFloorAreaData({
      ...floorAreaData,
      [e.target.id]: e.target.value,
    });
  };

  const handleNext = () => {
    setLocalValue(floorAreaData);
    stepContext?.handleNextBtn();
  };

  return (
    <Card className="container-step-content">
      <Card.Body>
        <StepHeader question={`What is the floor size?`} step={2} />
        <Row>
          <Col lg={5}>
            <Form>
              <Form.Group className="mt-5 mb-3">
                <Form.Label>LENGTH</Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    id="length"
                    type="number"
                    placeholder="0"
                    size="lg"
                    onChange={handleInputChange}
                    value={floorAreaData.length}
                  />
                  <InputGroup.Text>meter</InputGroup.Text>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>WIDTH</Form.Label>
                <InputGroup className="mb-2">
                  <Form.Control
                    id="width"
                    type="number"
                    placeholder="0"
                    size="lg"
                    onChange={handleInputChange}
                    value={floorAreaData.width}
                  />
                  <InputGroup.Text>meter</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Form>
          </Col>
          <Col className="pull-right">
            <Image src={IMAGES.floorIllustration} height={250} width={450} />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <BackButton handleClick={() => stepContext?.handleBackBtn()}>
          Back
        </BackButton>
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

export default FloorArea;
