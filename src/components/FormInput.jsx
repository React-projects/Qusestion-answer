import { Row, Col, Form  } from "react-bootstrap";

function FormInput() {
  return (
    <Row>
      <Col md="5">
        <Form.Control type="email" placeholder="ادخل السوال" />
      </Col>
      <Col md="5">
        <Form.Control type="password"  placeholder="ادخل الاجابه" />
      </Col>
      <Col md="2">
        <button className=" btn-color w-100" type="submit">
          اضافه
        </button>
      </Col>
    </Row>
  );
}

export default FormInput;
