// Select all buttons
const buttons = document.querySelectorAll('.button');

// Define the file names corresponding to each button
const files = [
    "1970s.html",
    "1980's Decade.html",
    "1990s Decade.html",
    "2000s Decade.html"
];

// Add click event listener to each button
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Redirect to the correspoding HTML file
        window.location.href = files[index];
    });
});
