import { calculateScore, checkGuess, getHighScore, MAX_NUMBER, MIN_NUMBER, resetGame, saveHighScore } from "./gameLogic.js";
import { clearInputField, toggleButtonState, updateTextContent } from "./ui.js";

let attempts = 1;

// Initialize the game
function startGame() {
    resetGame();
    attempts = 1;
    const highScore = getHighScore();
    updateTextContent('h1', '¡Adivina el número secreto!');
    updateTextContent('p', `Indica un número del ${MIN_NUMBER} al ${MAX_NUMBER}`);

}

function handleGuess() {
    const userGuess = parseInt(document.getElementById('userValue').value);

    if (isNaN(userGuess) || userGuess < MIN_NUMBER || userGuess > MAX_NUMBER) {
        updateTextContent('p', 'Por favor, introduce un número válido.');
        return;
    }

    const result = checkGuess(userGuess);

    if (result === 'correct') {
        const score = calculateScore(attempts - 1);
        saveHighScore(score);
        const highScore = getHighScore();

        updateTextContent('p', `Acertaste el número en ${attempts} ${(attempts === 1) ? 'intento' : 'intentos'}, tu puntaje es: ${score}`);
        if (highScore !== 0) {
            updateTextContent('.texto__puntaje', `Puntaje más alto: ${highScore}`)
        }
        toggleButtonState('#restart', false);
    } else {
        if (result === 'too high') {
            updateTextContent('p', 'El número secreto es menor');
        } else {
            updateTextContent('p', 'El número secreto es mayor');
        }
        attempts++;
        clearInputField('#userValue')
    }

    return;
}

function handleReset() {
    startGame();
    clearInputField('#userValue');
    toggleButtonState('#restart', true);
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container__boton').addEventListener('click', handleGuess);
    document.querySelector('#restart').addEventListener('click', handleReset);
    startGame();
})
