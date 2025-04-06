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
    score = 0,
    count = 10,
    countdown;

function startQuiz(){
    if (playerName.value != ""){
        startScreen.style.display = "none";
        playground.style.display = "block";
    } else {
        playerName.style.border = "2px solid red";
    }
}