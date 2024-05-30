import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, BuildHouse, Summary, NotFound } from "./pages";
import "./style/global.css";

function App() {
  return (
    <Container className="App">
      <BrowserRouter basename={"/house-building-app/"}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/build" element={<BuildHouse />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
