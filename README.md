# Pokédex React Challenge

Expected time: **~20 minutes**.

Download this repo and run it.

---

## Challenges

### Challenge 1 — Card component (`src/components/PokemonCard.jsx`)

Create a reusable and clickable `PokemonCard` component that accepts a `name` prop and renders it.

Use this component in `App.jsx` to display all 151 Pokémon from `src/pokemon.json`.

Before rendering, the list must be:
- sorted **alphabetically**
- each name with its **first letter capitalised** (e.g. `bulbasaur` → `Bulbasaur`)

---

### Challenge 2 — Search bar

Add a search input above the list that filters the displayed Pokémon by name in real time.

Extra points for any additional improvements to the search experience.

---

### Challenge 3 — Context API (`src/context/PokemonContext.jsx`)

Implement a `PokemonProvider` using the Context API that holds a `selectedPokemon` state.

Requirements:
- Clicking a card sets it as `selectedPokemon` via context.
- Clicking the same card again deselects it.
- The selected card must have a **visually different background** compared to the rest.

---

## Notes

- Styling is not evaluated — keep it minimal and focus on functionality.
- You are free to restructure files as you see fit.
- No AI assistants are allowed (whether in the IDE or any other type). You may use a web browser to consult documentation, Stack Overflow, etc., as long as the interviewers can see what you search for.
