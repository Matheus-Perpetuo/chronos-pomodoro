import { useEffect, useReducer } from "react";
import { initialTasksState } from "./inititalTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workes/TimerWorkerManager";

 type TaskContextProviderProps = {
    children: React.ReactNode;
 };

 export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTasksState);

    const worker = TimerWorkerManager.getInstance()

    worker.onmessage(e => {
      const countDownSeconds = e.data
      console.log(countDownSeconds);
      
      if(countDownSeconds <= 0){
         console.log('Worker COMPLETED')
         worker.terminate();
      };
    });

   useEffect(()=>{
      if(!state.activeTask){
         console.log('Worker Terminado por falta de activeTask')
         worker.terminate();
      }

      worker.postMessage(state);
   }, [worker, state]);

   return <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider> 
 }