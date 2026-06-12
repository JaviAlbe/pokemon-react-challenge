import { useState, useRef } from "react";
import { PokemonCard } from "./PokemonCard";
import { usePokemonContext } from "../context/PokemonContext";
import { pokemonList } from "../hooks/usePokemon";

function useDebounce(fn, delay) {
  const timer = useRef(null);
  return (...args) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => fn(...args), delay);
  };
}

export function PokemonList({ data }) {
  const [query, setQuery] = useState("");
  const [displayQuery, setDisplayQuery] = useState("");
  const { selectedPokemon, selectPokemon } = usePokemonContext();

  const debouncedSetDisplay = useDebounce(setDisplayQuery, 300);

  function handleSearch(e) {
    setQuery(e.target.value);
    debouncedSetDisplay(e.target.value);
  }

  const filtered = pokemonList.filter((name) =>
    name.toLowerCase().includes(displayQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={query}
        onChange={handleSearch}
        style={{ marginBottom: "16px", padding: "8px", width: "240px" }}
      />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
        {filtered.map((name) => (
          <PokemonCard
            key={name}
            name={name}
            onClick={() => selectPokemon(name)}
            isSelected={selectedPokemon === name}
          />
        ))}
      </div>
    </div>
  );
}
