// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Quiz Questions
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
        question: "What was the highest-grossing film of the 2000s?",
        options: [
            "The Dark Knight",
            "Avatar",
            "Titanic",
            "The Lord of the Rings: The Return of the King"
        ],
        answer: "Avatar"
    },
    {
        question: "Which of these was a popular mobile phone in the 2000s?",
        options: [
            "iPhone 12",
            "Motorola Razr",
            "Samsung Galaxy S20",
            "Google Pixel 4"
        ],
        answer: "Motorola Razr"
    },
    {
        question: "What was the name of the popular music video game series that started in the 2000s?",
        options: [
            "Just Dance",
            "Dance Dance Revolution",
            "Guitar Hero",
            "Rock Band"
        ],
        answer: "Guitar Hero"
    }
];

// Quiz State Variables
let currentQuestion = 0;
let score = 0;
let quizActive = false;

// DOM Elements
const quizContainer = document.getElementById('quiz');
const quizPopup = document.getElementById('quiz-container');

// Initialize sticky button behavior
initStickyButton();

// Quiz Control Functions
function startQuiz() {
    currentQuestion = 0;
    score = 0;
    quizActive = true;
    quizPopup.style.display = 'block';
    displayQuestion();
}

function closeQuiz() {
    quizPopup.style.display = 'none';
    quizActive = false;
}

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

function checkAnswer(selectedIndex) {
    if (!quizActive) return;
    
    const buttons = quizContainer.querySelectorAll('.quiz-option');
    const correctIndex = quizQuestions[currentQuestion].options.indexOf(
        quizQuestions[currentQuestion].answer
    );
    
    // Disable all buttons after selection
    buttons.forEach(button => {
        button.disabled = true;
    });
    
    // Highlight selected answer
    if (selectedIndex === correctIndex) {
        buttons[selectedIndex].classList.add('correct');
        score++;
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[correctIndex].classList.add('correct');
    }
    
    // Move to next question after delay
    setTimeout(() => {
        currentQuestion++;
        displayQuestion();
    }, 1500);
}

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

// Sticky Button Animation
function initStickyButton() {
    const stickyBtn = document.querySelector('.sticky-quiz-btn');
    
    window.addEventListener('scroll', function() {
        // Add subtle "bounce" effect on scroll
        if (window.scrollY > 100) {
            stickyBtn.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                stickyBtn.style.transform = 'translateY(0)';
            }, 200);
        }
        
        // Pulse animation every 20 seconds to attract attention
        if (window.scrollY > 300 && !quizActive) {
            setTimeout(() => {
                stickyBtn.style.animation = 'pulse 1.5s ease-in-out';
                setTimeout(() => {
                    stickyBtn.style.animation = '';
                }, 1500);
            }, 20000); // 20 second delay
        }
    });
}

// Add to global scope for HTML onclick attributes
window.startQuiz = startQuiz;
window.closeQuiz = closeQuiz;
window.checkAnswer = checkAnswer;