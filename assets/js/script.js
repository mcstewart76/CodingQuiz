const startButton = document.getElementById("start-btn")
const startPage = document.getElementById("starter")
const questionContainer = document.getElementById("questionaire")
const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answers")
const timeEl = document.getElementById("timer")
const alldoneEl = document.getElementById("allDone")
const correctH3El = document.getElementById("correctH3")
const correctEl = document.getElementById("correct")
const finalEl = document.getElementById("finalscore")
const submitEl = document.getElementById("submit")
const allDoneH1El = document.getElementById("allDoneH1")

let storedHighscores = [];
var initialsEl = document.getElementById("initials")
let storedEl
let lastquestion
var secondsLeft = 90;
let currentQuestion

startButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log("quiz has started")
    startPage.classList.add("hide")
    questionContainer.classList.remove("hide")
    currentQuestion = 0
    setTimer()
    nextQuestion()
}

function nextQuestion() {
    if (questions.length > currentQuestion) {
        showCurrentQuestion(questions[currentQuestion])


    } else {
        questionContainer.classList.add("hide")
        //  alldoneEl.classList.remove("hide")
        // correctEl.classList.add("hide")
        // timeEl.classList.add("hide")
        lastquestion = true;

    }

    console.log("next question que'ed")
}
function showCurrentQuestion(question) {
    questionEl.innerText = question.question
    console.log("showing next question")
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.right) {
            //button.dataset.right = answer.right
            button.addEventListener('click', selectedAnswerTrue)

        } else {
            button.addEventListener('click', selectedAnswerFalse)

        }
        answersEl.appendChild(button)

    });
}
function selectedAnswerTrue() {
    console.log("answer was true?")
    currentQuestion++
    resetAnswers()
    correctEl.classList.remove("hide")
    correctH3El.textContent = "Correct"
    console.log(secondsLeft + " seconds left")
    setTimeout(function () {
        correctEl.classList.add("hide")
    }, 700);
    nextQuestion()
}
function selectedAnswerFalse() {
    console.log("answer was false?")
    currentQuestion++
    resetAnswers()
    correctEl.classList.remove("hide")
    correctH3El.textContent = "Incorrect"
    console.log(secondsLeft + "seconds left")
    setTimeout(function () {
        correctEl.classList.add("hide")
    }, 700);
    secondsLeft = secondsLeft - 10;
    nextQuestion()
}
function resetAnswers() {
    answersEl.innerHTML = "";
}

function setTimer() {
    timeEl.classList.remove("hide")
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            displayScore()
        }
        if (lastquestion === true) {
            clearInterval(timerInterval);
            displayScore()
        }
    }
        , 1000);
}

function displayScore() {
    finalEl.textContent = " " + secondsLeft;

    alldoneEl.classList.remove("hide")
    correctEl.classList.add("hide")
    timeEl.classList.add("hide")
    submitEl.addEventListener('click', recordScore)
}
function recordScore(event) {
    event.preventDefault();
    console.log(event)
    console.log("submitted?")
    initialsEl = initialsEl.value;
    storedHighscores = {"initials": initialsEl, "score" : secondsLeft };

    var temp = getLocalContent();
    resultArray = [];
    if(temp.length > 0){
        resultArray = temp;
        resultArray.push(storedHighscores)
    }else{
        resultArray.push(storedHighscores)
    }

    localStorage.setItem("Results", JSON.stringify(resultArray))
    // localStorage.setItem("Highscore", initialsEl)
    // localStorage.setItem("Seconds", secondsLeft)
    allDoneH1El.innerHTML = "Highscore Submitted!"
    setTimeout(function () {
        window.location.replace("/CodingQuiz/highscore.html")
        console.log("newpage")
        
    }, 700);
    
}
function getLocalContent(){
 var highscore = JSON.parse(localStorage.getItem("Results")) || [];
 console.log(highscore)
 return highscore
}

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", right: false },
            { text: "booleans", right: false },
            { text: "alerts", right: true },
            { text: "numbers", right: false }
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____. ",
        answers: [
            { text: "quotes", right: false },
            { text: "curly brackets", right: false },
            { text: "parentheses", right: true },
            { text: "square brackets", right: false }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            { text: "numbers and strings", right: false },
            { text: "other arrays", right: false },
            { text: "booleans", right: false },
            { text: "all of the above", right: true }
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            { text: "commas", right: false },
            { text: "curly brackets", right: false },
            { text: "quotes", right: true },
            { text: "parentheses", right: false }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "Javascript", right: false },
            { text: "terminal/bash", right: false },
            { text: "for loops", right: false },
            { text: "console.log", right: true }
        ]
    },
]