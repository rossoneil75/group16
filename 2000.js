// scrolls smoothly to the section with the given id
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// list of quiz questions with options and answers
const quizQuestions = [
    {
        question: "What major global event happened on September 11, 2001?",
        options: [
            "The launch of Facebook",
            "The September 11 terrorist attacks",
            "The release of the first iPhone",
            "The start of the Iraq War"
        ],
        answer: "The September 11 terrorist attacks"
    },
    {
        question: "Which social media platform was launched in 2004?",
        options: [
            "Twitter",
            "Facebook",
            "Instagram",
            "TikTok"
        ],
        answer: "Facebook"
    },
    {
        question: "What triggered the global financial crisis in the late 2000s?",
        options: [
            "Dot-com bubble burst",
            "Housing market crash",
            "Oil shortage",
            "High interest rates"
        ],
        answer: "Housing market crash"
    },
    {
        question: "Who was elected as the first African-American U.S. president in 2008?",
        options: [
            "George W. Bush",
            "Al Gore",
            "Barack Obama",
            "Joe Biden"
        ],
        answer: "Barack Obama"
    },
    {
        question: "Which of these artists rose to fame during the 2000s?",
        options: [
            "Justin Timberlake",
            "Adele",
            "Taylor Swift",
            "Olivia Rodrigo"
        ],
        answer: "Justin Timberlake"
    },
    {
        question: "Which clothing brand was iconic in 2000s fashion trends?",
        options: [
            "Supreme",
            "Juicy Couture",
            "Zara",
            "H&M"
        ],
        answer: "Juicy Couture"
    },
    {
        question: "Which of the following was a popular snack in the 2000s?",
        options: [
            "Avocado toast",
            "Bagel Bites",
            "Acai bowls",
            "Plant-based burgers"
        ],
        answer: "Bagel Bites"
    },
    {
        question: "Who was the famous swimmer that dominated the 2008 Olympics?",
        options: [
            "Usain Bolt",
            "Michael Phelps",
            "Ryan Lochte",
            "Tom Daley"
        ],
        answer: "Michael Phelps"
    },
    {
        question: "What phone was a 2000s style icon before smartphones took over?",
        options: [
            "iPhone 12",
            "Motorola Razr",
            "Blackberry Key2",
            "Nokia Lumia"
        ],
        answer: "Motorola Razr"
    },
    {
        question: "Which operating system became hugely popular in the 2000s?",
        options: [
            "Windows Vista",
            "macOS Big Sur",
            "Windows XP",
            "Linux Mint"
        ],
        answer: "Windows XP"
    }
];

// variables to keep track of quiz progress
let currentQuestion = 0;
let score = 0;
let quizActive = false;

// get elements from the page
const quizContainer = document.getElementById('quiz');
const quizPopup = document.getElementById('quiz-container');

// start the sticky button animation
initStickyButton();

// starts the quiz and shows the first question
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    quizActive = true;
    quizPopup.style.display = 'block';
    displayQuestion();
}

// hides the quiz popup and ends the quiz
function closeQuiz() {
    quizPopup.style.display = 'none';
    quizActive = false;
}

// shows the current question and options
function displayQuestion() {
    if (currentQuestion < quizQuestions.length) {
        quizContainer.innerHTML = `
            <h3>Question ${currentQuestion + 1}: ${quizQuestions[currentQuestion].question}</h3>
            ${quizQuestions[currentQuestion].options.map((option, index) => `
                <button onclick="checkAnswer(${index})" class="quiz-option">
                    ${option}
                </button>
            `).join('')}
        `;
    } else {
        endQuiz();
    }
}

// checks if the selected answer is correct
function checkAnswer(selectedIndex) {
    if (!quizActive) return;
    
    const buttons = quizContainer.querySelectorAll('.quiz-option');
    const correctIndex = quizQuestions[currentQuestion].options.indexOf(
        quizQuestions[currentQuestion].answer
    );
    
    // disable all options after one is clicked
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // show feedback (correct/incorrect)
    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        score++;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
    }
    
    // go to the next question after a short pause
    setTimeout(() => {
        currentQuestion++;
        displayQuestion();
    }, 1500);
}

// shows the final score and buttons to restart or close
function endQuiz() {
    quizContainer.innerHTML = `
        <div class="quiz-result">
            <h3>Quiz Complete!</h3>
            <p>Your score: ${score}/${quizQuestions.length}</p>
            <button onclick="startQuiz()" class="quiz-restart-btn">Try Again</button>
            <button onclick="closeQuiz()" class="quiz-close-btn">Close</button>
        </div>
    `;
}

// makes the quiz button animate when scrolling
function initStickyButton() {
    const stickyBtn = document.querySelector('.sticky-quiz-btn');
    
    window.addEventListener('scroll', function() {
        // small bounce effect when scrolling down
        if (window.scrollY > 100) {
            stickyBtn.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                stickyBtn.style.transform = 'translateY(0)';
            }, 200);
        }
        
        // pulse effect every 20 seconds to get attention
        if (window.scrollY > 300 && !quizActive) {
            setTimeout(() => {
                stickyBtn.style.animation = 'pulse 1.5s ease-in-out';
                setTimeout(() => {
                    stickyBtn.style.animation = '';
                }, 1500);
            }, 20000); // wait 20 seconds before playing animation
        }
    });
}

// allows the quiz functions to be called from html
window.startQuiz = startQuiz;
window.closeQuiz = closeQuiz;
window.checkAnswer = checkAnswer;