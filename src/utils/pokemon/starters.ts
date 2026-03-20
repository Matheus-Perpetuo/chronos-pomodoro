import type {PokemonModel} from "../../models/PokemonModel";

export const starters: PokemonModel[] = [
  {
    name: "bulbasaur",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/1.gif",
    spriteScale: 2.5,
  },
  {
    name: "charmander",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/4.gif",
    spriteScale: 2.5,
  },
  {
    name: "squirtle",
    level: 1,
    xp: 0,
    xpToNextLevel: 100,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/7.gif",
    spriteScale: 2.5,
  },
];