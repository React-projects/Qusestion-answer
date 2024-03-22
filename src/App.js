import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TitleProject from "./components/TitleProject";
import FormInput from "./components/FormInput";
import AccordionQAndA from "./components/AccordionQAndA";
import { question } from "./api/Question";

function App() {
  const [data, setData] = useState(question);
  // *  add item to list of questions
  const addItem = () => {
    setData([...question]);
  };
  // * deleted All data
  const deletedAllData = () => {
    question.splice(0, question.length);
    setData([]);
  };

  const deletedOneItem = (items) => [setData([...items])];
  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row>
          <Col md="4">
            <TitleProject />
          </Col>
          <Col md="8">
            <FormInput addData={addItem} />
            <AccordionQAndA data={data} deletedOneItem={deletedOneItem} />

            {data.length >= 1 ? (
              <button onClick={deletedAllData} className="w-100 btn-color">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
