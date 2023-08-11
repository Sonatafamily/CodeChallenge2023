import { PAYOUT_MULTIPLIERS, SlotIcon } from './SlotIcon';

/**
 * @description Class representing a slot machine game with a console interface.
 * @class SlotMachine
 *
 */
export class SlotMachine {
  /**
   * @static {SlotIcon[]} allIcons - All possible icons that can appear on the slot machine.
   */
  private static readonly allIcons: SlotIcon[] = Object.values(SlotIcon);
  /**
   * @property {SlotIcon[]} icons - The icons that can appear on the slot machine.
   */
  private icons: SlotIcon[] = [];
  /**
   * @property {SlotIcon[][]} matrix - The matrix of icons that appear on the slot machine.
   */
  private matrix: SlotIcon[][] = [];
  /**
   * @property {number} rows - The number of rows in the matrix.
   */
  private rows: number = 1;
  /**
   * @property {number} cols - The number of columns in the matrix.
   */
  private cols: number = 3;
  /**
   * @property {number} betAmount - The amount that was bet on the current spin.
   */
  private betAmount: number = 0;
  /**
   * @property {number} difficulty - The difficulty of the slot machine.
   */
  private difficulty: number = 1;
  /**
   * @property {number} balance - The balance of the slot machine.
   */
  private balance: number = 0;

  /**
   * @property {SlotIcon[]} winningIcons - The icons that won on the current spin.
   */
  private winningIcons: SlotIcon[] = [];

  /**
   * @description Function to extract the winning icons from the array.
   * @returns The icons that won on the current spin.
   */
  public getWinningIcons(): SlotIcon[] {
    return this.winningIcons;
  }

  /**
   * @description Setup the machine based on the difficulty, determining icons and matrix dimensions.
   */
  private setupMachine(): void {
    this.icons = SlotMachine.allIcons.slice(0, this.difficulty + 2); // Start with 3 icons and add more as difficulty increases
    const maxSize = this.difficulty > 6 ? 6 : this.difficulty;
    this.rows = Math.max(1, maxSize);
    this.cols = Math.max(3, maxSize);
  }
  /**
   * @description Sets the difficulty of the slot machine.
   * @param difficulty
   */
  public setDifficulty(difficulty: number): void {
    if (difficulty < 1 || difficulty > 10) {
      throw new Error('Invalid level. Choose a difficulty between 1 and 10.');
    }

    this.difficulty = difficulty;

    this.setupMachine();
  }

  /**
   * @description Gets the difficulty of the slot machine.
   * @returns The difficulty of the slot machine.
   */
  public getBalance(): number {
    return this.balance; // Assuming you have a balance property in your class.
  }

  /**
   * @description Replenishes the balance with a default amount.
   */
  public replenishBalance(): void {
    const defaultReplenishAmount = 1000; // This is an example amount.
    this.addBalance(defaultReplenishAmount);
    console.log(
      `Your balance was low. We've added $${defaultReplenishAmount} to your balance.`
    );
  }

  /**
   * @description Checks if the balance is sufficient.
   * @returns True if balance is sufficient, false otherwise.
   */
  public hasSufficientBalance(): boolean {
    return this.balance > 0;
  }

  /**
   * @description Adds a specified amount to the balance.
   * @param amount - The amount to add to the balance.
   */
  public addBalance(amount: number): void {
    this.balance += amount;
  }

  /**
   * @description Sets the bet amount for the current spin.
   * @param amount - Amount to be bet.
   */
  public setBet(amount: number): void {
    if(this.balance < amount) {
      throw new Error('Insufficient balance. Please add credits to your balance.');
    }
    if(amount <= 0) {
      throw new Error('Invalid bet amount. Please enter a positive number.');
    }
    this.betAmount = amount;
  }

  /**
   * @description Gets the bet amount for the current spin.
   * @returns The bet amount.
   */
  public getBet(): number {
    return this.betAmount;
  }

