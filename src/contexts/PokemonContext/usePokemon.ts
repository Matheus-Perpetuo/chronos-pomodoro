import { useContext } from "react";
import { PokemonContext } from "./PokemonContext";

export function usePokemon() {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error("usePokemon must be used within a PokemonContextProvider");
    }
    return context;
}