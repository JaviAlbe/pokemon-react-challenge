import pokemonNames from "../pokemon.json";

export const pokemonList = pokemonNames
  .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
  .sort((a, b) => a.localeCompare(b));
