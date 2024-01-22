import { Pokemon, Trainer } from './types';
import allTrainers from './data/trainers.json';
import pokemons from './data/pokemons.json';
import { shuffleArray } from './utils/arrays';
import { deepClone } from './utils/objects';
import battle from './battle';

// Clone trainers to avoid mutating the original data
const trainers = shuffleArray<Trainer>(allTrainers, 2).map((trainer) =>
  deepClone(trainer)
);

// Fill pokemons with random pokemons
trainers.forEach((trainer) => {
  // Clone pokemons to avoid mutating the original data
  const newPokemons = shuffleArray<Pokemon>(pokemons as Pokemon[], 3).map(
    (pokemon) => deepClone(pokemon)
  );
  trainer.pokemons = newPokemons;
});

// Start battle
battle(trainers[0], trainers[1]);
