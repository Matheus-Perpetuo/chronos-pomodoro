import { useEffect, useReducer } from "react";
import { initialTasksState } from "./inititalTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";

 type TaskContextProviderProps = {
    children: React.ReactNode;
 };

 export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTasksState);

   useEffect(()=>{
      console.log(state);
   },[state])

   return <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider> 
 }