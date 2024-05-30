import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Homepage, BuildHouse, Summary, NotFound } from "./pages";
import "./style/global.css";

function App() {
  return (
    <Container className="App">
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/build" element={<BuildHouse />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
