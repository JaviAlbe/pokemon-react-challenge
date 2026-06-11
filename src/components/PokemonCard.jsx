export function PokemonCard({ name, onClick }) {
  return (
    <div onClick={onClick} style={{ cursor: "pointer" }}>
      {name}
    </div>
  );
}
