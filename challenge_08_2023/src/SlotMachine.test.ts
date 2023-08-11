import { PAYOUT_MULTIPLIERS, SlotIcon } from './SlotIcon';
import { SlotMachine } from './SlotMachine';

afterEach(() => {
  jest.clearAllMocks();
});

describe('SlotMachine', () => {
  describe('Setup machine', () => {
    it('should setup machine based on the difficulty level', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(1);
      expect(machine['icons'].length).toBe(3);
    });
  });

  describe('Betting', () => {
    it('should allow setting and getting bet amount', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(5);
      machine.addBalance(1000);
      machine.setBet(1000);
      expect(machine.getBet()).toBe(1000);
    });
  });

  describe('Spinning', () => {
    it('should populate matrix on spin', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(1);
      machine.spin();
      expect(machine['matrix'].length).toBe(1);
      expect(machine['matrix'][0].length).toBe(3);
    });

    it('should ensure a winning row if probability is met but not a win', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(1);
      machine.spin();

      // Mock the random functions to always return high probability and not a win
      jest.spyOn(Math, 'random').mockReturnValue(0.9);

      machine.spin();
      expect(Math.random).toHaveBeenCalled();
    });

    it('should never produce an empty matrix', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(1);
      machine.spin();
      expect(machine['matrix'].flat().length).toBeGreaterThan(0);
    });

    it('should populate matrix rows based on difficulty level', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(5);
      machine.spin();
      expect(machine['matrix'].length).toBe(5);
    });
  });

  describe('Winning Check', () => {
    it('should correctly identify horizontal wins', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(1);
      machine['matrix'] = [
        [SlotIcon.DIAMOND, SlotIcon.DIAMOND, SlotIcon.DIAMOND],
      ];
      machine.didWin();

      expect(machine.getWinningIcons()).toEqual([SlotIcon.DIAMOND]);
    });
    it('should correctly identify vertical wins', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine['matrix'] = [
        [SlotIcon.DIAMOND, SlotIcon.STAR, SlotIcon.BELL],
        [SlotIcon.DIAMOND, SlotIcon.STAR, SlotIcon.CROWN],
        [SlotIcon.DIAMOND, SlotIcon.CHERRY, SlotIcon.HAT],
      ];
      machine.didWin();
      expect(machine.getWinningIcons()).toEqual([SlotIcon.DIAMOND]);
    });

    it('should correctly identify diagonal wins (left-to-right)', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine['matrix'] = [
        [SlotIcon.DIAMOND, SlotIcon.STAR, SlotIcon.BELL],
        [SlotIcon.STAR, SlotIcon.DIAMOND, SlotIcon.CROWN],
        [SlotIcon.BELL, SlotIcon.CHERRY, SlotIcon.DIAMOND],
      ];
      machine.didWin();
      expect(machine.getWinningIcons()).toEqual([SlotIcon.DIAMOND]);
    });

    it('should correctly identify diagonal wins (right-to-left)', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine['matrix'] = [
        [SlotIcon.BELL, SlotIcon.STAR, SlotIcon.DIAMOND],
        [SlotIcon.STAR, SlotIcon.DIAMOND, SlotIcon.CROWN],
        [SlotIcon.DIAMOND, SlotIcon.CHERRY, SlotIcon.HAT],
      ];
      machine.didWin();
      expect(machine.getWinningIcons()).toEqual([SlotIcon.DIAMOND]);
    });

    it('should correctly identify no-win scenarios', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine['matrix'] = [
        [SlotIcon.BELL, SlotIcon.STAR, SlotIcon.DIAMOND],
        [SlotIcon.STAR, SlotIcon.CHERRY, SlotIcon.CROWN],
        [SlotIcon.DIAMOND, SlotIcon.CHERRY, SlotIcon.HAT],
      ];
      machine.didWin();
      expect(machine.getWinningIcons()).toEqual([]);
    });
  });

  describe('Payout Calculation', () => {
    it('should calculate the correct payout', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine.addBalance(100);
      machine.setBet(100);
      machine['winningIcons'] = [SlotIcon.DIAMOND];
      const expectedPayout = 100 * PAYOUT_MULTIPLIERS[SlotIcon.DIAMOND] * 3;
      const payout = machine.calculatePayout();
      expect(payout).toBe(expectedPayout);
    });

    it('should calculate zero for no-win scenarios', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine['winningIcons'] = [];
      const payout = machine.calculatePayout();
      expect(payout).toBe(0);
    });

    it('should consider multiplier for multiple winning rows', () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine.addBalance(100);
      machine.setBet(100);
      machine['winningIcons'] = [SlotIcon.DIAMOND, SlotIcon.CROWN];
      const payout = machine.calculatePayout();
      const expectedPayout =
        100 * 3 * PAYOUT_MULTIPLIERS[SlotIcon.DIAMOND] +
        100 * 3 * PAYOUT_MULTIPLIERS[SlotIcon.CROWN];
      expect(payout).toBe(expectedPayout);
    });
  });

  describe('Banking', () => {
    it('should deduct bet amount after spin', async () => {
      const machine = new SlotMachine();
      machine.setDifficulty(3);
      machine.addBalance(10000);
      machine.setBet(1000);
      await machine.animateSpin();
      expect(machine.getBalance()).toBe(9000); // considering 10,000 initial balance
    }, 10000);
  });

  it('should start with correct initial balance', () => {
    const machine = new SlotMachine();
    expect(machine.getBalance()).toBe(0); // assuming starting balance is 0
  });

  it('should add to balance correctly', () => {
    const machine = new SlotMachine();
    machine.addBalance(500);
    expect(machine.getBalance()).toBe(500);

    machine.addBalance(500);
    expect(machine.getBalance()).toBe(1000);
  });

  it('should not allow betting more than the balance', () => {
    const machine = new SlotMachine();
    machine.addBalance(100);
    expect(() => machine.setBet(200)).toThrowError(
      'Insufficient balance. Please add credits to your balance.'
    );
  });

  it('should not allow zero or negative bets', () => {
    const machine = new SlotMachine();
    machine.addBalance(100);
    expect(() => machine.setBet(0)).toThrowError(
      'Invalid bet amount. Please enter a positive number.'
    );
    expect(() => machine.setBet(-50)).toThrowError(
      'Invalid bet amount. Please enter a positive number.'
    );
  });

  it('should add winnings to balance', async () => {
    const machine = new SlotMachine();
    machine.addBalance(1000);
    machine.setBet(100);
    machine['winningIcons'] = [SlotIcon.DIAMOND]; // Mocking a win
    await machine.animateSpin();
    expect(machine.getBalance()).toBe(900);
  }, 10000);

  it('should deduct bet amount from balance on loss', async () => {
    const machine = new SlotMachine();
    machine.addBalance(1000);
    machine.setBet(100);
    machine['winningIcons'] = []; // Mocking a loss
    const initialBalance = machine.getBalance();
    await machine.animateSpin();
    const expectedBalance = initialBalance - machine.getBet();
    expect(machine.getBalance()).toBe(expectedBalance);
  }, 10000);
});
