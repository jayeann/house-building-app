import React, { useContext, useState } from "react";
import { Modal, Card } from "react-bootstrap";
import BackButton from "../components/Button/BackButton";
import BasicButton from "../components/Button/BasicButton";
import Floor from "../components/Floor";
import FloorContext from "../context/FloorContext";
import Room from "../components/Room";
import { CustomFloorProps } from "../types/pages/CustomFloor.props";

function CustomFloor({ show, handleClose }: CustomFloorProps) {
  const floorContext = useContext(FloorContext);
  const customFloors = floorContext?.levelFloorsData.customFloor || [];

  const handleChange = (roomId: string, floorLevel: number, e: any) => {
    const floorSingle = customFloors[floorLevel - 1];
    const inputId = e.target.id;
    const inputValue = e.target.value;
    const keyName = inputId.split("_")[0];
    floorSingle?.rooms.map((item: any) => {
      if (item.id === roomId) {
        item[keyName] = inputValue;
      }
      return item;
    });

    floorContext?.setLevelFloorsData({
      ...floorContext?.levelFloorsData,
      customFloor: customFloors,
    });
  };

  const handleRemoveRoom = () => {
    //insert code here
  };

  return (
    <Modal show={show} onHide={handleClose} fullscreen>
      <Modal.Header closeButton>
        <Modal.Title>Customize the floor of your house</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {customFloors.length &&
          customFloors.map((item: any, index: number) => (
            <Card
              key={item.floorNumber + "-" + index}
              className="card-custom-floor mb-3"
            >
              <Card.Body className="p-4">
                <Floor
                  key={index}
                  level={item?.floorNumber}
                  handleAddRoom={() =>
                    floorContext?.handleAddRoom(item?.floorNumber)
                  }
                >
                  {item?.rooms.map((itemRoom: any, indexRoom: number) => (
                    <Card className="mb-2 ">
                      <Card.Body>
                        <Room
                          id={itemRoom.id}
                          key={indexRoom}
                          item={itemRoom}
                          floorLevel={item?.floorNumber}
                          handleChange={handleChange}
                          handleRemoveRoom={handleRemoveRoom}
                        />
                      </Card.Body>
                    </Card>
                  ))}
                </Floor>
              </Card.Body>
            </Card>
          ))}
      </Modal.Body>
      <Modal.Footer>
        <BackButton handleClick={handleClose}>Back</BackButton>
        <BasicButton className="step-btn" handleClick={handleClose}>
          Save Changes
        </BasicButton>
      </Modal.Footer>
    </Modal>
  );
}

export default CustomFloor;
