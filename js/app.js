import { checkGuess, MAX_NUMBER, MIN_NUMBER, resetGame } from "./gameLogic.js";
import { clearInputField, toggleButtonState, updateTextContent } from "./ui.js";

let attempts = 0;

// Initialize the game
function startGame() {
    resetGame();
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
        updateTextContent('p', `Acertaste el número en ${attempts} ${(attempts === 1) ? 'vez' : 'veces'}`);
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
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.container__boton').addEventListener('click', handleGuess);
    document.querySelector('#restart').addEventListener('click', startGame);
    startGame();  // Initialize the game when it loads
})
