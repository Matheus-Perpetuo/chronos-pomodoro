import { createContext } from "react";
import type { PokemonModel } from "../../models/PokemonModel";
import { initialPokemon } from "../../models/initialPokemon";

type PokemonContextProps = {
    pokemon: PokemonModel,
    setPokemon: React.Dispatch<React.SetStateAction<PokemonModel>>
    gainXP: (amount: number) => void;
}

const initialContextValue: PokemonContextProps = {
    pokemon: initialPokemon,
    setPokemon: () => {},
    gainXP: () => {},
}

export const PokemonContext = createContext<PokemonContextProps>(
    initialContextValue
)
