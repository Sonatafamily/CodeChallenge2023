/**
 * @description Enum of the icons that can appear on the slot machine.
 * @enum {string} SlotIcon - The icons that can appear on the slot machine.
 */
export enum SlotIcon {
  DIAMOND = '💎',
  STAR = '⭐',
  DOLLAR = '💵',
  SEVEN = '7️⃣ ',
  CHERRY = '🍒',
  LEMON = '🍋',
  BAR = '🍫',
  BELL = '🔔',
  CROWN = '👑',
  HAT = '🎩',
}

/**
 * @description Calculate payout multipliers for each icon based on their position in the enum.
 * Higher icons get a higher multiplier.
 * @returns A record of payout multipliers for each icon.
 */
export const PAYOUT_MULTIPLIERS: Record<SlotIcon, number> = Object.values(
  SlotIcon
)
  .reverse()
  .reduce<{ [icon in SlotIcon]: number }>(
    (acc: Record<SlotIcon, number>, icon: SlotIcon, index: number) => {
      acc[icon as SlotIcon] = index + 1;
      return acc;
    },
    {} as { [icon in SlotIcon]: number }
  );
