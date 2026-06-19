import TaskItem from "./TaskItem";
import { useState } from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Row from 'react-bootstrap/Row';
import useTaskContext from "../custom_hooks/useTaskContext";

function TaskList(){
  const [key, setKey] = useState("uncompleted")
  const {tasks, _} = useTaskContext();
  return(
      <Row className="p-5">
        {tasks.error.isError && (
        <p className="error">Error: {tasks.error.message}</p>
      )}
      {tasks.loading ? (
        <div className="spinner-border">
          <p className="h3">Loading Tasks</p>
        </div>
      ) : (
        <Tabs
          activeKey={key}
          onSelect={(key) => setKey(key)}
          className="mb-3"
        >
          <Tab eventKey="uncompleted" title="Tasks In Progress">
            {
             tasks.data.map(task => {
              if(!task.completed){
                return (<TaskItem key={task._id} task={task} />)
              }
             })
            }
          </Tab>
          <Tab eventKey="completed" title="Completed Tasks">
            {
             tasks.data.map(task => {
              if(task.completed){
                return (<TaskItem key={task._id} task={task} />)
              }
             })
            }
          </Tab>

        </Tabs>
      )}
      </Row>
    
    
  )
}

export default TaskList;
