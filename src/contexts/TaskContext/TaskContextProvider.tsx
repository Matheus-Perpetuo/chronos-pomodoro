import { useEffect, useState } from "react";
import { initialTasksState } from "./inititalTaskState";
import { TaskContext } from "./TaskContext";

 type TaskContextProviderProps = {
    children: React.ReactNode;
 };

 export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, setState] = useState(initialTasksState);

   useEffect(()=>{
      console.log(state);
   },[state])

   return <TaskContext.Provider value={{ state, setState }}>
        {children}
    </TaskContext.Provider> 
 }