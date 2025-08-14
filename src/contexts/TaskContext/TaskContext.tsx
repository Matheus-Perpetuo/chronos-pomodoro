import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTasksState } from "./inititalTaskState";

type TaskContextProps = {
    state: TaskStateModel,
    setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
};

const initialContextValue = {
    state: initialTasksState,
    setState: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);