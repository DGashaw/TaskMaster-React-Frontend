//import { TaskContext } from "./TaskContainer";
import useTaskContext from "../custom_hooks/useTaskContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Trash, ArrowCounterclockwise, Check2Circle } from "react-bootstrap-icons";

const TaskItem = ({ task }) => {
  const {_, middlewareDispatch} = useTaskContext();

  return (
    <Row className="mb-2">
      <Col className="col-8">
        <p className="">{task.name}</p>
      </Col>
      <Col className="col-2">
        <button 
          className="btn"
          onClick={() => middlewareDispatch({type: "REMOVE_TASK", payload: {id: task._id}})}
        >
          <Trash size={24} color="red"/>
        </button>
      </Col>
      {
        (task.completed) ?
        <Col className="col-2">
        <button 
          className="btn"
          onClick={() => middlewareDispatch({ type: "UPDATE_TASK", payload: {id: task._id, completed: true} })}
        >
          <ArrowCounterclockwise size={24} color="green" />
        </button>
      </Col>
      :
      <Col className="col-2">
        <button 
          className="btn"
          onClick={() => middlewareDispatch({ type: "UPDATE_TASK", payload: {id: task._id, completed: false} })}
        >
          <Check2Circle size={24} color="green" />
        </button>
      </Col>
      }
      
    </Row>
    
  );
};

export default TaskItem;
