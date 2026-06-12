import { PokemonCard } from "./PokemonCard";

export function PokemonList({ data }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {data.map((name) => (
        <PokemonCard key={name} name={name} onClick={() => {}} />
      ))}
    </div>
  );
}
