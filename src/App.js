import { Col, Container, Row } from "react-bootstrap";
import TitleProject from "./components/TitleProject";
import FormInput from "./components/FormInput";
import AccordionQAndA from "./components/AccordionQAndA";

function App() {
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row>
          <Col md="4">
            <TitleProject/>
          </Col>
          <Col md="8">
            <FormInput/>
            <AccordionQAndA/>
          <button className="w-100 btn-color">مسح الكل</button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
