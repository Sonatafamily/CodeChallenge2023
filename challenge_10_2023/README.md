# Talking Parrot

To run this progam just run:
```bash
npx ts-nodetalking-parrot.ts
```

Edit the code to insert different cases to test.

## Challenge description

### Background:
You’ve just acquired a digital parrot. This parrot is a bit peculiar; it doesn’t mimic your words directly but has a specific pattern to its responses.

### Challenge:
* The parrot only responds when you say words with an even number of letters.
* When you say a word with an even number of letters, the parrot repeats the word but reverses every two letters. For example, if you say “hello”, the parrot says “ehlloo”.

* For words with an odd number of letters, the parrot remains silent.

### Task:
Implement a function, parrot_response(word), that takes in a word and returns the parrot’s response.

### Constraints:
* The word given as input will have at most 20 characters.

* The word will only consist of lowercase letters.

### Test Cases:
* parrot_response('helloo') should return 'ehlloo'.
* parrot_response('world') should return '' (empty string, since “world” has an odd number of letters).
