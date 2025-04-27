let currentQuestion = 0;
let score = 0;
const questions = document.querySelectorAll('.question');

function checkAnswer(btn) {
  const feedback = btn.parentElement.querySelector('.feedback');

  // Disable all buttons in current question
  btn.parentElement.querySelectorAll('button').forEach(button => button.disabled = true);

  if (btn.dataset.answer === "true") {
    feedback.textContent = '✅ Correct!';
    feedback.style.color = 'green';
    score++;
  } else {
    feedback.textContent = '❌ Oops! That’s not it.';
    feedback.style.color = 'red';
  }

  setTimeout(() => {
    questions[currentQuestion].classList.remove('active');
    currentQuestion++;
    if (questions[currentQuestion]) {
      questions[currentQuestion].classList.add('active');
    } else {
      showFinalScore();
    }
  }, 1500);
}

function showFinalScore() {
  const scoreDisplay = document.getElementById('final-score');
  scoreDisplay.innerHTML = `✅ Your score: ${score}/${questions.length - 1}`;
}

function restartQuiz() {
  questions[currentQuestion].classList.remove('active');
  currentQuestion = 0;
  score = 0;
  questions[currentQuestion].classList.add('active');

  const scoreDisplay = document.getElementById('final-score');
  if (scoreDisplay) {
    scoreDisplay.innerHTML = '';
  }
}