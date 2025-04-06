const playerName = document.getElementById("playerName"),
    startScreen = document.querySelector(".startScreen"),
    playground = document.querySelector(".playground"),
    endScreen = document.querySelector(".endScreen"),
    questionCount = document.getElementById("questionCount"),
    questionTimer = document.getElementById("question"),
    question = document.getElementById("question"),
    quizOptions = document.getElementById("quizOptions"),
    loader = document.querySelector(".loader"),
    finalScore = document.querySelector(".finalScore"),
    resultPlayerName = document.getElementById("playerName");

let arrayQuestion = [],
    questionIndex = 0,
    score = 0,
    count = 10,
    countdown;

function startQuiz(){
    if (playerName.value != ""){
        startScreen.style.display = "none";
        playground.style.display = "block";
        loader.style.display="block";
        loadQuestion();

    } else {
        playerName.style.border = "2px solid red";
    }
}

let QuizURL="https://opentdb.com/api.php?amount=10&category=23&difficulty=easy"


function loadQuestion() {
    fetch(QuizURL)
        .then((response) => response.json())
        .then((data) => {
            arrayQuestion=data.results;
            displayQuestion(arrayQuestion[questionIndex]);
        });
}

function displayQuestion(questionData){
    console.log(questionData);
    question.innerHTML = questionData.question;
    questionCount.innerHTML = questionIndex + 1;
    loadAnswers(questionData)
}

function loadAnswers(questionData){
    quizOptions.innerHTML ="";
    let answers = [...questionData.incorrect_answers,
        questionData.correct_answer];
    answers=answers.sort(() =>Math.random()-0.5);

    answers.forEach((answer) =>{
        let option = document.createElement("li");
        option.innerHTML = answer;
        option.addEventListener("click", ()=>{
            checkAnswer(option, answers, questionData.correct_answer)
        })

        quizOptions.append(option)
    });

    loader.style.display="none";
}

function checkAnswer(answerOptions, answers, correctAnswer){
    console.log(answerOptions, answers, correctAnswer);
    let correctElement;

    answers.forEach((answer)=>{
        if (answer===correctAnswer){
            correctElement = [...quizOptions.childNodes].find(
                (li) => li.innerText === correctAnswer
            );
        }
    });

    quizOptions.childNodes.forEach((li) => {
        li.classList.add("disable");
    });

    if(htmlDecode(correctAnswer)=== htmlDecode(answerOptions.innerText)){
        answerOptions.classList.add("correct");
    }else{
         answerOptions.classList.add("Incorrect");
         correctElement.classList.add("correct");
    }

    console.log(correctElement);
}


nextButton.addEventListener("click",() => {
    if(nextButton.innerText ==="NEXT") {
        questionIndex = questionIndex + 1;
        displayQuestion(arrayQuestion[questionIndex]);
    } else{
        showAnswer();
    }

    if(questionIndex === 9){
        nextButton.innerText = "SUBMIT";
    }
});

function showAnswer() {}
function  htmlDecode(html) {
    var txt = document.createElement("textarea")
    txt.innerHTML = html;
    return txt.value;
}