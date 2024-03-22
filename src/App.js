import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TitleProject from "./components/TitleProject";
import FormInput from "./components/FormInput";
import AccordionQAndA from "./components/AccordionQAndA";
import { question } from "./api/Qusetoin";

function App() {
  const [data, setdata] = useState(question);

  const addItem =()=>{
    setdata([...question])

  }
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row>
          <Col md="4">
            <TitleProject />
          </Col>
          <Col md="8">
            <FormInput addData={addItem} />
            <AccordionQAndA data={data} />

            {data.length >= 1 ? (
              <button className="w-100 btn-color">مسح الكل</button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
