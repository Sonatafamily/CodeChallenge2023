import typeChart from '../data/typeChart.json';
import { Pokemon, PokemonType } from '../types';
import { printDamage } from './printers';

/**
 * Get the type multiplier for a given attacker and defender type
 * @param attackerType - the type of the attacker
 * @param defenderType - the type of the defender
 * @returns {number} - the type multiplier
 * @example
 * getTypeMultiplier(PokemonType.Fire, PokemonType.Water) // 0.5
 * getTypeMultiplier(PokemonType.Fire, PokemonType.Grass) // 2
 */
export function getTypeMultiplier(
  attackerType: PokemonType,
  defenderType: PokemonType
): number {
  // Set a default multiplier = 1 for types not explicitly defined
  const defaultMultiplier = 1;

  // Retrieve the typeMultiplier from the chart or use the defaultMultiplier if not found
  return typeChart[attackerType]?.[defenderType] ?? defaultMultiplier;
}

/**
 * Calculate the damage of a move
 * @param attacker - the attacking pokemon
 * @param defender - the defending pokemon
 * @returns {number} - the damage
 * @example
 * calculateDamage(attacker, defender) // 50
 * calculateDamage(attacker, defender) // 0
 */
export function calculateDamage(attacker: Pokemon, defender: Pokemon): number {
  // Base damage formula can be adjusted as needed
  const baseDamage = 10;

  // Random number between 0 and (attacker.moves.length -1)
  const moveIndex = Math.floor(Math.random() * attacker.moves.length);

  // Get one move from the attacker's moveset
  const move = attacker.moves[moveIndex];

  // Random number between 0 and (defender.types.length -1)
  const defenderTypeIndex = Math.floor(Math.random() * defender.types.length);

  // Get one type from the defender's types
  const defenderType = defender.types[defenderTypeIndex];

  // Calculate type advantage multiplier
  const typeMultiplier = getTypeMultiplier(move.type, defenderType);

  // Calculate level difference multiplier
  const levelDifference = attacker.level - defender.level;
  const levelMultiplier =
    levelDifference >= 0
      ? 1 + levelDifference / 50
      : 1 / (1 - levelDifference / 50);

  // Speed factors into critical hit chance
  // Higher speed increases the chance of a critical hit
  const speedDifference = attacker.speed - defender.speed;
  const speedMultiplier = 1 + speedDifference / 100;

  // Critical hit chance (dynamic based on speed difference)
  const criticalChance = Math.min(0.1 + Math.abs(speedDifference) / 500, 0.25);
  const isCriticalHit = Math.random() < criticalChance;
  const criticalMultiplier = isCriticalHit ? 1.5 : 1;

  // Size factor - larger Pokemon may deal more damage but are also bigger targets
  const sizeMultiplier =
    1 +
    (attacker.weight / defender.weight + attacker.height / defender.height) /
      200;

  // Physical and Special multipliers
  const physicalMultiplier = 1 + (attacker.attack - defender.defense) / 100;
  const specialMultiplier =
    1 + (attacker.specialAttack - defender.specialDefense) / 100;

  // Move power and accuracy impact
  const movePowerMultiplier = move.power / 100;
  const accuracyMultiplier = move.accuracy / 100;

  // Power Points (PP) factor - moves with less PP might be stronger
  const ppMultiplier = 1 + (100 - move.powerPoints) / 50;

  // Calculate and return final damage
  const damage = Math.floor(
    ((baseDamage *
      typeMultiplier *
      levelMultiplier *
      speedMultiplier *
      criticalMultiplier *
      sizeMultiplier *
      (physicalMultiplier + specialMultiplier)) /
      2) * // Averaging physical and special
      movePowerMultiplier *
      accuracyMultiplier *
      ppMultiplier
  );

  return damage > 0 ? damage : 0;
}

/**
 * Recursively battle two pokemons until one of them has 0 HP
 * @param pokemon1 - the first pokemon
 * @param pokemon2 - the second pokemon
 * @returns {Pokemon | undefined} - the winner or undefined if it's a tie
 * @example
 * pokemonBattle(pokemon1, pokemon2) // pokemon1
 * pokemonBattle(pokemon1, pokemon2) // pokemon2
 * pokemonBattle(pokemon1, pokemon2) // undefined
 */
export function pokemonBattle(
  pokemon1: Pokemon,
  pokemon2: Pokemon
): Pokemon | undefined {
  try {
    if (pokemon1.hp <= 0) return pokemon2.hp <= 0 ? undefined : pokemon2;
    if (pokemon2.hp <= 0) return pokemon1;

    const pokemon2Damage = calculateDamage(pokemon1, pokemon2);
    pokemon2.hp -= pokemon2Damage;

    printDamage(pokemon1, pokemon2, pokemon2Damage);

    return pokemonBattle(pokemon2, pokemon1);
  } catch (error: any) {
    // check if the error is a MaxCallStack error
    if (error.message.includes('Maximum call stack size exceeded')) {
      return undefined;
    }
    throw error;
  }
}
