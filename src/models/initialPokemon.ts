import type { PokemonModel } from "./PokemonModel";

export const initialPokemon: PokemonModel = {
    name: "null",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    spriteScale: 1.8,
    sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
}