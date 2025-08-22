import { useEffect, useReducer } from "react";
import { initialTasksState } from "./inititalTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workes/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";

 type TaskContextProviderProps = {
    children: React.ReactNode;
 };

 export function TaskContextProvider({children}: TaskContextProviderProps) {
    const [state, dispatch] = useReducer(taskReducer, initialTasksState);

    const worker = TimerWorkerManager.getInstance()

    worker.onmessage(e => {
      const countDownSeconds = e.data
      
      if(countDownSeconds <= 0){
         dispatch({
         type: TaskActionTypes.COMPLETE_TASK
      });
         worker.terminate();
      } else {
         dispatch({
         type: TaskActionTypes.COUNT_DOWN, 
         payload: { secondsRemaining:countDownSeconds },
      });

      }
    });

   useEffect(()=>{
      console.log(state);

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