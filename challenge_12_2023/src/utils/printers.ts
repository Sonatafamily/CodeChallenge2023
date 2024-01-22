import { Pokemon } from '../types';

/**
 * Print the damage of a move
 * @param attacker - the attacking pokemon
 * @param defender - the defending pokemon
 * @param damage - the damage
 * @example
 * printDamage(attacker, defender, 50) // 'CleverWoodenRock attacks GorgeousPlasticJazz for 50 damage. GorgeousPlasticJazz has 100 HP left.'
 * printDamage(attacker, defender, 0) // 'CleverWoodenRock attacks GorgeousPlasticJazz for 0 damage. GorgeousPlasticJazz has 100 HP left.'
 */
export function printDamage(
  attacker: Pokemon,
  defender: Pokemon,
  damage: number
) {
  console.log(
    `${attacker.name} attacks ${defender.name} for ${damage} damage. ${defender.name} has ${defender.hp} HP left.`
  );
}

/**
 * Print the pokemon information
 * @param pokemon - the pokemon to print
 * @example
 * printPokemonInformation(pokemon) // '--------POKEMON INFORMATION------------'
 *                                  // '| Name: CleverWoodenRock'
 *                                  // '| Type: Fire'
 *                                  // '| Level: 100'
 *                                  // '| HP: 100'
 *                                  // '| Special Attack: 100'
 *                                  // '| Special Defense: 100'
 *                                  // '| Speed: 100'
 *                                  // '---------------------------------------'
 */
export function printPokemonInformation({
  name,
  types,
  level,
  hp,
  specialAttack,
  specialDefense,
  speed,
}: Pokemon) {
  // Develop logic to print pokemon information

  console.log('--------POKEMON INFORMATION------------');
  console.log(`| Name: ${name}`);
  console.log(
    `| Type${types.length > 1 ? 's' : ''}: ${types
      .map((type) => type)
      .join(', ')}`
  );
  console.log(`| Level: ${level}`);
  console.log(`| HP: ${hp}`);
  console.log(`| Special Attack: ${specialAttack}`);
  console.log(`| Special Defense: ${specialDefense}`);
  console.log(`| Speed: ${speed}`);
  console.log('---------------------------------------');
}

/**
 * Print the start of the battle between two trainers
 * @param trainer1Name - the name of the first trainer
 * @param trainer2Name - the name of the second trainer
 * @example
 * printBattleStart('John', 'Jane') // '--------BATTLE STARTS------------'
 *                                  // 'John VS Jane'
 */
export function printBattleStart(trainer1Name: string, trainer2Name: string) {
  console.log('--------BATTLE STARTS------------');
  console.log(`${trainer1Name} VS ${trainer2Name}`);
}

/**
 * Print the number of battles that will happen
 * @param numberOfBattles - the number of battles
 * @example
 * printNumberOfBattles(3) // 'We will have 3 battles'
 * printNumberOfBattles(1) // 'We will have 1 battle'
 * printNumberOfBattles(0) // 'We won't have any battles'
 * printNumberOfBattles(-1) // 'We won't have any battles'
 */
export function printNumberOfBattles(numberOfBattles: number) {
  if (numberOfBattles > 0) {
    console.log(
      `We will have ${numberOfBattles} battle${numberOfBattles > 1 ? 's' : ''}`
    );
  } else {
    console.log("We won't have any battles");
  }
}

/**
 * Print the information of a round
 * @param round - the round number
 * @param trainer1Name - the name of the first trainer
 * @param trainer2Name - the name of the second trainer
 * @param trainer1Pokemon - the pokemon of the first trainer
 * @param trainer2Pokemon - the pokemon of the second trainer
 * @example
 * printRoundInfo(1, 'John', 'Jane', pokemon1, pokemon2) // 'Round 1'
 *                                                       // '🙅🏼John chooses 🙀CleverWoodenRock'
 *                                                       // '--------POKEMON INFORMATION------------'
 *                                                       // '| Name: CleverWoodenRock'
 *                                                       // '| Type: Fire'
 *                                                       // '| Level: 100'
 *                                                       // '| HP: 100'
 *                                                       // '| Special Attack: 100'
 *                                                       // '| Special Defense: 100'
 *                                                       // '| Speed: 100'
 *                                                       // '---------------------------------------'
 *                                                       // '🙅🏼Jane chooses 🙀GorgeousPlasticJazz'
 *                                                       // '--------POKEMON INFORMATION------------'
 *                                                       // '| Name: GorgeousPlasticJazz'
 *                                                       // '| Type: Water'
 *                                                       // '| Level: 100'
 *                                                       // '| HP: 100'
 *                                                       // '| Special Attack: 100'
 *                                                       // '| Special Defense: 100'
 *                                                       // '| Speed: 100'
 *                                                       // '---------------------------------------'
 *                                                       // 'CleverWoodenRock      vs      GorgeousPlasticJazz'
 */