  /**
   * @description Animate the spin of the slot machine.
   * @param duration - Duration of the spin in milliseconds.
   * @returns A promise that resolves when the animation is complete.
   */
  public async animateSpin(duration: number = 5000): Promise<void> {
    if (this.balance && this.betAmount) {
      if (this.balance < this.betAmount) {
        console.log(
          'Insufficient balance. Please add credits to your balance.'
        );
        return;
      }
      this.balance -= this.betAmount;
    }

    // Define how many spins (frames) you want for the given duration
    const spins = 10;
    const delay = duration / spins;

    for (let i = 0; i < spins; i++) {
      this.spin();
      console.clear(); // Clear the console for the next frame
      console.log(this.getDisplay());
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  /**
   * @description Generate a random icon from the set icons.
   * @returns A random icon.
   */
  private getRandomIcon(): SlotIcon {
    const randomIndex = Math.floor(Math.random() * this.icons.length);
    return this.icons[randomIndex];
  }

  /**
   * @description Calculate the probability of winning based on the set bet amount.
   * @returns The probability of winning.
   */
  private getWinningProbability(): number {
    // Base probability (can be adjusted). Assuming a 10% base for level 1 and decreasing it by 1% for each level.
    let baseProbability = 0.1 - this.rows * this.cols * 0.01;

    // Increase probability with bet amount (diminishing returns)
    const scaledIncrease = Math.sqrt(this.betAmount) * 0.01; // This is an example scaling factor.

    // Return the probability, but not more than 100%
    return Math.min(baseProbability + scaledIncrease, 1);
  }

  /**
   * @description Determine if the spin results in a win based on the winning probability.
   * @returns True if the spin results in a win, false otherwise.
   */
  private isWinThisTurn(): boolean {
    return Math.random() < this.getWinningProbability();
  }

  /**
   * @description Initialize the matrix with random icons.
   */
  private initializeMatrix(): void {
    this.matrix = [];
    for (let i = 0; i < this.rows; i++) {
      const row: SlotIcon[] = [];
      for (let j = 0; j < this.cols; j++) {
        row.push(this.getRandomIcon());
      }
      this.matrix.push(row);
    }
  }

  /**
   * @description Ensure a winning row by setting all icons in a random row to the same value.
   * This is only called if the spin did not result in a win, but the win probability was met.
   */
  private ensureWinningRow(): void {
    // Modify a row or column or diagonal to make it a winning one
    const randomRow = Math.floor(Math.random() * this.rows);
    const randomIcon = this.getRandomIcon();
    for (let j = 0; j < this.cols; j++) {
      this.matrix[randomRow][j] = randomIcon;
    }
  }

  /**
   * @description Spin the slot machine, generating a matrix of icons.
   * If the spin did not result in a win, but the win probability was met, a winning row is ensured.
   */
  public spin(): void {
    this.initializeMatrix();
    this.didWin();
    // Modifying spin results if necessary
    if (!this.winningIcons.length && this.isWinThisTurn()) {
      this.ensureWinningRow();
    }
  }

  /**
   * @description Generate a string representation of the matrix for display.
   * @returns A string representation of the matrix.
   */
  public getDisplay(): string {
    return this.matrix.map((row) => row.join(' | ')).join('\n');
  }

  /**
   * @description Check the matrix for winning combinations.
   * @returns An array of winning icons, empty if none.
   */
  public didWin(): void {
    let winningIcons: SlotIcon[] = [];

    // Check for horizontal wins
    winningIcons.push(...this.checkHorizontalWins());

    if (this.cols >= 3 && this.rows >= 3) {
      // Check for vertical wins
      winningIcons.push(...this.checkVerticalWins());
      // Check for diagonal wins in larger matrices
      winningIcons.push(...this.checkDiagonalWins());
    }

    this.winningIcons = winningIcons;
  }

  /**
   * @description Check for horizontally matching rows of icons.
   * @returns Winning icons from horizontal rows.
   */
  private checkHorizontalWins(): SlotIcon[] {
    const winners: SlotIcon[] = [];
    for (const row of this.matrix) {
      if (row.every((icon) => icon === row[0])) {
        winners.push(row[0]);
      }
    }
    return winners;
  }

  /**
   * @description Check for vertically matching columns of icons.
   * @returns Winning icons from vertical columns.
   */
  private checkVerticalWins(): SlotIcon[] {
    const winners: SlotIcon[] = [];
    for (let col = 0; col < this.cols; col++) {
      if (this.matrix.every((row) => row[col] === this.matrix[0][col])) {
        winners.push(this.matrix[0][col]);
      }
    }
    return winners;
  }

  /**
   * @description Check for diagonally matching icons.
   * @returns Winning icons from diagonal lines.
   */
  private checkDiagonalWins(): SlotIcon[] {
    const winners: SlotIcon[] = [];

    // Main diagonal check
    const mainDiagonalIcon = this.matrix[0][0];
    if (this.matrix.every((row, idx) => row[idx] === mainDiagonalIcon)) {
      winners.push(mainDiagonalIcon);
    }

    // Anti-diagonal check
    const antiDiagonalIcon = this.matrix[0][this.cols - 1];
    if (
      this.matrix.every(
        (row, idx) => row[this.cols - 1 - idx] === antiDiagonalIcon
      )
    ) {
      winners.push(antiDiagonalIcon);
    }

    return winners;
  }

  /**
   * @description Calculate the total payout based on the bet amount, difficulty, and winning icons.
   * @returns The total payout amount.
   */
  public calculatePayout(): number {
    const payout = this.winningIcons.reduce((sum, icon) => {
      return sum + this.betAmount * this.difficulty * PAYOUT_MULTIPLIERS[icon];
    }, 0);
    if (payout > 0) this.addBalance(payout);
    return payout;
  }
}
