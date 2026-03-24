import type { PokemonModel } from "../../models/PokemonModel";
import { starters } from "../../utils/pokemon/starters";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext/PokemonContext";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { initialPokemon } from "../../models/initialPokemon";
import { SelectPokemonCard } from "../../components/Pokemon/SelectPokemonCard";
import "./styles.css";
import { Container } from "../../components/Container"; 


export function ChoosePokemon() {
const { pokemon,setPokemon } = useContext(PokemonContext);
const navigate = useNavigate();

function handleSelectPokemon(pokemon: PokemonModel){
    setPokemon(pokemon);
    navigate("/");
}

useEffect(() => {
  if (pokemon.name !== initialPokemon.name) {
  navigate("/");
}
}, [pokemon, navigate]);

  return (
    <Container>
    <div>
      <h1 className="title">Pokédoro</h1>
      <h2 className="sub-title">Escolha Seu Pokémon Inicial</h2>

      <div className="pokemon-grid">
        {starters.map((pokemon) => (
          <SelectPokemonCard
            key={pokemon.name}
            pokemon={pokemon}
            onSelect={handleSelectPokemon}
      />
    ))}
    
    </div>
    <Container>
        <footer className= "footer">
         Pokédoro &copy; {new Date().getFullYear()}
        </footer>
    </Container>
  </div>
  </Container>
  
  );
}