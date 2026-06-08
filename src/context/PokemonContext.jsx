// Challenge 3: Implement the Context API to manage the selected Pokémon.
//
// Create a PokemonContext and a PokemonProvider component that holds:
//   - selectedPokemon: the currently selected Pokémon object (or null)
//   - setSelectedPokemon: function to update it
//
// Wrap your app with PokemonProvider in main.jsx (or App.jsx).
// When a card is clicked, set it as the selected Pokémon via context.
// Display the selected Pokémon's details somewhere outside the list
// (e.g. a sidebar or a panel at the top) to show cross-tree state sharing.

import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  // TODO: implement
}

export function usePokemonContext() {
  // TODO: implement
}
