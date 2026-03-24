import type {PokemonModel} from "../../models/PokemonModel";

export const starters: PokemonModel[] = [
  {
    name: "bulbasaur",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/1.gif",
    spriteScale: 1.8,
  },
  {
    name: "charmander",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/4.gif",
    spriteScale: 1.8,
  },
  {
    name: "squirtle",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/7.gif",
    spriteScale: 1.8,
  },
];