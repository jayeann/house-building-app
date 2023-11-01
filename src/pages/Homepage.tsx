import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "react-bootstrap";
import BasicButton from "../components/BasicButton";
import BasicToast from "../components/BasicToast";
import useIsObjectEmpty from "../hooks/useIsObjectEmpty";
import "../style/pages/homepage.css";

function Homepage() {
  const items = { ...localStorage };
  const location = useLocation();
  const success = location?.state?.success || false;
  const isLocalObjNotEmpty = !useIsObjectEmpty(items);
  const [showToast, setShowToast] = useState(success || isLocalObjNotEmpty);

  const toggleToast = () => setShowToast(!showToast);

  const handleCancel = () => {
    localStorage.clear();
    toggleToast();
  };

  return (
    <Container className="homepage">
      <h1>
        <span>Build your dream</span> house with us
      </h1>
      <Link to="/build">
        <BasicButton className={"home-btn"}>Build my house</BasicButton>
      </Link>
      <p className="read-the-docs">Made by Jaye Ann Tagoctoc &#128521;</p>

      {success && (
        <BasicToast
          title="Success"
          text="Your request has been successfully submitted."
          autoHide={true}
          delay={5000}
          onClose={() => setShowToast(false)}
          showToast={showToast}
        />
      )}
      {isLocalObjNotEmpty && (
        <BasicToast
          title="Dream House"
          cancelBtnTxt="Not anymore :("
          submitBtnTxt="Yes, I want to continue"
          text="Hello, it seems like you have unfinished form. Do you want to continue?"
          submitLink={"/build"}
          cancelAction={handleCancel}
          showToast={showToast}
        />
      )}
    </Container>
  );
}

export default Homepage;
