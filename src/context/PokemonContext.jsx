// Challenge 3 — Context API
//
// Implement a PokemonContext and PokemonProvider that hold:
//   - selectedPokemon: string | null  — the currently selected Pokémon name
//   - setSelectedPokemon: function    — updates selectedPokemon
//
// Requirements:
//   - Wrap the app with PokemonProvider (in main.jsx or App.jsx).
//   - Clicking a PokemonCard sets it as selectedPokemon.
//   - Clicking the same card again deselects it (sets it back to null).
//   - The selected card should have a visually different background via the
//     isSelected prop on PokemonCard — driven by this context value.

import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  // TODO: implement
}

export function usePokemonContext() {
  // TODO: implement
}
