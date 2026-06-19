import TaskContex from "../store/TaskContext";
import { use } from "react"

function useTaskContext(){
    const taskCtx = use(TaskContex)

    if(!taskCtx){
        throw new Error("Task Context must be provided");
    }

    return taskCtx;
}

export default useTaskContext