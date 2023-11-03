import { Row, Col, Form, InputGroup } from "react-bootstrap";

import {
  FLOOR_TYPE,
  ROOM_TYPE,
  WINDOW_TYPE,
  WINDOW_STYLE,
  GLASS_TYPE,
} from "../data";
import { RoomProps } from "../types/component/Room.props";

function Room({
  id,
  item,
  key,
  floorLevel,
  handleChange,
  handleRemoveRoom,
}: RoomProps) {
  return (
    <Row key={key}>
      <Col lg={2}>
        <h4>ROOM {item?.room}</h4>
      </Col>
      <Col>
        <Form>
          <Row>
            <Form.Group as={Col} className=" mb-3">
              <Form.Label>SIZE OF ROOM</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control
                  id={`roomSize_${id}`}
                  placeholder="0"
                  onChange={(e) => handleChange(id, floorLevel, e)}
                  value={item.roomSize}
                />
                <InputGroup.Text>sqm</InputGroup.Text>
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} className=" mb-3">
              <Form.Label>TYPE OF ROOM</Form.Label>
              <Form.Select
                id={`roomType_${id}`}
                defaultValue="Choose..."
                onChange={(e) => handleChange(id, floorLevel, e)}
                value={item.roomType}
              >
                <option>Choose...</option>
                {ROOM_TYPE.map((item) => (
                  <option value={item.key}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} className=" mb-3">
              <Form.Label>FLOOR TYPE</Form.Label>
              <Form.Select
                id={`floorType_${id}`}
                defaultValue="Choose..."
                onChange={(e) => handleChange(id, floorLevel, e)}
                value={item.floorType}
              >
                <option>Choose...</option>
                {FLOOR_TYPE.map((item) => (
                  <option value={item.key}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>

          <Row>
            <Form.Group as={Col} className=" mb-3">
              <Form.Label>NO. OF WINDOWS</Form.Label>
              <InputGroup className="mb-2">
                <Form.Control
                  id={`windows_${id}`}
                  placeholder="0"
                  onChange={(e) => handleChange(id, floorLevel, e)}
                  value={item.windows}
                />
              </InputGroup>
            </Form.Group>
            <Form.Group as={Col} className=" mb-3">
              <Form.Label>TYPE OF WINDOW</Form.Label>
              <Form.Select
                id={`windowType_${id}`}
                defaultValue="Choose..."
                onChange={(e) => handleChange(id, floorLevel, e)}
                value={item.windowType}
              >
                <option>Choose...</option>
                {WINDOW_TYPE.map((item) => (
                  <option value={item.key}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} className=" mb-3">
              <Form.Label>WINDOW STYLE</Form.Label>
              <Form.Select
                id={`windowStyle_${id}`}
                defaultValue="Choose..."
                onChange={(e) => handleChange(id, floorLevel, e)}
                value={item.windowStyle}
              >
                <option>Choose...</option>
                {WINDOW_STYLE.map((item) => (
                  <option value={item.key}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col} className=" mb-3">
              <Form.Label>GLASS STYPE</Form.Label>
              <Form.Select
                id={`glassType_${id}`}
                defaultValue="Choose..."
                onChange={(e) => handleChange(id, floorLevel, e)}
                value={item.glassType}
              >
                <option>Choose...</option>
                {GLASS_TYPE.map((item) => (
                  <option value={item.key}>{item.name}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
        </Form>
      </Col>
      <Col lg="1">
        <div className="container-remove-room">{/* insert btn here */}</div>
      </Col>
    </Row>
  );
}

export default Room;
