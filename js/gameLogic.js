// Constants
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 10;
export const STARTING_TRIES = 1;

// Variables
let secretNumber = 0;
let numbersGuessed = [];
let attempts = 0;

// Generate a random number between MIN_NUMBER and MAX_NUMBER
export function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random() * MAX_NUMBER) + MIN_NUMBER;

    // Ensure that the number hasn´t been guessed before
    if (numbersGuessed.includes(generatedNumber)) {
        return generateSecretNumber();
    }

    numbersGuessed.push(generatedNumber);
    return generatedNumber;
}

// Reset the game
export function resetGame() {

    attempts = STARTING_TRIES;
    numbersGuessed = [];
    secretNumber = generateSecretNumber();
}

// Check if the player's guess is correct
export function checkGuess(userGuess) {
    if (userGuess === secretNumber) {
        return 'correct';
    } else if (userGuess > secretNumber) {
        return 'too high';
    } else {
        return 'too low';
    }
}

