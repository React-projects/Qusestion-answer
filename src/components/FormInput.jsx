import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import { question } from "../api/Qusetoin";

function FormInput({ addData }) {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewItem = () => {
    question.push({ id: Math.random(), q: qu, a: an });
    setQu('')
    setAn('')
    addData();
    // console.log(question);

  };
  return (
    <Row>
      <Col md="5">
        <Form.Control
        value={qu}
          onChange={(e) => setQu(e.target.value)}
          type="email"
          placeholder="ادخل السوال"
        />
      </Col>
      <Col md="5">
        <Form.Control
                value={an}

          onChange={(e) => setAn(e.target.value)}
          type="text"
          placeholder="ادخل الاجابه"
        />
      </Col>
      <Col md="2">
        <button onClick={addNewItem} className=" btn-color w-100" type="submit">
          اضافه
        </button>
      </Col>
    </Row>
  );
}

export default FormInput;