export function printRoundInfo(
  round: number,
  trainer1Name: string,
  trainer2Name: string,
  trainer1Pokemon: Pokemon,
  trainer2Pokemon: Pokemon
) {
  console.log(`Round ${round}`);
  console.log(`🙅🏼${trainer1Name} chooses 🙀${trainer1Pokemon.name}`);
  printPokemonInformation(trainer1Pokemon);
  console.log(`🙅🏼${trainer2Name} chooses 🙀${trainer2Pokemon.name}`);
  printPokemonInformation(trainer2Pokemon);
  console.log(`${trainer1Pokemon.name}      vs      ${trainer2Pokemon.name}`);
}

/**
 * Print the winner of a battle
 * @param winner - the winner of the battle
 * @example
 * printWinner(pokemon)   // '🏅 CleverWoodenRock wins the battle!'
 *                        // '--------BATTLE ENDS------------'
 * printWinner()          // '⚠️ It's a tie! ⚠️'
 *                        // '--------BATTLE ENDS------------'
 * printWinner(undefined) // '⚠️ It's a tie! ⚠️'
 * *                      // '--------BATTLE ENDS------------'
 * printWinner(null)      // '⚠️ It's a tie! ⚠️'
 * *                      // '--------BATTLE ENDS------------'
 */
export function printWinner(winner?: Pokemon) {
  if (!winner) {
    console.log("⚠️ It's a tie! ⚠️");
  } else {
    console.log(`🏅 ${winner.name} wins the battle!`);
  }
  console.log('--------BATTLE ENDS------------');
}

/**
 * Print the number of wins of a trainer
 * @param trainerName - the name of the trainer
 * @param numberOfWins - the number of wins
 * @param totalBattles - the total number of battles
 * @example
 * trainerWins('John', 1, 3) // '🏆 John wins: 1/3'
 * trainerWins('John', 0, 3) // '🏆 John wins: 0/3'
 * trainerWins('John', 3, 3) // '🏆 John wins: 3/3'
 */
function trainerWins(
  trainerName: string,
  numberOfWins: number,
  totalBattles: number
) {
  console.log(`🏆 ${trainerName} wins: ${numberOfWins}/${totalBattles}`);
}

/**
 * Print the results of a battle
 * @param trainer1Name - the name of the first trainer
 * @param trainer2Name - the name of the second trainer
 * @param trainer1Wins - the number of wins of the first trainer
 * @param trainer2Wins - the number of wins of the second trainer
 * @param totalBattles - the total number of battles
 * @example
 * printBattleResults('John', 'Jane', 1, 2, 3)  // '**********************************'
 *                                              // '--------BATTLE RESULTS------------'
 *                                              // '🏆 Jane wins: 2/3'
 *                                              // '--------BATTLE RESULTS------------'
 * printBattleResults('John', 'Jane', 2, 1, 3)  // '**********************************'
 *                                              // '--------BATTLE RESULTS------------'
 *                                              // '🏆 John wins: 2/3'
 *                                              // '--------BATTLE RESULTS------------'
 * printBattleResults('John', 'Jane', 1, 1, 3)  // '**********************************'
 *                                              // '--------BATTLE RESULTS------------'
 *                                              // '😱 Its a tie!'
 *                                              // '--------BATTLE RESULTS------------'
 * printBattleResults('John', 'Jane', 0, 3, 3)  // '**********************************'
 *                                              // '--------BATTLE RESULTS------------'
 *                                              // '🏆 Jane wins: 3/3'
 *                                              // '--------BATTLE RESULTS------------'
 */
export function printBattleResults(
  trainer1Name: string,
  trainer2Name: string,
  trainer1Wins: number,
  trainer2Wins: number,
  totalBattles: number
) {
  console.log('**********************************');
  console.log('--------BATTLE RESULTS------------');
  if (trainer1Wins > trainer2Wins) {
    trainerWins(trainer1Name, trainer1Wins, totalBattles);
  } else if (trainer1Wins === trainer2Wins) {
    console.log('😱 Its a tie!');
  } else {
    trainerWins(trainer2Name, trainer2Wins, totalBattles);
  }
  console.log('--------BATTLE RESULTS------------');
}
