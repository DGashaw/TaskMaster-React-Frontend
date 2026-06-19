import Container from 'react-bootstrap/Container';
import TaskInput from './TaskInput';
import TaskList from './TaskList';

function TaskContainer(){
  return (
    <Container className="px-5 py-5 mt-5 bg-light" fluid>
      <TaskInput />
      <TaskList />
    </Container>
  )
}

export default TaskContainer;