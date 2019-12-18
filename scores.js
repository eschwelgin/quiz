var b5 = document.querySelector("#b5")
var highScores = document.querySelector("#highScores")
var highNames = document.querySelector("#highNames")

var finalScore = JSON.parse(localStorage.getItem("finalScore"))

b5.addEventListener("click", function() {
    window.location.href = "index.html"
});

function highScore() {
    alert("Congrats on your score of " + finalScore)
    finalName = prompt("Enter your name")
    localStorage.setItem("finalName", JSON.stringify(finalName))
    alert(finalName + " scored " + finalScore)

}

function appendData() { 
    for (i=0; i < 10; i++) {
        if  (localStorage.getItem ("name" + [i]) !== null) { 
            // console.log( [i] + "Contains Data")
        } else {
            localStorage.setItem("name" + [i], JSON.stringify(finalName))
            localStorage.setItem("score" + [i], JSON.stringify(finalScore))
            return
        }
    }
}

var saveName1 = []
var saveScore1 = [] 
function bringScores() {
    for (i = 0; i < 10; i++) {
        saveName1[i] = localStorage.getItem("name" + [i])
        saveScore1[i] = localStorage.getItem("score" + [i])
    }
}

function appendList() {
    for (i = 0; i < saveName1.length; i++) {
        if (saveName1[i] !== null && saveScore1[1] !== null) {
            var node = document.querySelector("#highName" + [i])
            var node1 = document.querySelector("#highScore" + [i])
            node.textContent = saveName1[i]
            node1.textContent = saveScore1[i]
        }

    }
}

if (finalScore === null) {
    bringScores() 
    appendList()
} else {
    highScore()
    appendData()
    bringScores() 
    appendList()
}