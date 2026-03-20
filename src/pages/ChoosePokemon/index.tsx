import type { PokemonModel } from "../../models/PokemonModel";
import { starters } from "../../utils/pokemon/starters";
import { useContext } from "react";
import { PokemonContext } from "../../contexts/PokemonContext/PokemonContext";


export function ChoosePokemon() {
const { setPokemon } = useContext(PokemonContext);
function handleSelectPokemon(pokemon: PokemonModel){
    setPokemon(pokemon);
}

  return (
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
  );
}