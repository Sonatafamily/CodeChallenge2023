# Pokemon Battle Simulator

## Overview
Pokemon Battle Simulator is an engaging TypeScript-based application that simulates battles between Pokemon trainers. It showcases the use of external APIs, data manipulation, and TypeScript programming best practices.

### Features
- **Real-time Pokemon Data**: Fetches data from the `pokeapi.co` API.
- **Dynamic Battle Simulation**: Simulates battles between trainers with various Pokemon.
- **Randomized Elements**: Utilizes `@faker-js/faker` to generate random trainers and Pokemons.
- **Customizable Battle Environment**: Allows for battles with different sets of Pokemons and trainers.
- **Detailed Logging**: Prints comprehensive battle information, including each round and final results.

## Getting Started

### Prerequisites
- Node.js (Recommended version: LTS/Iron)
- TypeScript
- Internet access for API calls

### Installation
1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.

### Running the Project
- To run the project using `npm`, `pnpm`, or `yarn`, you don't need to install the dependencies globally if `ts-node` is already installed on your system. 
- If `ts-node` is not installed, you can install it globally using one of the following commands:
  - npm: `npm install -g ts-node`
  - pnpm: `pnpm add -g ts-node`
  - yarn: `yarn global add ts-node`
- To start a regular battle, run `npm run start`.
- To start a battle with randomly generated trainers and Pokemons, run `npm run start:faker`.

## Note:
- The `start` script uses the `data/trainers.json` and `data/pokemons.json` files to simulate a battle between two trainers.
- The `start:faker` script uses the `@faker-js/faker` package to generate random trainers and Pokemons for a battle so you will need to install the dependencies for this script to work.

## Project Structure

```
pokemon-battle/
├── data/
│   ├── pokemons.json
│   └── typeChart.json
│   └── trainers.json
├── src/
│   ├── battle.ts
│   ├── fakerPokemonBattle.ts
│   ├── pokemonBattle.ts
│   ├── types.ts
│   ├── utils/
│   │   ├── arrays.ts
│   │   ├── generators.ts
│   │   ├── objects.ts
│   │   ├── pokemon.ts
│   │   ├── printers.ts
│   │   └── strings.ts
│   └── scripts/
│       └── extractPokemons.ts
├── .nvmrc
├── package.json
├── tsconfig.json
└── README.md
```

## Preview
https://github.com/AngelsProjects/pokemon-battle/assets/25916455/86ae8e5a-7641-4a3b-933f-27a06d8ec7f0

## Contributing
Contributions are welcome. Please ensure to follow the existing coding style and add unit tests for new functionalities.

## License
This project is licensed under the ISC License. See the `LICENSE` file for details.

## Author
Angel Arciniega - mangel.arciniega@gmail.com

---

**Note**: This application is for educational purposes and is not affiliated with the official Pokemon franchise.
