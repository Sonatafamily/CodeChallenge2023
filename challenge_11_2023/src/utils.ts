/**
 * @summary Helper to know if character is valid
 * @param character string 
 * @returns true if is character is uppercase or a number and false if is not
 */

export const isValidCharacter =  (character: string): boolean => {
  if (character.match(/^[A-Z0-9]+$/)) {
    return true;
  }
  return false;
}