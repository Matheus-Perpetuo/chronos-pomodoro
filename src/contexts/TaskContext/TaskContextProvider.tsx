import { useEffect, useReducer, useRef } from "react";
import { initialTasksState } from "./inititalTaskState";
import { TaskContext } from "./TaskContext";
import { taskReducer } from "./taskReducer";
import { TimerWorkerManager } from "../../workes/TimerWorkerManager";
import { TaskActionTypes } from "./taskActions";
import { loadBeep } from "../../utils/loadBeep";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { usePokemon } from "../PokemonContext/usePokemon";

 type TaskContextProviderProps = {
    children: React.ReactNode;
 };

 export function TaskContextProvider({children}: TaskContextProviderProps) {
   const { gainXP } = usePokemon();
    const [state, dispatch] = useReducer(taskReducer, initialTasksState, () => {
      const storageState = localStorage.getItem('state');

      if (storageState === null) return initialTasksState;

      const parsedStorageState = JSON.parse(storageState) as TaskStateModel;

      return {
         ...parsedStorageState,
         activeTask: null,
         secondsRemaining: 0,
         formattedSecondsRemaining: '00:00',
      }
    });
    const playBeepRef = useRef<ReturnType<typeof loadBeep> | null>(null);

    const worker = TimerWorkerManager.getInstance()

    worker.onmessage(e => {
      const countDownSeconds = e.data
      
      if(countDownSeconds <= 0){
         if(playBeepRef.current){
         playBeepRef.current();
         playBeepRef.current = null;
         }
         gainXP(443); // xp por pomodoro 
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
      localStorage.setItem('state', JSON.stringify(state))

      if(!state.activeTask){
         worker.terminate();
      }

      document.title = `${state.formattedSecondsRemaining} - Pokédoro`;

      worker.postMessage(state);
   }, [worker, state]);

   useEffect(() =>{
      if (state.activeTask && playBeepRef.current === null){
         playBeepRef.current = loadBeep();
      } else {
         playBeepRef.current = null;
      }
   }, [state.activeTask]);

   return <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider> 
 }