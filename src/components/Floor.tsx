import { Row, Col } from "react-bootstrap";
import BasicButton from "./Button/BasicButton";
import { FloorProps } from "../types/component/Floor.props";

function Floor({ level, handleAddRoom, children }: FloorProps) {
  return (
    <Row>
      <Col>
        <h3>Floor {level}</h3>
      </Col>
      <Col lg="2">
        <BasicButton className="toast-cancel-btn" handleClick={handleAddRoom}>
          + Add Room
        </BasicButton>
      </Col>
      <hr />
      {children}
    </Row>
  );
}

export default Floor;
