import "./index.css";
import pokemonNames from "./pokemon.json";
import { PokemonCard } from "./components/PokemonCard";

function App() {
  return (
    <div>
      <h1>Pokédex</h1>
      <div>
        {pokemonNames.map((name) => (
          <PokemonCard key={name} name={name} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default App;
