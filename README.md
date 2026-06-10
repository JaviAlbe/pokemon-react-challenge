# Pokédex React Challenge

A hands-on exercise to build a small Pokédex with React.  
Expected time: **~20 minutes**.

## Getting started

```bash
git clone https://github.com/JaviAlbe/pokemon-react-challenge.git
cd pokemon-react-challenge
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Project structure

```
src/
├── App.jsx                        ← wire everything together here
├── pokemon.json                   ← list of the first 151 Pokémon names
├── components/
│   └── PokemonCard.jsx            ← Challenge 1
├── context/
│   └── PokemonContext.jsx         ← Challenge 3
└── index.css
```

---

## Challenges

### Challenge 1 — Card component (`src/components/PokemonCard.jsx`)

Create a reusable `PokemonCard` component that accepts a `name` prop and renders it.

Use this component in `App.jsx` to display all 151 Pokémon from `src/pokemon.json`.

Before rendering, the list must be:
- sorted **alphabetically**
- each name with its **first letter capitalised** (e.g. `bulbasaur` → `Bulbasaur`)

---

### Challenge 2 — Search bar with debounce

Add a search input above the list that filters the displayed Pokémon by name in real time.

The filtering must be **debounced** — avoid running the filter on every keystroke.  
You may implement debounce manually or use any utility you prefer (`lodash.debounce`, etc.).

---

### Challenge 3 — Context API (`src/context/PokemonContext.jsx`)

Implement a `PokemonProvider` using the Context API that holds a `selectedPokemon` state (initially `null`).

Requirements:
- Clicking a card sets it as `selectedPokemon` via context.
- Clicking the **same card again** deselects it (back to `null`).
- The selected card must have a **visually different background** compared to the rest.

---

## Notes

- Do not install any state management libraries (Redux, Zustand, Jotai, …). Use only React built-ins.
- Styling is not evaluated — keep it minimal and focus on functionality.
- You are free to restructure files as you see fit.
