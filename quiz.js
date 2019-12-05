var time = 0
var step = 0 
var finalScore = 0

var d1 = document.querySelector("#div1")
var d2 = document.querySelector("#div2")
var d3 = document.querySelector("#div3")
var d4 = document.querySelector("#div4")
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var b4 = document.querySelector("#b4")

d1.innerHTML = ("<h1>Test your coding knowledge</h1>")
d2.innerHTML = ("<p>This quiz will test your aptitude and abily to survive in the hashest of conditions</p>")
d3.innerHTML = ('<button id="start">Start Quiz</button>' + '<button id="view">View Scores</button>') 
d4.classList.add("hidden")

var d6 = document.querySelector("#start")
var d7 = document.querySelector("#view")

function end() {
  finalScore = time
  alert("Game Over \n" + "Final Score = " + finalScore)
  localStorage.setItem("finalScore", JSON.stringify(finalScore))
  window.location.href = "scores.html"
  //enter initials 
  //store score in local
  //display past scores 
}

function refresh() {
  if (step === 5) {
    end()
  } else {
  d1.innerHTML = questions[step].title 
  b1.innerHTML = questions[step].choices[0]
  b2.innerHTML = questions[step].choices[1]
  b3.innerHTML = questions[step].choices[2]
  b4.innerHTML = questions[step].choices[3]
  }
}

function startTimer() {
  d4.classList.remove("hidden")
  time = 75
  timer = setInterval(function() {
    time--;
    // d2.textContent = (time)

    if (time !== 0) {
    } else if (time === 0){ // || time <= 0
      clearInterval(timer)
      end() 
    } else {}
  }, 1000);
}

// Start button function
d6.addEventListener("click", function() {
  startTimer()
  d2.innerHTML = ""
  d3.innerHTML = ""
  refresh()
});

// view button function
d7.addEventListener("click", function() {
  finalScore = null
  localStorage.setItem("finalScore", finalScore)
  window.location.href = "scores.html"
});

// Quiz button functions 
b1.addEventListener("click", function() { 
  if (questions[step].choices[0] !== questions[step].answer) {
    time = time - 15
  } 
  step++
  refresh()
});

b2.addEventListener("click", function() {
  if (questions[step].choices[1] !== questions[step].answer) {
    time = time - 15
  } 
  step++
  refresh()
});

b3.addEventListener("click", function() {
  if (questions[step].choices[2] !== questions[step].answer) {
    time = time - 15
  } 
  step++
  refresh()
});

b4.addEventListener("click", function() {
  if (questions[step].choices[3] !== questions[step].answer) {
    time = time - 15
  } 
  step++
  refresh()
});

// for loop for addEventListener, check answer, rotate questions 
// for(var i=0; i<answerBtns.length;i++){
//   answerBtns[i].addEventListener('click', function(){
//     console.log(step)
//     if(this.textContent === questions[step].answer){
//       console.log('correct')
//       step++
//     }else{
//       console.log('false')
//       step++;
//     }
//     if(step < questions.length - 1){
//       d1.textContent = questions[step].title;
//       b1.textContent = questions[step].choices[0]
//       b2.textContent = questions[step].choices[1]
//       b3.textContent = questions[step].choices[2]
//       b4.textContent = questions[step].choices[3]
//   }
//   })
// }

// console.log(questions[0].title) //format to retrieve value 
