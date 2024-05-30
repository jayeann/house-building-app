import { useContext, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import StepHeader from "../components/StepHeader";
import BackButton from "../components/Button/BackButton";
import BasicButton from "../components/Button/BasicButton";
import StepContext from "../context/StepContext";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CardButton from "../components/Button/CardButton";
import Note from "../components/Note";
import { ROOF_TYPE } from "../data";
import useLocalStorage from "../hooks/useLocalStorage";

function Roof() {
  const [storedValue, setLocalValue] = useLocalStorage("roof", {});
  const stepContext = useContext(StepContext);

  const [selectedRoof, setSelectedRoof] = useState(storedValue || {});

  const handleClick = (item: any) => {
    setSelectedRoof(item);
  };

  const handleNext = () => {
    setLocalValue(selectedRoof);
    stepContext?.handleNextBtn();
  };

  return (
    <Card className="container-step-content">
      <Card.Body>
        <StepHeader question={`What type of roof?`} step={4} />
        <Row>
          {ROOF_TYPE.map((item) => (
            <Col key={item.id}>
              <CardButton
                isSelected={item.id === selectedRoof?.id}
                item={item}
                handleClick={handleClick}
              />
            </Col>
          ))}
        </Row>
        {Object.keys(selectedRoof).length !== 0 && (
          <Note description={selectedRoof?.description || ""} />
        )}
      </Card.Body>
      <Card.Footer>
        <BackButton handleClick={() => stepContext?.handleBackBtn()}>
          Back
        </BackButton>
        <BasicButton
          icon={faChevronRight}
          className={""}
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

export default Roof;
