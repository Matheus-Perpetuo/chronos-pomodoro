import type { TaskModel } from "./TaskModel";

// Estado -> Componente -> Filhos

export type TaskStateModel = {
    tasks: TaskModel []; //historico, MainForm
    secondsRemaining: number; // Home, CountDown, Historico, MainForm, Button
    formattedSecondsRemaining :string; // Título, CountDown
    activeTask: TaskModel | null; // CountDown, Historico, MainForm, Button 
    currentCycle: number; // 1 a 8, Home
    config: {
        worktime: number; // MainForm
        shortBreakTime: number; // MainForm
        longBreakTime: number; // MainForm
    };
};