import { useEffect } from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { PokemonDisplay } from "../../components/Pokemon/PokemonDisplay";

import { MainTemplate } from "../../templates/MainTemplate";


export function Home() {
    useEffect(() => {
        document.title = 'Pokédoro' ;
    }, []);

    return (
        <MainTemplate>
            <><PokemonDisplay /></>
            <Container>
                <CountDown />
            </Container>
            
            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}


