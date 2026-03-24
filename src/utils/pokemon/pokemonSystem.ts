import type { PokemonModel } from "../../models/PokemonModel";

export function addPokemonXP(pokemon: PokemonModel, amount: number): PokemonModel {

    let newXP = pokemon.xp + amount;
    let newLevel = pokemon.level;
    let newName = pokemon.name;
    let newSprite = pokemon.sprite;
    let newSpriteScale = pokemon.spriteScale;


    while (newXP >= 100) {
        newXP -= 100;
        newLevel++;
    }

    //Evolution
    if (newLevel >= 16 && pokemon.name === "bulbasaur") {
        newName = "ivysaur";
        newSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/2.gif";
        newSpriteScale = 1.5;
    }
    if (newLevel >= 32 && pokemon.name === "ivysaur") {
        newName = "venusaur";
        newSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/3.gif";
        newSpriteScale = 1.6;
    }

     if (newLevel >= 16 && pokemon.name === "charmander") {
        newName = "charmeleon";
        newSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/5.gif";
        newSpriteScale = 1.5;
    }
    if (newLevel >= 32 && pokemon.name === "charmeleon") {
        newName = "charizard";
        newSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif";
        newSpriteScale = 1.6;
    }

     if (newLevel >= 16 && pokemon.name === "squirtle") {
        newName = "wartortle";
        newSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/8.gif";
        newSpriteScale = 1.5;
    }
    if (newLevel >= 32 && pokemon.name === "wartortle") {
        newName = "blastoise";
        newSprite = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/9.gif";
        newSpriteScale = 1.6;
    }

    return {
        ... pokemon,
        xp: newXP,
        level: newLevel,
        name: newName,
        sprite: newSprite,
        spriteScale: newSpriteScale,
    }
}
