import { useEffect } from "react";
import { Container } from "../../components/Container";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";
import { PokemonDisplay } from "../../components/Pokemon/PokemonDisplay";
import { useNavigate } from "react-router";
import { usePokemon } from "../../contexts/PokemonContext/usePokemon";
import { initialPokemon } from "../../models/initialPokemon";


import { MainTemplate } from "../../templates/MainTemplate";


export function Home() {
    const { pokemon } = usePokemon();
    const navigate = useNavigate();

useEffect(() => {
  const hasPokemon =
    pokemon.name !== initialPokemon.name ||
    pokemon.level > 1 ||
    pokemon.xp > 0;

  if (!hasPokemon) {
    navigate("/choose-pokemon");
  }
}, [pokemon, navigate]);
    
    useEffect(() => {
        document.title = 'Pokédoro' ;
    }, []);

    return (
        <MainTemplate>
            <PokemonDisplay/>
            <Container>
                <CountDown />
            </Container>
            
            <Container>
                <MainForm />
            </Container>
        </MainTemplate>
    );
}


