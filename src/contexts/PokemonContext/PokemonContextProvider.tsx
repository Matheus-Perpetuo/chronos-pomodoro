import {useState} from "react";
import { PokemonContext } from "./PokemonContext";
import { initialPokemon } from "../../models/initialPokemon";
import type { PokemonModel } from "../../models/PokemonModel";
import { addPokemonXP } from "../../utils/pokemonSystem";

type PokemonProviderProps = {
    children: React.ReactNode;
}

export function PokemonContextProvider({ children }: PokemonProviderProps) {
    const [pokemon, setPokemon] = useState<PokemonModel>(initialPokemon);

    function gainXP(amount: number) {
        setPokemon((prevPokemon) => addPokemonXP(prevPokemon, amount));
    }

    return (
        <PokemonContext.Provider value={{ pokemon, setPokemon, gainXP }}>
            {children}
        </PokemonContext.Provider>
    )
}