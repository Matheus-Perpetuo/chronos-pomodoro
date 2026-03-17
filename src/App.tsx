import { MessagesContainer } from './components/MessagesContainer';
import { TaskContextProvider } from './contexts/TaskContext/TaskContextProvider';
import { MainRouter } from './routes/MainRouter';
import { PokemonContextProvider } from './contexts/PokemonContext/PokemonContextProvider';

import './styles/global.css';
import './styles/theme.css';



export function App () {
    return( 
    <PokemonContextProvider>
        <TaskContextProvider>
        <MessagesContainer>
            <MainRouter />
        </MessagesContainer>
        </TaskContextProvider>
    </PokemonContextProvider>
    )
}


