import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Foundation from "./Foundation";
import FloorArea from "./FloorArea";
import NoOfFloors from "./NoOfFloors";
import Roof from "./Roof";
import Garden from "./Garden";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLayerGroup,
  faPeopleRoof,
  faRulerCombined,
  faSeedling,
  faTrowelBricks,
} from "@fortawesome/free-solid-svg-icons";
import Stepper from "../components/Stepper";
import { StepperObject } from "../types/component/Stepper.props";
import StepContext from "../context/StepContext";
import { StepContextTypes } from "../types/context/StepContext.type";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const data = [
  {
    id: 0,
    stepName: "Foundation",
    module: <Foundation />,
    icon: <FontAwesomeIcon icon={faTrowelBricks} size="lg" fixedWidth />,
  },
  {
    id: 1,
    stepName: "Floor Area",
    module: <FloorArea />,
    icon: <FontAwesomeIcon icon={faRulerCombined} size="lg" fixedWidth />,
  },
  {
    id: 2,
    stepName: "No. of Floors",
    module: <NoOfFloors />,
    icon: <FontAwesomeIcon icon={faLayerGroup} size="lg" fixedWidth />,
  },
  {
    id: 3,
    stepName: "Roof",
    module: <Roof />,
    icon: <FontAwesomeIcon icon={faPeopleRoof} size="lg" fixedWidth />,
  },
  {
    id: 4,
    stepName: "Garden",
    module: <Garden />,
    icon: <FontAwesomeIcon icon={faSeedling} size="lg" fixedWidth />,
  },
];

function BuildHouse() {
  const defaultKey: number = 0;
  const location = useLocation();
  const locStep = location?.state?.step;

  const [selectedStep, setSelectedStep] = useState(locStep || defaultKey);
  const [selectedItem, setSelectedItem] = useState<StepperObject>(
    data[locStep] || data[defaultKey]
  );

  const handleSelect = (item: StepperObject) => (e: any) => {
    setSelectedStep(item.id);
    setSelectedItem(item);
  };

  const handleNextBtn = () => {
    // if (value) {
    setSelectedStep(selectedStep + 1);
    setSelectedItem(data[selectedStep + 1]);

    // localStorage.setItem(key, JSON.stringify(value));
    // }
  };

  const handleBackBtn = () => {
    setSelectedStep(selectedStep - 1);
    setSelectedItem(data[selectedStep - 1]);
  };

  const stepContext: StepContextTypes = {
    handleNextBtn,
    handleBackBtn,
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container className="container-step">
        <h1>Build your House</h1>
        <p>Follow the steps to complete your dream house</p>
        <StepContext.Provider value={stepContext}>
          <Stepper
            data={data}
            selectedStep={selectedStep}
            selectedItem={selectedItem}
            onClick={handleSelect}
          />
        </StepContext.Provider>
      </Container>
    </QueryClientProvider>
  );
}

export default BuildHouse;
