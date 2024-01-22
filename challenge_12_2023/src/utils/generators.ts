import { faker } from '@faker-js/faker';
import { Pokemon, PokemonType, Trainer } from '../types';
import { capitalize } from './strings';

/**
 * Generate a random Pokemon name
 * @returns {string}
 * @example
 * generatePokemonName() // 'CleverWoodenRock'
 * generatePokemonName() // 'GorgeousPlasticJazz'
 * generatePokemonName() // 'IncredibleCottonRock'
 */
function generatePokemonName() {
  // Use a combination of methods to create unique names
  const prefix = faker.hacker.adjective(); // Use an adjective for creativity
  const body = faker.commerce.productMaterial(); // Something tangible
  const suffix = faker.music.genre().slice(0, 3); // A slice of a music genre for uniqueness

  // Concatenate and capitalize the first letter of each part
  return (capitalize(prefix) + capitalize(body) + capitalize(suffix)).replace(
    /\s+/g,
    ''
  );
}

/**
 * Generate trainers with random pokemons
 * @param quantity - number of trainers to generate
 * @returns {Trainer[]}
 * @example
 * generateTrainers() // [{ id: 1, name: 'John Doe', pokemons: [ ... ], town: 'New York' }, ...]
 */
export function generateTrainers(quantity = 20): Trainer[] {
  const trainers: Trainer[] = [];
  for (let i = 0; i < quantity; i++) {
    trainers.push({
      id: faker.number.int(1000),
      name: faker.person.fullName(),
      pokemons: generatePokemons(3),
      town: faker.location.city(),
    });
  }
  return trainers;
}

/**
 * Generate pokemons with random moves
 * @param quantity - number of pokemons to generate
 * @returns {Pokemon[]}
 * @example
 * generatePokemons() // [{ id: 1, name: 'CleverWoodenRock', types: [ ... ], moves: [ ... ] }, ...]
 * generatePokemons() // [{ id: 1, name: 'GorgeousPlasticJazz', types: [ ... ], moves: [ ... ] }, ...]
 */
export function generatePokemons(quantity = 20): Pokemon[] {
  const pokemons: Pokemon[] = [];

  // Generate a random number of pokemons
  for (let i = 0; i < quantity; i++) {
    const quantityTypes = faker.number.int({ min: 1, max: 5 });

    // Generate a random number of types
    const types = Array.from({ length: quantityTypes }, () => {
      const pokemonTypePosition = faker.number.int(17);
      return Object.entries(PokemonType)[pokemonTypePosition][1];
    });

    // Add the pokemon to the list
    pokemons.push({
      id: faker.number.int(1000),
      attack: faker.number.int(300),
      defense: faker.number.int(300),
      height: faker.number.int(300),
      name: generatePokemonName(),
      types,
      level: faker.number.int(300),
      hp: faker.number.int(300),
      specialAttack: faker.number.int(300),
      specialDefense: faker.number.int(300),
      speed: faker.number.int(300),
      weight: faker.number.int(300),
      moves: Array.from(
        { length: faker.number.int({ min: 1, max: 5 }) },
        () => {
          // Generate a random number of moves
          const moveTypePosition = faker.number.int(17);

          // Get the move type from the PokemonType enum
          const moveType = Object.entries(PokemonType)[moveTypePosition][1];

          return {
            name: faker.commerce.productName(),
            power: faker.number.int(300),
            accuracy: faker.number.int(100),
            type: moveType,
            powerPoints: faker.number.int(100),
          };
        }
      ),
    });
  }
  return pokemons;
}
