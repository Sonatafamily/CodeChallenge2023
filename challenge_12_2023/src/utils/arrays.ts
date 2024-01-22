/**
 * Shuffles an array and returns a new array with the shuffled elements
 * @param array - array to shuffle
 * @param quantity - number of elements to return
 * @returns {T[]}
 * @example
 * shuffleArray([1, 2, 3, 4, 5]) // [3, 1, 5, 2, 4]
 * shuffleArray([1, 2, 3, 4, 5], 2) // [3, 1]
 * shuffleArray([1, 2, 3, 4, 5], 6) // [3, 1, 5, 2, 4]
 */
export function shuffleArray<T>(array: T[], quantity?: number): T[] {
  // Creating a copy of the input array to avoid modifying the original
  const arrayCopy: T[] = [...array];
  const shuffledArray: T[] = [];

  while (arrayCopy.length > 0) {
    const randomIndex: number = Math.floor(Math.random() * arrayCopy.length);
    shuffledArray.push(arrayCopy[randomIndex]);
    arrayCopy.splice(randomIndex, 1);
  }

  if (quantity) {
    return shuffledArray.slice(0, quantity);
  }
  return shuffledArray;
}
