import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <div className="d-flex align-items-center justify-content-center loader">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default Loader;
