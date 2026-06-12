import "./index.css";
import pokemonNames from "./pokemon.json";
import { PokemonList } from "./components/PokemonList";

function App() {
  return (
    <div style={{ padding: "16px" }}>
      <h1>Pokédex</h1>
      <PokemonList data={pokemonNames} />
    </div>
  );
}

export default App;
