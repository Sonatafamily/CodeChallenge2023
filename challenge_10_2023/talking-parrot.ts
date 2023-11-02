function parrotResponse(word: string): string {
  if (word.length % 2 !== 0) {
    return '';
  }

  if (word.length > 20) {
    return 'Should not be more than 20 letters';
  }

  const onlyLowerCase = new RegExp(/^[a-z]+$/g).test(word);

  if (!onlyLowerCase) {
    return 'Use only lowercase';
  }

  const letters = word.split('');

  let finalWord = '';

  letters.forEach((value: string, currentIndex: number) => {
    if ((currentIndex + 1) % 2 === 0) {
      finalWord += value + letters[currentIndex - 1];
    }
  });

  return finalWord;
}

// Tests
const response = parrotResponse('helloo');
const anotherCorrect = parrotResponse('nice');
const emptyResponse = parrotResponse('world');

console.log('Correct: ', response);
console.log('Correct: ', anotherCorrect);
console.log('Wrong word:', emptyResponse);
