import Accordion from "react-bootstrap/Accordion";

function AccordionQAndA({ data }) {
  return (
    <div>
      {data.length ? (
        data.map((item, index) => {
          return (
            <Accordion className="py-1" key={index} defaultActiveKey={item.id}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <div className="m-auto"> {item.q} </div>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="d-inline ms-3"> {item.a}</p>
                  <button className="btn-color  ">مسح السوال</button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })
      ) : (
        <h2 className="fs-3 text-center p-5">للا يوجد اسئله </h2>
      )}
    </div>
  );
}

export default AccordionQAndA;
