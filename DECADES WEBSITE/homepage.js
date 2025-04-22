// Select all buttons
const buttons = document.querySelectorAll('.button');

// Define the file names corresponding to each button
const files = [
    "group16/1970_MichaelGibson.html",
    "1980's Decade.html",
    "group16/2000.html",
    "group16/2010s.html",
];

// Add click event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Redirect to the corresponding HTML file
        window.location.href = files[index];
    });
});
