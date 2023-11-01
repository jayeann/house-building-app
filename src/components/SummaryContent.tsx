import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from "react-bootstrap";
import BasicButton from "./BasicButton";
import { SummaryContentProps } from "../types/component/SummaryContent.props";
import ImageSelect from "./ImageSelect";
import { RoomItem } from "../types/component/Room.props";

function SummaryContent({
  icon,
  items,
  title,
  unit,
  hasImg,
  hasFloors,
  handleClick,
}: SummaryContentProps) {
  return (
    <Container className="container-summary">
      <Row>
        <Col>
          <FontAwesomeIcon icon={icon} size="lg" fixedWidth />
        </Col>
        <Col lg={10}>
          <label>{title}</label>
          {unit && (
            <p className="size">
              {items.length} {unit} long x {items.width} {unit} wide
            </p>
          )}
          {hasImg && (
            <div className="mt-4">
              <Row>
                {items?.length ? (
                  items?.map((item: any, key: number) => (
                    <Col lg="2" key={key}>
                      <ImageSelect item={item} isSelected={item.isChecked} />
                    </Col>
                  ))
                ) : (
                  <label>No plants selected.</label>
                )}
              </Row>
            </div>
          )}

          <p>{items?.value || items?.level}</p>

          {hasFloors && (
            <div>
              {items?.customFloor?.length ? (
                items?.customFloor?.map((item: any, key: number) => {
                  const filteredArray = item.rooms.filter((obj: any) =>
                    Object.values(obj).every((value) => value !== null)
                  );

                  return (
                    <>
                      <hr />
                      <h5>Floor {item.floorNumber}</h5>
                      <hr />
                      {filteredArray.length === 0 ? (
                        <label className="mb-4">No rooms available.</label>
                      ) : (
                        <>
                          {filteredArray.map(
                            (roomItem: RoomItem, roomKey: number) => {
                              return (
                                <Row key={roomKey}>
                                  <Col lg="2">
                                    <label>ROOM {roomItem?.room}</label>
                                  </Col>
                                  <Col>
                                    <Row>
                                      <Col>
                                        <label>floor size</label>
                                        <p>{roomItem?.roomSize}</p>
                                      </Col>
                                      <Col>
                                        <label>floor type</label>
                                        <p>{roomItem?.floorType}</p>
                                      </Col>
                                      <Col>
                                        <label>room type</label>
                                        <p>{roomItem?.roomType}</p>
                                      </Col>
                                    </Row>

                                    <Row>
                                      <Col>
                                        <label>no. of windows</label>
                                        <p>{roomItem?.windows}</p>
                                      </Col>
                                      <Col>
                                        <label>window type</label>
                                        <p>
                                          {typeof roomItem?.windowType ===
                                            "string" &&
                                            roomItem?.windowType.replace(
                                              "_",
                                              " "
                                            )}
                                        </p>
                                      </Col>
                                      <Col>
                                        <label>window style</label>
                                        <p>
                                          {typeof roomItem?.windowStyle ===
                                            "string" &&
                                            roomItem?.windowStyle.replace(
                                              "_",
                                              " "
                                            )}
                                        </p>
                                      </Col>
                                      <Col>
                                        <label>glass type</label>
                                        <p>
                                          {typeof roomItem?.glassType ===
                                            "string" &&
                                            roomItem?.glassType.replace(
                                              "_",
                                              " "
                                            )}
                                        </p>
                                      </Col>
                                    </Row>
                                  </Col>
                                </Row>
                              );
                            }
                          )}
                        </>
                      )}
                    </>
                  );
                })
              ) : (
                <label>No floor customization.</label>
              )}
            </div>
          )}
        </Col>
        <Col lg={1}>
          <BasicButton className="summary-btn" handleClick={handleClick}>
            Edit
          </BasicButton>
        </Col>
        <hr />
      </Row>
    </Container>
  );
}

export default SummaryContent;
