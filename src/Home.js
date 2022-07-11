import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decriment, incriment } from "./fucher/counter";
function Home() {
  const count = useSelector((state) => state.counter.count);
  {
    /*console.log(count)*/
  }
  const dispatech = useDispatch();
  return (
    <div className="incri-dicri-crad">
      <Button onClick={() => dispatech(incriment())}>+</Button>
      <Form.Control type="numbar" value={count}></Form.Control>
      <Button onClick={() => dispatech(decriment())}>-</Button>
    </div>
  );
}
export default Home;
