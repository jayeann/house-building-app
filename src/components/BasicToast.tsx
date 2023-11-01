import { Link } from "react-router-dom";
import { Toast, ToastContainer } from "react-bootstrap";
import BasicButton from "./BasicButton";
import { ToastProps } from "../types/component/Toast.props";
import "../style/components/toast.css";

function BasicToast({
  text,
  cancelBtnTxt,
  submitBtnTxt,
  title,
  cancelAction,
  showToast,
  autoHide,
  delay,
  onClose,
}: ToastProps) {
  return (
    <ToastContainer className="p-3" position={"top-end"}>
      <Toast
        show={showToast}
        animation
        autohide={autoHide}
        delay={delay}
        onClose={onClose}
      >
        <Toast.Header closeButton={false}>
          <strong className="me-auto">&#127968; {title}</strong>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
        <Toast.Body>
          {cancelAction && (
            <BasicButton
              size={"sm"}
              className="toast-cancel-btn"
              handleClick={cancelAction}
            >
              {cancelBtnTxt}
            </BasicButton>
          )}
          {submitBtnTxt && (
            <Link to="/build">
              <BasicButton className="toast-btn" size={"sm"}>
                {submitBtnTxt}
              </BasicButton>
            </Link>
          )}
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default BasicToast;
