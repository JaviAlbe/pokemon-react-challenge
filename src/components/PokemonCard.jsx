export function PokemonCard({ name, onClick, isSelected }) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "8px 16px",
        cursor: "pointer",
        backgroundColor: isSelected ? "var(--accent-bg)" : "transparent",
        border: "1px solid",
        borderColor: isSelected ? "var(--accent-border)" : "var(--border)",
        borderRadius: "6px",
      }}
    >
      {name}
    </div>
  );
}
