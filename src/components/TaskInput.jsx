import { useState } from "react";
import useTaskContext from "../custom_hooks/useTaskContext";
import { Form } from "react-bootstrap";
import Button  from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const {_, middlewareDispatch} = useTaskContext();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = async () => {
    middlewareDispatch({ type: "ADD_TASK", payload: task });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Row className="mt-5 mb-3 p-5">
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={10}>
              <input
                className="form-control"
                type="text"
                value={task}
                onChange={handleChange}
                placeholder="Add a new Task"
                required
              />
            </Col>
            <Col xs={2}>
              <Button 
                type="submit" 
                className="btn btn-success"
              >
                Add Task
              </Button>
            </Col>
          </Row>  
        </Form>
      
    
    </Row>
    
  );
};
export default TaskInput;
