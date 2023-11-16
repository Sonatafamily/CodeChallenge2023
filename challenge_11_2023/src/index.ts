import { isValidCharacter } from "./utils"

/**
 * @summary Pyramid builder for Egyptian cat.
 * This will request a number of 'levels' for the pyramid, a 'character' to fill levels with and the 'name' of the Egyptian cat
 * @param height 
 * @param character 
 * @param name 
 * @returns String | Error
 */

const pyramidBuilder = (levels: number, character: string | number, name: string): string | Error => {
  
try {
  if (typeof levels !== "number") throw("Error: Please enter a number")
  if (name.length > levels) throw("Error: Cat's name doesn't fit in any pyramid line");
  if (typeof character === "string") {
      if (character.length > 1) throw("Error: Just enter one character")
      if (character === "") throw ("Error: Empty character")
      if (!isValidCharacter(character)) throw ("Error: Character should be uppercase or a number")
  }
  let stringCharacter = String(character); 
  let pyramid = ""
  for (let i = 0; i <= levels; i ++) {
      let characters = name.length === i ? `${name}\n` : `${stringCharacter.repeat(1 * i)}\n`
      pyramid = pyramid + characters
  }
  return pyramid
  
} catch(error) {
  return error as Error
}
}

const pyramid = pyramidBuilder(16, "S", "SONATAFY");

console.log(pyramid);