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

