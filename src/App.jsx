import { useState, useCallback } from "react";
import "./index.css";
import { pokemonList } from "./hooks/usePokemon";
import { PokemonCard } from "./components/PokemonCard";
import { usePokemonContext } from "./context/PokemonContext";

function useDebounce(fn, delay) {
  const [timer, setTimer] = useState(null);
  return useCallback(
    (...args) => {
      clearTimeout(timer);
      setTimer(setTimeout(() => fn(...args), delay));
    },
    [fn, delay, timer]
  );
}

function App() {
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
    <div style={{ padding: "16px" }}>
      <h1>Pokédex</h1>
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

export default App;
