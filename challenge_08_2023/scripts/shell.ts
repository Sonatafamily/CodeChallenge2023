import * as readline from 'readline';

import { SlotMachine } from '../src/SlotMachine';

// Assuming your SlotMachine class is in this file

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let machine = new SlotMachine();

const startGame = () => {
  console.log('\nWelcome to the SlotMachine Game!\n');
  if (!machine.hasSufficientBalance()) {
    machine.replenishBalance();
  }
  askForLevel();
};

const askForAddCredits = () => {
  rl.question('Would you like to add credits? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes') {
      rl.question('How much would you like to add? ', (amount) => {
        const chosenAmount = parseInt(amount, 10);

        if (chosenAmount > 0) {
          machine.addBalance(chosenAmount);
          console.log(
            `Your balance is now ${machine.getBalance()}. Let's play!`
          );
          askForLevel();
        } else {
          console.log(
            'Invalid amount. Please choose an amount greater than 0.'
          );
          askForAddCredits();
        }
      });
    } else {
      console.log('Thank you for playing. Goodbye!');
      rl.close();
    }
  });
};

const askForLevel = () => {
  rl.question('Choose a difficulty level (1-10): ', (level) => {
    const chosenLevel = parseInt(level, 10);

    if (chosenLevel >= 1 && chosenLevel <= 10) {
      machine.setDifficulty(chosenLevel);
      if (machine.hasSufficientBalance()) {
        placeBet();
      } else {
        console.log(
          'Your balance is insufficient. Please add credits to your balance.'
        );
        askForAddCredits();
      }
    } else {
      console.log('Invalid level. Please choose between 1 and 5.');
      askForLevel();
    }
  });
};

const placeBet = () => {
  rl.question(
    `Your current balance is ${machine.getBalance()}. How much would you like to bet? `,
    (bet) => {
      const chosenBet = parseInt(bet, 10);

      if (chosenBet > 0 && chosenBet <= machine.getBalance()) {
        machine.setBet(chosenBet);
        console.log(`\nSpinning...\n`);
        machine.animateSpin().then(() => showResults());
      } else {
        console.log(
          'Invalid bet. Please choose an amount between 1 and your current balance.'
        );
        placeBet();
      }
    }
  );
};

const showResults = () => {
  machine.didWin();
  const payout = machine.calculatePayout();
  if (payout > 0) {
    console.log(
      `Congratulations! You've won ${payout} with ${machine
        .getWinningIcons()
        .join(', ')}. Your current balance is ${machine.getBalance()}.`
    );
  } else {
    console.log(
      `Sorry, better luck next time. Your current balance is ${machine.getBalance()}.`
    );
  }

  askToContinue();
};

const askToContinue = () => {
  rl.question('Do you want to play again? (yes/no): ', (answer) => {
    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      askForLevel();
    } else {
      console.log('Thank you for playing. Goodbye!');
      rl.close();
    }
  });
};

startGame();
