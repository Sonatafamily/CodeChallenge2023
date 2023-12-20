/**
 * Capitalize the first letter of a string
 * @param str - string to capitalize
 * @returns {string}
 * @example
 * capitalize('hello') // 'Hello'
 * capitalize('pokemon') // 'Pokemon'
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Capitalize the first letter of each word in a string
 * @param name - string to capitalize
 * @returns {string}
 * @example
 * capitalizeNames('hello-world') // 'Hello World'
 * capitalizeNames('pokemon-are-awesome') // 'Pokemon Are Awesome'
 */
export function capitalizeNames(name: string) {
  return name
    .split('-') // Split the string into an array of words
    .map((word) => capitalize(word)) // Capitalize the first letter of each word
    .join(' ');
}
