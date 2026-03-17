import { usePokemon } from "../../contexts/PokemonContext/usePokemon";
import './pokemon.css'

export function PokemonDisplay() {
    const { pokemon, } = usePokemon();

    return (
        <div className="pokemon-container">
            <h2 className="pokemon-name">{pokemon.name}</h2>

        <img
        className="pokemon-sprite"
        src={pokemon.sprite}
        alt={pokemon.name}
         />

        <p className="pokemon-level">Level: {pokemon.level}</p>
        </div>
    );
}
