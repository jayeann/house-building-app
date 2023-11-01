import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  Card,
  Col,
  Form,
  Row,
  Image,
  Modal,
  InputGroup,
} from "react-bootstrap";
import StepHeader from "../components/StepHeader";
import BackButton from "../components/Button/BackButton";
import BasicButton from "../components/Button/BasicButton";
import StepContext from "../context/StepContext";
import IMAGES from "../assets";
import CustomFloor from "./CustomFloor";
import FloorContext from "../context/FloorContext";
import { FloorContextTypes } from "../types/context/FloorContext.types";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import useIsObjectEmpty from "../hooks/useIsObjectEmpty";
import useLocalStorage from "../hooks/useLocalStorage";

const DEFAULT_ROOM_OBJ = {
  id: "",
  room: null,
  roomSize: null,
  roomType: "",
  floorType: "",
  windows: null,
  windowType: "",
  glassType: "",
};

function NoOfFloors() {
  const stepContext = useContext(StepContext);
  const [storedValue, setLocalValue] = useLocalStorage("noOfFloors", {});

  const [levelFloorsData, setLevelFloorsData] = useState(storedValue);

  const [show, setShow] = useState(false);

  const handleInputChange = (e: any) => {
    setLevelFloorsData({
      [e.target.id]: e.target.value,
    });
  };

  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    !levelFloorsData.customFloor && handleCustomFloor(levelFloorsData);
  };

  const handleAddRoom = (level: number) => {
    const newData = { ...levelFloorsData };
    const objectToModify = newData.customFloor.find(
      (item: any) => item.floorNumber === level
    );
    const currentRoomCount = objectToModify.rooms.length;
    objectToModify.rooms.push({
      ...DEFAULT_ROOM_OBJ,
      id: uuidv4(),
      room: currentRoomCount + 1,
    });

    setLevelFloorsData(newData);
  };

  const handleRemoveRoom = () => {};

  const handleBack = () => {
    stepContext?.handleBackBtn();
  };

  const handleCustomFloor = (value: any) => {
    const newArr: any = [];
    const floors = value.level;
    const hasLocalRooms = value.customFloor;

    if (!hasLocalRooms) {
      {
        Array.from({ length: floors }, (item, index) =>
          newArr.push({
            floorNumber: index + 1,
            rooms: [
              {
                ...DEFAULT_ROOM_OBJ,
                id: uuidv4(),
                room: 1,
              },
            ],
          })
        );
      }
    }
    setLevelFloorsData({ ...levelFloorsData, customFloor: newArr });
  };

  const handleNext = () => {
    // setLevelFloorsData(levelFloorsData);
    setLocalValue(levelFloorsData);
    stepContext?.handleNextBtn();
  };

  const floorContext: FloorContextTypes = {
    levelFloorsData,
    setLevelFloorsData,
    handleAddRoom,
    handleRemoveRoom,
  };

  const levelEmpty = useIsObjectEmpty(levelFloorsData);

  return (
    <Card className="container-step-content">
      <Card.Body>
        <StepHeader question={`How many floors?`} step={3} />
        <Row>
          <Col lg={5}>
            <Form>
              <Form.Group className="mt-5 mb-3">
                <InputGroup className="mb-2">
                  <Form.Control
                    id="level"
                    type="number"
                    placeholder="0"
                    size="lg"
                    onChange={handleInputChange}
                    value={levelFloorsData.level}
                  />
                  <InputGroup.Text>FLRS</InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Form>
            {!levelEmpty && (
              <BasicButton
                className="toast-cancel-btn"
                handleClick={handleShow}
              >
                <u>Customize each floor</u>
              </BasicButton>
            )}
          </Col>
          <Col className="pull-right">
            <Image src={IMAGES.floorLevel} width={450} height={300} />
          </Col>
        </Row>
      </Card.Body>
      <Card.Footer>
        <BackButton handleClick={handleBack}>Back</BackButton>
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
      <FloorContext.Provider value={floorContext}>
        {show && <CustomFloor show={show} handleClose={handleClose} />}
      </FloorContext.Provider>
    </Card>
  );
}

export default NoOfFloors;
