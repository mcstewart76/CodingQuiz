const goBack = document.getElementById("back")
const cleanScores = document.getElementById("clearbtn")
const scoreList = document.getElementById("score-list")
const highscoreList = document.getElementById("highscore-list")

var result = JSON.parse(localStorage.getItem("Results")) || [];
showCurrentHighscore(result)

cleanScores.addEventListener('click', cleanScoreFun)
goBack.addEventListener('click', goBackPage)
//function to for go back button to restart quiz
function goBackPage(){
    console.log("clickcap")
    window.location.replace("/CodingQuiz/index.html")
}
//clears local storage and 
function cleanScoreFun(){
    console.log("clearingscores")
    localStorage.removeItem("Results")
        scoreList.innerHTML = ""
}

function showCurrentHighscore(result) {
    let listItem
    result.forEach(item => {
        listItem = document.createElement('li')
        listItem.innerText = item.initials + " - " + item.score;
        listItem.classList.add('score-names')
        highscoreList.appendChild(listItem)
    });
    
}
