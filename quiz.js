var time = 0
var step = 0 

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
d3.innerHTML = ('<button class="start">Start Quiz</button>') 

function end() {
  alert("Game Over \n" + "Final Score = " + time)
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
  time = 75
  timer = setInterval(function() {
    time--;
    d2.textContent = (time)
    if (time !== 0) {
    } else if (time === 0){ // || time <= 0
      clearInterval(timer)
      end() 
    } else {}
  }, 1000);
}

// Start button function
d3.addEventListener("click", function() {
  startTimer()
  d2.innerHTML = ""
  d3.innerHTML = ""
  refresh()
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



// console.log(questions[0].title) //format to retrieve value 
