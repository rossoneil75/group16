// Get all the button elements
const buttons = document.querySelectorAll('.button');
const textArea = document.querySelector('.text');
const nameElements = document.querySelectorAll('.name');

// Add event listeners to the buttons
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Example: Update the text area when a button is clicked
        textArea.textContent = `Button ${index + 1} Clicked!`;

        // Example: Update the corresponding name when a button is clicked
        if (nameElements[index]) {
            nameElements[index].textContent = `Clicked Name ${index + 1}`;
        }
    });
});

// You can add more JavaScript here to handle other interactions