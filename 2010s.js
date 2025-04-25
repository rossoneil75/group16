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

  function updateContent(topic) {
    const content = topicsContent[topic];
    if (!content) return;
  
    // Clear placeholder message if it's still there
    const placeholder = document.getElementById("placeholderMessage");
    if (placeholder) {
      placeholder.remove();
    }
  
    mainContent.innerHTML = ""; // Clear any existing dynamic content
  
    content.forEach(entry => {
      const section = document.createElement("section");
      section.className = "box media-text";
  
      section.innerHTML = `
        <div class="media">${entry.media}</div>
        <div class="text">${entry.text}</div>
      `;
      mainContent.appendChild(section);
    });
  }

  const topicsContent = {
    history: [
      {
        media: "<img src='img/brexit_flag.jpg' style='width:100%; border-radius:8px;'>",
        text: "The early 2010s saw citizens leveraging social media to spark political change — a first in global history."
      },
      {
        media: "Events like Brexit and the election of Donald Trump marked major political shifts in the West.",
        text: "Populism rose worldwide, creating deep political divisions and redefining global alliances."
      }
    ],
    music: [
      {
        media: "Streaming services like Spotify and Apple Music changed how people listened to music.",
        text: "By the end of the decade, digital streaming had overtaken physical and download sales completely."
      },
      {
        media: "Artists like Drake, Taylor Swift, Kendrick Lamar, and Beyoncé dominated charts and cultural conversations.",
        text: "Genre-blending became the norm, with hip hop, pop, indie, and EDM frequently overlapping."
      }
    ],
    politics: [
      {
        media: "Social media became a battleground for political influence and misinformation.",
        text: "Platforms like Twitter and Facebook were instrumental in both activism and manipulation."
      },
      {
        media: "Movements like Black Lives Matter and #MeToo gained worldwide attention.",
        text: "Grassroots political activism surged, often fueled by viral content and citizen-led media."
      }
    ],
    fashion: [
      {
        media: "Streetwear took center stage with brands like Supreme and Off-White becoming cultural icons.",
        text: "Collaborations between luxury designers and streetwear brands defined the fashion scene."
      },
      {
        media: "The 2010s revived 90s styles and introduced athleisure to the mainstream.",
        text: "Celebrities and influencers drove fashion trends more than traditional magazines or runways."
      }
    ],
    food: [
      {
        media: "Avocado toast, craft coffee, and poke bowls became food staples of the decade.",
        text: "The visual appeal of food exploded thanks to Instagram, changing how restaurants plated meals."
      },
      {
        media: "Plant-based eating gained traction, and brands like Beyond Meat hit the mainstream.",
        text: "Veganism and health-conscious trends shifted food culture globally."
      }
    ],
    technology: [
      {
        media: "The rise of smartphones, apps, and voice assistants reshaped daily life.",
        text: "By 2019, smartphone usage and app dependency reached all-time highs."
      },
      {
        media: "AI, automation, and smart devices laid the groundwork for the 2020s tech boom.",
        text: "Digital privacy became a growing concern as companies collected massive amounts of data."
      }
    ],
    sports: [
      {
        media: "LeBron James, Serena Williams, Usain Bolt, and other GOATs dominated headlines.",
        text: "The 2010s were a golden age for record-breaking performances and superstar rivalries."
      },
      {
        media: "Social issues became part of the game, with athletes like Colin Kaepernick taking a stand.",
        text: "The lines between sports, politics, and social justice blurred like never before."
      }
    ]
  };
  
  const topicButtons = document.querySelectorAll("button[data-topic]");
  const mainContent = document.querySelector(".main-content");
  
  topicButtons.forEach(button => {
    button.addEventListener("click", () => {
      const topic = button.dataset.topic;
      updateContent(topic);
    });
  });