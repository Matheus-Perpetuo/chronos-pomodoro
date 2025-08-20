import { createContext } from "react";
import type { TaskStateModel } from "../../models/TaskStateModel";
import { initialTasksState } from "./inititalTaskState";
import type { TaskActionModel } from "./taskActions";

type TaskContextProps = {
    state: TaskStateModel,
    dispatch: React.Dispatch<TaskActionModel>;
};

const initialContextValue = {
    state: initialTasksState,
    dispatch: () => {},
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue);