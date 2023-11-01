import { Card, Container, Row } from "react-bootstrap";
import BasicButton from "../components/Button/BasicButton";
import { Link, useNavigate } from "react-router-dom";
import BackButton from "../components/Button/BackButton";
import SummaryContent from "../components/SummaryContent";
import {
  faLayerGroup,
  faPeopleRoof,
  faRulerCombined,
  faSeedling,
  faTrowelBricks,
} from "@fortawesome/free-solid-svg-icons";

function Summary() {
  const navigate = useNavigate();
  const foundation = JSON.parse(localStorage.foundation);
  const noOfFloors = JSON.parse(localStorage.noOfFloors);
  const floorArea = JSON.parse(localStorage.floorArea);
  const roof = JSON.parse(localStorage.roof);
  const garden = JSON.parse(localStorage.garden);

  const handleEdit = (val: number) => {
    navigate("/build", {
      state: {
        step: val,
      },
    });
  };

  const handleSubmit = () => {
    localStorage.clear();
    navigate("/", {
      state: {
        success: true,
      },
    });
  };
  return (
    <Container className={"container-step "}>
      <Card className="container-step-content">
        <h1>Summary</h1>
        <p>Review all details of your house before submitting</p>
        <hr />
        <Card.Body>
          <SummaryContent
            icon={faTrowelBricks}
            items={foundation}
            title="foundation type"
            handleClick={() => handleEdit(0)}
          />
          <SummaryContent
            icon={faRulerCombined}
            title="floor size"
            items={floorArea}
            unit="meters"
            handleClick={() => handleEdit(1)}
          />
          <SummaryContent
            icon={faLayerGroup}
            title="no. of floors"
            items={noOfFloors}
            handleClick={() => handleEdit(2)}
            hasFloors
          />
          <SummaryContent
            icon={faPeopleRoof}
            title="roof type"
            items={roof}
            handleClick={() => handleEdit(3)}
          />
          <SummaryContent
            icon={faSeedling}
            title="garden"
            items={garden.selectedPlants}
            handleClick={() => handleEdit(4)}
            hasImg
          />
        </Card.Body>
        <Card.Footer>
          <BackButton
            handleClick={() =>
              navigate("/build", {
                state: { step: 4 },
              })
            }
          >
            Go back
          </BackButton>
          <BasicButton
            className={"step-btn"}
            size={"lg"}
            handleClick={handleSubmit}
          >
            Submit
          </BasicButton>
        </Card.Footer>
      </Card>
    </Container>
  );
}

export default Summary;
