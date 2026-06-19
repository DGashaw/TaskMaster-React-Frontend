//import TaskContainer from "./components/TaskContainer";
import TaskProvider from "./store/TaskProvider";
import TaskContainer from "./components/TaskContainer";
import Header from "./components/Header";


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <TaskProvider>
      <Header />
      <TaskContainer />
    </TaskProvider>
  );
}

export default App;
