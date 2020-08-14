//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var PopScore = 0;
var RockScore = 0;
var CountryScore = 0;
var JazzScore = 0;

var result = document.getElementById("result");
var restart = document.getElementById("restart");

//#TODO: Use the DOM to create variables for the first quiz question.
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

q1a1.addEventListener("click", disableq1);
q1a2.addEventListener("click", disableq1);
q1a3.addEventListener("click", disableq1);
q1a4.addEventListener("click", disableq1);

q2a1.addEventListener("click", disableq2);
q2a2.addEventListener("click", disableq2);
q2a3.addEventListener("click", disableq2);
q2a4.addEventListener("click", disableq2);

q3a1.addEventListener("click", disableq3);
q3a2.addEventListener("click", disableq3);
q3a3.addEventListener("click", disableq3);
q3a4.addEventListener("click", disableq3);

restart.addEventListener("click", restartQuiz);

var result = document.getElementById("result");
//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", Rock);
q1a2.addEventListener("click", Country);
q1a3.addEventListener("click", Pop);
q1a4.addEventListener("click", Jazz);

q2a1.addEventListener("click", Rock);
q2a2.addEventListener("click", Pop);
q2a3.addEventListener("click", Jazz);
q2a4.addEventListener("click", Country);

q3a1.addEventListener("click", Jazz);
q3a2.addEventListener("click", Country);
q3a3.addEventListener("click", Rock);
q3a4.addEventListener("click", Pop);

//#TODO: Define quiz functions here
function updateResult() {
  if (PopScore >= 2) {
    result.innerHTML = "Pop!";
  } else if (RockScore >= 2) {
    result.innerHTML = "Rock!";
  } else if (JazzScore >= 2) {
    result.innerHTML = "Jazz";
  } else if (CountryScore >= 2) {
    result.innerHTML = "Country!";
  } else {
    result.innerHTML = "Hmm... Your taste in music is confusing... Try again.";
  }
}

function Pop() {
  PopScore += 1;
  questionCount += 1;
  //alert("One point to ISTJ!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function Jazz() {
  JazzScore += 1;
  questionCount += 1;
  //alert("One point to ISTP!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function Rock() {
  RockScore += 1;
  questionCount += 1;
  //alert("One point to ISFJ!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function Country() {
  CountryScore += 1;
  questionCount += 1;
  // alert("One point to ISFP!");
  if (questionCount >= 3) {
    updateResult();
  }
}

function disableq1() {
  document.getElementById("q1a1").disabled = true;
  document.getElementById("q1a2").disabled = true;
  document.getElementById("q1a3").disabled = true;
  document.getElementById("q1a4").disabled = true;
}
function disableq2() {
  document.getElementById("q2a1").disabled = true;
  document.getElementById("q2a2").disabled = true;
  document.getElementById("q2a3").disabled = true;
  document.getElementById("q2a4").disabled = true;
}
function disableq3() {
  document.getElementById("q3a1").disabled = true;
  document.getElementById("q3a2").disabled = true;
  document.getElementById("q3a3").disabled = true;
  document.getElementById("q3a4").disabled = true;
}
function disableq4() {
  document.getElementById("q4a1").disabled = true;
  document.getElementById("q4a2").disabled = true;
  document.getElementById("q4a3").disabled = true;
  document.getElementById("q4a4").disabled = true;
}

function restartQuiz() {
  result.innerHTML = "Your result is...";
  PopScore == 0;
  RockScore == 0;
  CountryScore == 0;
  JazzScore == 0;
  questionCount == 0;
  //alert("You restarted the quiz!");
  document.getElementById("q1a1").disabled = false;
  document.getElementById("q1a2").disabled = false;
  document.getElementById("q1a3").disabled = false;
  document.getElementById("q1a4").disabled = false;
  document.getElementById("q2a1").disabled = false;
  document.getElementById("q2a2").disabled = false;
  document.getElementById("q2a3").disabled = false;
  document.getElementById("q2a4").disabled = false;
  document.getElementById("q3a1").disabled = false;
  document.getElementById("q3a2").disabled = false;
  document.getElementById("q3a3").disabled = false;
  document.getElementById("q3a4").disabled = false;
  document.getElementById("q4a1").disabled = false;
  document.getElementById("q4a2").disabled = false;
  document.getElementById("q4a3").disabled = false;
  document.getElementById("q4a4").disabled = false;
}
