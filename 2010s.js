console.log("Page loaded");

document.addEventListener("DOMContentLoaded", function () {
    const quizPopup = document.getElementById('quizPopup');
    const openBtn = document.getElementById('openQuizBtn');
    const closeBtn = document.getElementById('closeQuizBtn');
    const quiz = document.getElementById('quiz');
    const questionText = document.getElementById('questionText');
    const answersDiv = document.getElementById('answers');
    const nextBtn = document.getElementById('nextBtn');
    const resultDiv = document.getElementById('result');
    const scoreText = document.getElementById('scoreText');
  
    let currentQuestion = 0;
    let score = 0;
  
    const questions = [
      {
        question: "What is the capital of France?",
        answers: ["London", "Paris", "Berlin"],
        correct: "Paris"
      },
      {
        question: "Which platform popularized short video content in the 2010s?",
        answers: ["TikTok", "Facebook", "Spotify"],
        correct: "TikTok"
      },
      {
        question: "Which artist released the hit 'Rolling in the Deep'?",
        answers: ["Rihanna", "Adele", "Katy Perry"],
        correct: "Adele"
      }
    ];
  
    openBtn.onclick = () => {
      quizPopup.style.display = 'block';
      loadQuestion();
    };
  
    closeBtn.onclick = () => {
      quizPopup.style.display = 'none';
    };
  
    window.onclick = e => {
      if (e.target === quizPopup) quizPopup.style.display = 'none';
    };
  
    function loadQuestion() {
      const q = questions[currentQuestion];
      questionText.textContent = q.question;
      answersDiv.innerHTML = "";
      answersDiv.classList.add("fade");
  
      q.answers.forEach(answer => {
        const label = document.createElement("label");
        label.innerHTML = `
          <input type="radio" name="answer" value="${answer}">
          ${answer}
        `;
        answersDiv.appendChild(label);
        answersDiv.appendChild(document.createElement("br"));
      });
  
      nextBtn.style.display = "none";
    }
  
    answersDiv.addEventListener("change", () => {
      nextBtn.style.display = "inline-block";
    });
  
    nextBtn.onclick = () => {
      const selected = document.querySelector('input[name="answer"]:checked');
      if (!selected) return;
  
      if (selected.value === questions[currentQuestion].correct) {
        score++;
      }
  
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        showResult();
      }
    };
  
    function showResult() {
      quiz.style.display = "none";
      resultDiv.style.display = "block";
      scoreText.textContent = `You got ${score} out of ${questions.length} correct.`;
    }
  });