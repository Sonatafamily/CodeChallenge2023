import { Trainer } from './types';
import { pokemonBattle } from './utils/pokemon';
import {
  printBattleResults,
  printBattleStart,
  printNumberOfBattles,
  printRoundInfo,
  printWinner,
} from './utils/printers';

function battle(trainer1: Trainer, trainer2: Trainer) {
  printBattleStart(trainer1.name, trainer2.name);
  // get the number of lower pokemons by trainer
  const trainer1Pokemons = trainer1.pokemons.length;
  const trainer2Pokemons = trainer2.pokemons.length;
  // get the lower number of pokemons
  const lowerPokemons = Math.min(trainer1Pokemons, trainer2Pokemons);

  printNumberOfBattles(lowerPokemons);

  let round = 1;
  let trainer1Wins = 0;
  let trainer2Wins = 0;
  while (round <= lowerPokemons) {
    const trainer1Pokemon = trainer1.pokemons[round - 1];
    const trainer2Pokemon = trainer2.pokemons[round - 1];
    printRoundInfo(
      round,
      trainer1.name,
      trainer2.name,
      trainer1Pokemon,
      trainer2Pokemon
    );
    const winner = pokemonBattle(trainer1Pokemon, trainer2Pokemon);

    if (winner?.id === trainer1Pokemon.id) {
      trainer1Wins++;
    } else if (winner?.id === trainer2Pokemon.id) {
      trainer2Wins++;
    }
    printWinner(winner);
    round++;
  }

  printBattleResults(
    trainer1.name,
    trainer2.name,
    trainer1Wins,
    trainer2Wins,
    lowerPokemons
  );
}

export default battle;
