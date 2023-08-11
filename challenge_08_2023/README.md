# SlotMachine Game

Welcome to the SlotMachine game project. This project simulates a slot machine game which can be played from the console. Users can adjust the difficulty, place their bets, and see if they win or lose.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Running Tests](#running-tests)
- [How to Play](#how-to-play)
- [Code Overview](#code-overview)
- [Requirements](#requirements)
- [Running Tests](#running-tests)
- [Future Improvements](#future-improvements)

## Installation

1. Clone the repository:
```bash
git clone [repository_url]
```
2. Install the dependencies:
```bash
npm install
```

## Usage

To start the game:

```bash
npm start
```

The game interface will guide you through placing bets, choosing difficulty levels, and spinning the slot machine. 

## Features

- **Slot Machine Simulation**: The core of this project where the logic of the game exists. 
- **Adjustable Difficulty**: The user can set the difficulty level between 1 and 10. The number of symbols and matrix size increase with difficulty.
- **Interactive Console Interface**: Offers a user-friendly command-line interface to play the game.
- **Dynamic Difficulty Levels:** Players can choose a difficulty level between 1 and 10, which adjusts the number of icons in the slot machine and their odds of winning.
- **Betting System:** Players can place bets before spinning, and the game will calculate their winnings based on the outcome of the spin and the amount they bet.
- **Winning Calculations:** The game checks for horizontal, vertical, and diagonal winning combinations.
- **Balance Management:** Players start with a default balance, and the game will alert them if their balance is too low. Players can also add credits to their balance.

## How to Play

1. You will be greeted with a welcome message.
2. If your balance is insufficient, the game will automatically add credits.
3. Choose a difficulty level between 1 and 10.
4. Place your bet, keeping in mind your current balance.
5. Watch the slot machine spin.
6. After the spin ends, your results will be displayed. You'll see if you won and how much you earned.
7. Repeat or exit.

## Code Overview

### `SlotMachine` class

Located in `SlotMachine.ts`, this class represents the core logic of the slot machine game. 

#### Key Properties:

- `icons`: Icons that can appear on the slot machine.
- `matrix`: The matrix of icons that appear on the slot machine after each spin.
- `rows` & `cols`: Defines the dimensions of the slot matrix.
- `betAmount`: The amount the user has bet for the current spin.
- `difficulty`: The difficulty level set by the user.
- `balance`: The user's current balance.
- `winningIcons`: Icons that resulted in a win on the current spin.

#### Key Methods:

- `setDifficulty`: Adjust the difficulty of the game.
- `spin`: Simulate the spinning of the slot machine.
- `getDisplay`: Get a string representation of the slot matrix for display.
- `calculatePayout`: Calculate the winnings based on the result of the spin.

### `scripts/shell.ts`

This script provides an interactive console interface for the user to play the game.

#### Flow:

1. Welcome the user.
2. Check and replenish the user's balance if needed.
3. Allow the user to choose the game's difficulty.
4. Allow the user to place a bet.
5. Animate the slot machine spin.
6. Display the results of the spin.

## Requirements

- Node.js and npm must be installed to run and play the game.

## Running Tests

The game includes unit tests using Jest.

To run the tests:

```bash
npm run test
```

## Future Improvements

1. Add more exciting icons and payout multipliers.
2. Offer different slot machine themes.
3. Implement a high-score or leaderboard system.
4. Add a GUI for the game.
5. Multiple ways to win with the same icon in the matrix (e.g. a diagonal and horizontal win with the same icon).
6. Add a "free spin" feature.
---

Enjoy the game and may luck be on your side, and Happy Gaming! 🎰