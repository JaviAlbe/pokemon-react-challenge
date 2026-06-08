# Pokédex React Challenge

A coding exercise to build a small Pokédex web app using React and the public [PokéAPI](https://pokeapi.co/).

## Getting started

```bash
# 1. Clone the repository
git clone https://github.com/JaviAlbe/pokemon-react-challenge.git
cd pokemon-react-challenge

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Project structure

```
src/
├── App.jsx                  ← main component, wire everything together here
├── hooks/
│   └── usePokemon.js        ← Challenge 1
├── components/
│   └── PokemonCard.jsx      ← Challenge 2
└── context/
    └── PokemonContext.jsx   ← Challenge 3
```

Each file has comments describing exactly what is expected. You are free to add any additional files or folders you need.

---

## Challenges

### Challenge 1 — Custom hook (`src/hooks/usePokemon.js`)

Create a custom hook called `usePokemon` that fetches the first 151 Pokémon from:

```
https://pokeapi.co/api/v2/pokemon?limit=151
```

The hook must return:
- `pokemonList` — the array of Pokémon returned by the API
- `loading` — `true` while the request is in flight
- `error` — an error message string if the request fails, otherwise `null`

Use this hook inside `App.jsx` to retrieve the list.

> **Note:** Each Pokémon object in the API response has a `name` field. Make sure the name is displayed with its **first letter capitalised** (e.g. `bulbasaur` → `Bulbasaur`).

---

### Challenge 2 — Card component (`src/components/PokemonCard.jsx`)

Create a reusable `PokemonCard` component that accepts the following props:

| Prop | Type | Description |
|------|------|-------------|
| `name` | string | The Pokémon's name |
| `type` | string | The Pokémon's primary type (e.g. `"fire"`) |

Use this component in `App.jsx` to render the list from Challenge 1.

> **Hint:** The list endpoint does not include the Pokémon's type. You will need to make an additional request per Pokémon (or think of another way) to get it.

---

### Challenge 3 — Context API (`src/context/PokemonContext.jsx`)

Implement a `PokemonProvider` using the Context API that manages a `selectedPokemon` state (initially `null`).

Requirements:
- Wrap the app with `PokemonProvider`.
- Clicking a `PokemonCard` should set that Pokémon as `selectedPokemon` via context.
- Display the selected Pokémon's details (name and type) in a panel **outside the list** — somewhere else in the component tree — to demonstrate cross-tree state sharing.

---

### Bonus — Search

Add a search input above the list that filters the displayed Pokémon by name in real time.

---

## Notes

- Do not install any state management libraries (Redux, Zustand, Jotai, etc.). Use only React built-ins.
- Styling is not evaluated — keep it simple and focus on functionality.
- You are free to use any data-fetching approach you prefer (`fetch`, `axios`, etc.).
