import { SaveIcon } from "lucide-react";
import { Container } from "../../components/Container"
import { DefaultInput } from "../../components/DefaultInput";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { DefaultButton } from "../../components/DefaultButton";
import { useEffect, useRef, useContext } from "react";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/showMessage";
import { TaskActionTypes } from "../../contexts/TaskContext/taskActions";
import { PokemonContext } from "../../contexts/PokemonContext/PokemonContext";
import { useNavigate } from "react-router";
import { toast } from 'react-toastify';
import { Dialog } from "../../components/Dialog";



export function Settings() {
    const {state, dispatch} = useTaskContext();
    const workTimeInput = useRef<HTMLInputElement>(null);
    const shortBreakTimeInput = useRef<HTMLInputElement>(null);
    const longBreakTimeInput = useRef<HTMLInputElement>(null);
    const { resetPokemon } = useContext(PokemonContext);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Configurações - Pokédoro';
    }, []);

    function handleNewGame() {
        resetPokemon();
        navigate("/choose-pokemon");
    }

    function handleConfirmReset() {
  toast(
    (props) => <Dialog {...props} />,
    {
      data: "Tem certeza que deseja resetar seu Pokémon?",
      closeOnClick: false,
      autoClose: false,
      draggable: false,
      closeButton: false,
      onClose: (result) => {
        if (result === true) {
          handleNewGame();
            showMessage.success('Pokémon resetado com sucesso!');
        }
      },
    }
  );
}

    function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        showMessage.dismiss();

        const formErrors = [];

        const workTime = Number(workTimeInput.current?.value);
        const shortBreakTime = Number(shortBreakTimeInput.current?.value);
        const longBreakTime = Number(longBreakTimeInput.current?.value);


        if(isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)){
            formErrors.push('Digite apenas números nos campos')
        }

        if (workTime < 1 || workTime > 99) {
            formErrors.push('Digite valores entre 1 e 99 para foco')
        }

        if (shortBreakTime < 1 || shortBreakTime > 30) {
            formErrors.push('Digite valores entre 1 e 30 para descanso curto')
        }

        if (longBreakTime < 1 || longBreakTime > 60) {
            formErrors.push('Digite valores entre 1 e 60 para descanso longo')
        }

        if (formErrors.length > 0 ) {
            formErrors.forEach(error =>{
                showMessage.error(error)
            })
            return;
        }
        dispatch({type: TaskActionTypes.CHANGE_SETTINGS, payload: {
            workTime,
            shortBreakTime,
            longBreakTime,
        },
    });
    showMessage.success('Configurações salvas')

    }


    return (
        <MainTemplate>
            <Container>
                <Heading>Configurações</Heading>
            </Container>

            <Container>
                <p style={{textAlign: "center"}}>
                    Modifique as Configurações para tempo de foco, descanso curto, e descanso longo
                </p>
            </Container>

            <Container>
                <form onSubmit={handleSaveSettings} action="" className="form"><div className="formRow">
                <DefaultInput id='workTime' 
                labelText='Foco' 
                ref={workTimeInput}
                defaultValue={state.config.workTime}
                type="number"
                />  
                </div>

                <div className="formRow">
                <DefaultInput id='shortBreakTime' 
                labelText='Descanso curto' 
                ref={shortBreakTimeInput}
                defaultValue={state.config.shortBreakTime}
                type="number"/>
                </div>

                <div className="formRow">
                <DefaultInput id='longBreakTime' 
                labelText='Descanso longo' 
                ref={longBreakTimeInput}
                defaultValue={state.config.longBreakTime}
                type="number"/>
                </div>

                <div className="formRow">
                <DefaultButton icon={<SaveIcon />} 
                    aria-label="Salvar configurações" 
                    title="Salvar configurações"/>
                </div>
                </form>
                </Container>  

                <Container>             
                <div className="formRow" >
                    <h1>Trocar Pokémon</h1>
                <p style={{textAlign: "center"}}>
                O pokémon será resetado e seu progresso perdido
                </p>
                <DefaultButton 
                    icon={
                    <img 
                     src="/logo-pokebola.png"
                     alt="Pokebola"
                     className="button-icon"
                     style={{width: "2.4rem", height: "2.4rem", objectFit: "contain"}}
                    />
                    }
                    aria-label="Resetar Pokémon" 
                    title="Resetar Pokémon"
                    onClick={handleConfirmReset}
                    />
                </div>
            </Container>
        </MainTemplate>
    );
}


