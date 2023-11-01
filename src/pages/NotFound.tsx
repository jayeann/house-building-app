import { Card, Container, Image } from "react-bootstrap";
import IMAGES from "../assets";
import "../style/pages/notFound.css";
import BackButton from "../components/BackButton";
import { Link, useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  return (
    <Container>
      <Card className="not-found">
        <Image src={IMAGES.notFound} width={500} />
        <h1>Oops, Page Not Found</h1>
        <p className="read-the-docs">
          We are sorry, but the page you requested was not found.
        </p>
        <BackButton handleClick={() => navigate(-1)}>Go Back</BackButton>
      </Card>
    </Container>
  );
}

export default NotFound;
