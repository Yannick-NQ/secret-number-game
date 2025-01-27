// Update the text content of a specific element
export function updateTextContent(elementSelector, text) {
    const element = document.querySelector(elementSelector);
    if (element) {
        element.textContent = text;
    } else {
        console.error(`Element not found: ${elementSelector}`);
    }
}

// Enable or disable a button
export function toggleButtonState(buttonSelector, isDisabled) {
    const button = document.querySelector(buttonSelector);
    if (button) {
        button.disabled = isDisabled;
    } else {
        console.error(`Button not found: ${buttonSelector}`);
    }
}

// Clear the input field
export function clearInputField(inputSelector) {
    document.querySelector(inputSelector).value = '';
}

export function restartPageBackground() {
    const gameContainer = document.querySelector('body');
    gameContainer.style.background = 'linear-gradient( #1354a5 0%,#041832 33.33%, #041832 66.67%, #01080e 100%)';
}

// update the gradient body background color by the difference
export function updatePageBackgroundColor(difference) {
    const gameContainer = document.querySelector('body');

    if (difference > 5) {
        // Frío (alejado) - Azul claro a Azul oscuro
        gameContainer.style.background = 'linear-gradient(rgba(238, 79, 40, 0.9) 0%,rgb(153, 47, 14) 33.33%, rgb(50, 15, 4) 66.67%, rgb(50, 15, 4) 100%';
    } else if (difference > 2) {
        // Tibio (moderadamente cerca) - Amarillo a Naranja
        gameContainer.style.background = 'linear-gradient(rgba(255, 251, 39, 0.9) 0%,rgb(175, 196, 16) 33.33%, rgb(45, 50, 4) 66.67%, rgb(45, 50, 4) 100%';
    } else if (difference > 0) {
        // Caliente (muy cerca) - Verde a Rojo
        gameContainer.style.background = 'linear-gradient(rgba(44, 201, 141, 0.9) 0%,rgb(3, 84, 99) 33.33%, rgb(4, 43, 50) 66.67%, rgb(4, 43, 50) 100%';
    } else {
        gameContainer.style.background = 'linear-gradient(rgba(9, 255, 0, 0.9) 0%,rgb(26, 114, 8) 33.33%,rgb(12, 50, 4) 66.67%, rgb(12, 50, 4) 100%';
    }
}

export function updateImageSource(imageSelector, state) {
    const imageElement = document.querySelector(imageSelector);
    if (imageElement) {
        const images = {
            hello: 'img/bender_hello.png',
            wrong: 'img/bender.png',
            close: 'img/bender_ok.png',
            correct: 'img/bender_party.png',
        };
        imageElement.src = images[state] || images.hello;
    } else {
        console.error(`Image element not found: ${imageSelector}`);
    }
}
