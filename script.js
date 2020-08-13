//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var PopScore = 0;
var RockScore = 0;
var CountryScore = 0;
var JazzScore = 0;


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
  if (PopScore >=2) {
    result.innerHTML = "Pop!"
  } else if (RockScore >= 2) {
    result.innerHTML = "Rock!";
  } else if (JazzScore >= 2) {
    result.innerHTML = "Jazz";
  }else if (CountryScore >= 2) {
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

