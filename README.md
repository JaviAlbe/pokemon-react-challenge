# Pokédex React Challenge

Expected time: **~20 minutes**.

Download this repo and run it.

---

## Challenges

### Challenge 1 — Sort and format the list

The cards are already rendered but the names are neither sorted nor formatted correctly.

Make sure that:
- the list is sorted **alphabetically**
- each name has its **first letter capitalised** (e.g. `bulbasaur` → `Bulbasaur`)

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
