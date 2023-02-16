// import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "./components/Header";
import Parameters from "./components/Parameters";
import Player from "./components/Player";

function App() {
  return (
    <Container>
      <Header />
      <Row>
        <Col>
          <Parameters />
        </Col>
        <Col>
          <Player />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
