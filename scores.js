var b5 = document.querySelector("#b5")
var highScores = document.querySelector("#highScores")
var highNames = document.querySelector("#highNames")

var finalScore = JSON.parse(localStorage.getItem("finalScore"))

b5.addEventListener("click", function() {
    window.location.href = "index.html"
});

function gameId() {
    localStorage.getItem(finalObj)
}

function highScore() {
    alert("Congrats on your score of " + finalScore)
    finalName = prompt("Enter your name")
    localStorage.setItem("finalName", JSON.stringify(finalName))
    alert(finalName + " scored " + finalScore)

}
highScore()

function appendData() { 
    for (i=0; i < 9; i++) {
        if  (localStorage.getItem ("name" + [i]) !== null) { 
            console.log( [i] + "Contains Data")
        } else {
            localStorage.setItem("name" + [i], JSON.stringify(finalName))
            localStorage.setItem("score" + [i], JSON.stringify(finalScore))
            return
            }
        }
    }

appendData()

var saveName1 = []
var saveScore1 = [] 
function bringScores() {
    for (i = 0; i < 10; i++) {
        saveName1[i] = localStorage.getItem("name" + [i])
        saveScore1[i] = localStorage.getItem("score" + [i])
    }
}
bringScores() 



function appendNameList() {
    for (i = 0; i < saveName1.length; i++) {
        var node = document.createElement("td")
        node.textContent = saveScore1[i]
        highNames.appendChild(node)
    }
}
appendNameList()

function appendScoreList() {
    for (i = 0; i < saveScore1.length; i++) {
        var node = document.createElement("td")
        node.textContent = (saveName1[i])
        highScores.appendChild(node)
    }
}
appendScoreList()
 