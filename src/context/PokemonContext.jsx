import { createContext, useContext, useState } from "react";

export const PokemonContext = createContext(null);

export function PokemonProvider({ children }) {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  function selectPokemon(name) {
    setSelectedPokemon((prev) => (prev === name ? null : name));
  }

  return (
    <PokemonContext.Provider value={{ selectedPokemon, selectPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemonContext() {
  return useContext(PokemonContext);
}
