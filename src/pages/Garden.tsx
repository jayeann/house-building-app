import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";
import StepHeader from "../components/StepHeader";
import BasicButton from "../components/Button/BasicButton";
import BackButton from "../components/Button/BackButton";
import StepContext from "../context/StepContext";
import Loader from "../components/Loader";
import ImageSelect from "../components/ImageSelect";
import { PlantsTypes } from "../types/pages/Plants.types";
import usePlants from "../hooks/usePlants";
import useIsObjectEmpty from "../hooks/useIsObjectEmpty";
import useLocalStorage from "../hooks/useLocalStorage";

function Garden() {
  const navigate = useNavigate();
  const stepContext = useContext(StepContext);
  const [storedValue, setLocalValue] = useLocalStorage("garden", {});
  const { error, data, isLoading } = usePlants(storedValue);
  const plantsData = useIsObjectEmpty(storedValue)
    ? data?.data
    : storedValue.updatedPlantList;
  const [checkboxValues, setCheckboxValues] = useState(plantsData);
  const [selectedPlants, setSelectedPlants] = useState<PlantsTypes[]>(
    storedValue?.selectedPlants || []
  );

  useEffect(() => {
    if (!isLoading && plantsData) {
      setCheckboxValues(plantsData);
    }
  }, [plantsData]);

  const handleCheckboxChange = (item: any, event: any) => {
    const updatedList = checkboxValues;
    if (updatedList) {
      const { checked } = event.target;
      updatedList[item.id - 1].isChecked = checked;

      if (checked) {
        setSelectedPlants([...selectedPlants, updatedList[item.id - 1]]);
      } else {
        const newArray = selectedPlants.filter(
          (selected) => selected.id !== item.id
        );
        setSelectedPlants(newArray);
      }
      setCheckboxValues(updatedList);
    }
  };

  const handleReview = () => {
    setLocalValue({
      updatedPlantList: checkboxValues,
      selectedPlants,
    });
    navigate("/summary");
  };

  const handleBack = () => stepContext?.handleBackBtn();

  const CardContent = () => {
    if (isLoading) {
      console.log(data);
      return <Loader />;
    }
    if (error) {
      return "An error has occurred: " + error.message;
    }
    const plants = checkboxValues;
    console.log("plants:", plants, checkboxValues, plantsData);
    return (
      <Container className="container-plants mt-4">
        <Row>
          {plants?.length &&
            plants?.map((item: any, key: number) => (
              <Col lg="2" key={key}>
                <ImageSelect
                  item={item}
                  isSelected={item.isChecked}
                  handleClick={handleCheckboxChange}
                />
              </Col>
            ))}
        </Row>
      </Container>
    );
  };
  return (
    <Card className="container-step-content">
      <Card.Body>
        <StepHeader
          question={`Choose plants that you want to put in your garden.`}
          step={5}
        />
        <CardContent />
        {/* <Loader /> */}
      </Card.Body>
      <Card.Footer>
        <BackButton handleClick={handleBack}>Back</BackButton>
        <BasicButton size={"lg"} handleClick={handleReview}>
          Review
        </BasicButton>
      </Card.Footer>
    </Card>
  );
}

export default Garden;
