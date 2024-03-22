import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import TitleProject from "./components/TitleProject";
import FormInput from "./components/FormInput";
import AccordionQAndA from "./components/AccordionQAndA";
import { question } from "./api/Question";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState(question);
  // *  add item to list of questions
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);

    //  ! Notification massage
    notify("تم الاضافه السوال  بنجاح" ,'success');
  };
  // * deleted All data
  const deletedAllData = () => {
    localStorage.removeItem("items");

    question.splice(0, question.length);
    setData([]);
    notify("تم حذف جميع الاسئله  بنجاح" ,'success');

  };
  const notify = (massage,type) => {
    if(type=== "error"){
      toast.error(massage)

    }else{
      toast.success(massage)

    }
  }

  const deletedOneItem = (items) => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...items]);
    if (items.length <= 0) {
      deletedAllData();
    }
    notify("تم حذف السوال بنجاح" ,'success');

  };

  return (
    <div className="font text-center color-body">
      <Container className="p-5">
        <Row>
          <Col md="4">
            <TitleProject />
          </Col>
          <Col md="8">
            <FormInput addData={addItem} notify={notify} />
            <AccordionQAndA data={data} deletedOneItem={deletedOneItem} />

            {localStorage.getItem("items") != null ? (
              <button onClick={deletedAllData} className="w-100 py-2 btn-color">
                مسح الكل
              </button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
