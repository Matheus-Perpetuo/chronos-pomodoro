import type { PokemonModel } from "../../../models/PokemonModel";
import "../pokemon.css";
import "./styles.css";

type Props = {
  pokemon: PokemonModel;
  onSelect: (pokemon: PokemonModel) => void;
};

export function SelectPokemonCard({ pokemon, onSelect }: Props) {
  return (
    <div className="pokemon-card select-card" onClick={() => onSelect(pokemon)}>
        <span className="pokemon-name">{pokemon.name}</span>

        <div className="pokemon-sprite-container">
            <img
            src= {pokemon.sprite}
            alt= {pokemon.name}
            style={{ transform: `scale(${pokemon.spriteScale || 1})`}}
            />
        </div>
    </div>
  );    
}