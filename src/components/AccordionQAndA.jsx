import Accordion from "react-bootstrap/Accordion";
import { question } from "../api/Question";

function AccordionQAndA({ data, deletedOneItem }) {
  const localData= JSON.parse(localStorage.getItem('items'));
  console.log(localData);

  // * deleted question  from list of questions
  const deletedQuestion = (ID) => {
    if(localStorage.getItem('items')!=null){
      const index = question.findIndex((item) => item.id === ID);
      question.splice(index, 1);
      deletedOneItem(question)

    }
 
  };
  return (
    <div>
      {localStorage.getItem('items') !=null ? (
        localData.map((item, index) => {
          return (
            <Accordion className="py-1" key={index} defaultActiveKey={item.id}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  {" "}
                  <div className="m-auto"> {item.q} </div>{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="d-inline ms-3"> {item.a}</p>
                  <button
                    onClick={() => deletedQuestion(item.id)}
                    className="btn-color  "
                  >
                    مسح السوال
                  </button>
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
