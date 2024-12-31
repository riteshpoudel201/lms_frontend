import { Button } from "react-bootstrap";
import { FaBacon } from "react-icons/fa6";
import { toast, ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <div>hello</div>
      <Button onClick={()=> toast.success("Hellow")}><FaBacon />Button</Button>
      <ToastContainer />
    </>
  );
};

export default App;
