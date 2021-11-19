const startButton = document.getElementById("start-btn")
const startPage = document.getElementById("starter")
const questionContainer = document.getElementById("questionaire")
const questionEl = document.getElementById("question")
const answersEl = document.getElementById("answers")
let currentQuestion

startButton.addEventListener('click', startQuiz)

function startQuiz() {
console.log("quiz has started")
startPage.classList.add("hide")
questionContainer.classList.remove("hide")
currentQuestion = 0
nextQuestion()
}

function nextQuestion() {
    showCurrentQuestion(questions[currentQuestion])
    console.log("next question que'ed")
}
function showCurrentQuestion(question){
    questionEl.innerText = question.question
    console.log("showing next question")
    question.answers.forEach(answer => {
       const button = document.createElement('button') 
       button.innerText = answer.text
       button.classList.add('btn')
       answersEl.appendChild(button)
    });
}

function setAnswer() {

}

const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text: "strings", right: false },
            {text: "booleans", right: false },
            {text: "alerts", right: true },
            {text: "numbers", right: false }
        ]
    },
    {
        question: "The condition in an if / else statement is enclosed within ____. ",
        answers: [
            {text: "quotes", right: false },
            {text: "curly brackets", right: false },
            {text: "parentheses", right: true },
            {text: "square brackets", right: false }
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        answers: [
            {text: "numbers and strings", right: false },
            {text: "other arrays", right: false },
            {text: "booleans", right: false },
            {text: "all of the above", right: true }
        ]
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            {text: "commas", right: false },
            {text: "curly brackets", right: false },
            {text: "quotes", right: true },
            {text: "parentheses", right: false }
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            {text: "Javascript", right: false },
            {text: "terminal/bash", right: false },
            {text: "for loops", right: false },
            {text: "console.log", right: true }
        ]
    },
]