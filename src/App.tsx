import { Home } from './pages/Home';
import { useState } from 'react';
import type { TaskStateModel } from './models/TaskStateModel';

import './styles/global.css';
import './styles/theme.css';

// import type { TaskModel } from "./TaskModel";

// // Estado -> Componente -> Filhos

// export type TaskStateModel = {
//     tasks: TaskModel []; //historico, MainForm
//     secondsRemaining: number; // Home, CountDown, Historico, MainForm, Button
//     formattedSecondsRemaining :string; // Título, CountDown
//     activeTask: TaskModel | null; // CountDown, Historico, MainForm, Button 
//     currentCycle: number; // 1 a 8, Home
//     config: {
//         worktime: number; // MainForm
//         shortBreakTime: number; // MainForm
//         longBreakTime: number; // MainForm
//     };
// };

const initialState: TaskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsRemaining: '00:00',
    activeTask: null, 
    currentCycle: 0, 
    config: {
        worktime: 25,
        shortBreakTime: 5,
        longBreakTime: 15,
    },
}

export function App () {
    const [state, setState] = useState(initialState);
    
    return <Home state={state} setState={setState} />;
}


