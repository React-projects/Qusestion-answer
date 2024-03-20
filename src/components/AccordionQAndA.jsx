import Accordion from "react-bootstrap/Accordion";

function AccordionQAndA() {
  return (
    <div>
      <Accordion className="py-4" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>  <div className="m-auto">  السوال الاول</div>    </Accordion.Header>
          <Accordion.Body>
            <p className="d-inline ms-3">اجابه السوال</p>
            <button className="btn-color  ">مسح السوال</button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default AccordionQAndA;
