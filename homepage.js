const buttons = document.querySelectorAll('.button1, .button2, .button3, .button4, .button5');


// Define the file names corresponding to each button
const files = [
    "1970.html",
    "1980's Decade.html",
    "1990s Decade.html",
    "2000.html",
    "2010s.html",
];

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Redirect to the correspoding HTML file
        window.location.href = files[index];
    });
});
