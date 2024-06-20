import { Container, Row, Col, Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <Container>
      <Row>
        <Col><h1>Test 1</h1></Col>
        <Col><h2>Test 1</h2></Col>
        <Col>
        <Card>
          <Card.Body>
            <Card.Title>Testas 1</Card.Title>
            <Card.Text>Testas</Card.Text>
          </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
