import battle from './battle';
import { shuffleArray } from './utils/arrays';
import { generateTrainers } from './utils/generators';

// Generate trainers
const generatedTrainers = generateTrainers();

// Shuffle trainers
const trainers = shuffleArray(generatedTrainers, 2);

// Start battle
battle(trainers[0], trainers[1]);
