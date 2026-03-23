import { useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { initialPokemon } from "../../models/initialPokemon";
import type { PokemonModel } from "../../models/PokemonModel";
import { addPokemonXP } from "../../utils/pokemonSystem";
import { useEffect } from "react";


type PokemonProviderProps = {
    children: React.ReactNode;
}


export function PokemonContextProvider({ children }: PokemonProviderProps) {
    const [pokemon, setPokemon] = useState<PokemonModel>(() => {
        const storedPokemon = localStorage.getItem("pokemon");

        if (storedPokemon) {
            return JSON.parse(storedPokemon);
        }
        
        return initialPokemon;
    });
    
    function gainXP(amount: number) {
        setPokemon((prevPokemon) => addPokemonXP(prevPokemon, amount));
    }

    useEffect(() => {
        localStorage.setItem("pokemon", JSON.stringify(pokemon));
            }, [pokemon]);

    function resetPokemon() {
        setPokemon(initialPokemon);
        localStorage.removeItem("pokemon");
    };

    return (
        <PokemonContext.Provider value={{ pokemon, setPokemon, gainXP, resetPokemon }}>
            {children}
        </PokemonContext.Provider>
    )
    
}