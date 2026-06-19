import TaskContext from "./TaskContext";
import { useReducer, useMemo, useEffect } from "react";
import client from "../utility/client.js"
import { produce } from "immer";

function middleware(dispatch) {
  return async function (action) {
    switch (action.type) {
      case "FETCH":
        dispatch({type: "FETCH_INIT"});
        try {
          const { data } = await client.get("/tasks");
          dispatch({ type: "LOAD_SUCCESS", payload: data });
        } catch (error) {
          dispatch({ type: "ERROR", payload: error });
        }
        break;
      case "ADD_TASK":
        try {
          const { data } = await client.post("/tasks", {
            name: action.payload
          });
          dispatch({ type: "NEW_TASK", payload: data });
        } catch (error) {
          dispatch({ type: "ERROR", payload: error });
        }
        break;
      case "UPDATE_TASK":
        try {
          const body = (action.payload.completed) ? {completed: false} : {completed: true};

          const { data } = await client.patch(`/tasks/${action.payload.id}`, {
            ...body
          });
        
          dispatch({ type: "UPDATE_TASK_SUCCESS", payload: data });
        } catch (error) {
          dispatch({ type: "ERROR", payload: error });
        }
        break;
      case "REMOVE_TASK":
        try{
          const { data } = await client.delete(`/tasks/${action.payload.id}`);
          dispatch({type: "REMOVE_TASK_SUCCESS", payload: data});
        }
        catch(error){
          dispatch({ type: "ERROR", payload: error });
        }
        break;
    }
  };
}
function reducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
        return produce(state, (draftState) => {
            draftState.data = [],
            draftState.isLoading = true,
            draftState.error.isError = false,
            draftState.error.message = null
        });
    case "LOAD_SUCCESS":
      return produce(state, (draftState) => {
        draftState.data = action.payload;
        draftState.isLoading = false;
        draftState.error.isError = false;
        draftState.error.message = null;
      });
    case "NEW_TASK":
      return produce(state, (draftState) => {
        draftState.data.push(action.payload)});
    case "UPDATE_TASK_SUCCESS":
      return produce(state, (draftState) => {
        const index = draftState.data.findIndex(
          (task) => task._id === action.payload._id
        );
        draftState.data.splice(index, 1, action.payload);
      });
    case "REMOVE_TASK_SUCCESS":
      return produce(state, (draftState) => {
        const index = draftState.data.findIndex(
          (task) => task._id === action.payload._id
        );
        draftState.data.splice(index, 1);
      })
    case "Error":
      return produce(state, (draftState) => {
        draftState.error.isError = true;
        draftState.error.message = action.payload.error.message;
      });
    default:
      console.log("Uknown action type");
      return state;
  }
}
  
const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, {
    data: [],
    isLoading: false,
    error: { isError: false, message: null }
  });
  const middlewareDispatch = useMemo(() => middleware(dispatch), [dispatch]);
  useEffect(() => { middlewareDispatch({type: 'FETCH'})}, [middlewareDispatch]);

  const taskCtxValues = {
    tasks, middlewareDispatch 
  }


  return (
    <TaskContext.Provider value={taskCtxValues}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
