export function PokemonCard({ name, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "1px solid var(--border)",
        borderRadius: "6px",
      }}
    >
      {name}
    </div>
  );
}
