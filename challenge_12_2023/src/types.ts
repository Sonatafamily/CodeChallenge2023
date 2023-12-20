export type Pokemon = {
  id: number;
  name: string;
  types: PokemonType[];
  level: number;
  hp: number;
  specialAttack: number;
  specialDefense: number;
  attack: number;
  defense: number;
  speed: number;
  moves: Moves[];
  weight: number;
  height: number;
};

export type TypeChart = Record<PokemonType, Record<PokemonType, number>>;

type Moves = {
  name: string;
  power: number;
  accuracy: number;
  type: PokemonType;
  powerPoints: number;
};

export type Trainer = {
  id: number;
  name: string;
  pokemons: Pokemon[];
  town: string;
};

export enum PokemonType {
  bug = 'bug',
  dark = 'dark',
  dragon = 'dragon',
  electric = 'electric',
  fairy = 'fairy',
  fighting = 'fighting',
  fire = 'fire',
  flying = 'flying',
  ghost = 'ghost',
  grass = 'grass',
  ground = 'ground',
  ice = 'ice',
  normal = 'normal',
  poison = 'poison',
  psychic = 'psychic',
  rock = 'rock',
  steel = 'steel',
  water = 'water',
}
