import { usePokemon } from "../../contexts/PokemonContext/usePokemon";
import "./pokemon.css";

export function PokemonDisplay() {
  const { pokemon } = usePokemon();

  return (
    <div className="pokemon-card">
      <div className="pokemon-header">
        <span className="pokemon-name">{pokemon.name}</span>
        <span className="pokemon-level">LV {pokemon.level}</span>
      </div>

      <div className="pokemon-sprite-container">
        <img
          className="pokemon-sprite"
          src={pokemon.sprite}
          alt={pokemon.name}
        />
      </div>

    </div>
  );
}