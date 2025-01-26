// Constants
export const MIN_NUMBER = 1;
export const MAX_NUMBER = 10;
export const STARTING_TRIES = 1;

// Variables
let secretNumber = 0;
let numbersGuessed = [];
let attempts = 0;
let highScore = 0;

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

// Calculate the scored based on the attempts
export function calculateScore(attempts) {
    const maxScore = 100;
    return Math.max(maxScore - attempts * 10, 0); // 10 points less each attempt
}

// Get the high score from localStorage
export function getHighScore() {
    const storedScore = localStorage.getItem('highScore');
    return storedScore ? parseInt(storedScore) : 0;
}

// Save the high score on localStorage
export function saveHighScore(score) {
    if (score > highScore) {
        highScore = score;
        localStorage.setItem('highScore', highScore);
    }
}

