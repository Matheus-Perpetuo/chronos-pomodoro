import type { PokemonModel } from "../../models/PokemonModel";
import { starters } from "../../utils/pokemon/starters";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext/PokemonContext";
import { MainTemplate } from "../../templates/MainTemplate";
import { PokemonDisplay } from "../../components/Pokemon/PokemonDisplay";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { initialPokemon } from "../../models/initialPokemon";


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
    <MainTemplate>
      <PokemonDisplay/>
    <div>
      <h1>Escolha seu Pokémon</h1>

      <div>
        {starters.map((pokemon) => (
          <div 
            key={pokemon.name}
            onClick={() => handleSelectPokemon(pokemon)}
            >
            <h2>{pokemon.name}</h2>

            <img
              src={pokemon.sprite}
              alt={pokemon.name}
              style={{ transform: `scale(${pokemon.spriteScale})` }}
            />
          </div>
          
        ))}
      </div>
    </div>
  </MainTemplate>
  );
}