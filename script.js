//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var ISTJscore = 0;
var ISTPscore = 0;
var ISFJscore = 0;
var ISFPscore = 0;
var INFPscore = 0;
var INFJscore = 0;
var INTJscore = 0;
var INTPscore = 0;
var ESTJscore = 0;
var ESTPscore = 0;
var ESFJscore = 0;
var ESFPscore = 0;
var ENFPscore = 0;
var ENFJscore = 0;
var ENTJscore = 0;
var ENTPscore = 0;

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

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");
//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", ISTJ);
q1a1.addEventListener("click", ISTP);
q1a1.addEventListener("click", ISFJ);
q1a1.addEventListener("click", ISFP);
q1a1.addEventListener("click", INFJ);
q1a1.addEventListener("click", INFP);
q1a1.addEventListener("click", INTJ);
q1a1.addEventListener("click", INTJ);

q1a2.addEventListener("click", ISTJ);
q1a2.addEventListener("click", ISTP);
q1a2.addEventListener("click", ISFJ);
q1a2.addEventListener("click", ISFP);
q1a2.addEventListener("click", INFJ);
q1a2.addEventListener("click", INFP);
q1a2.addEventListener("click", INTJ);
q1a2.addEventListener("click", INTJ);

q1a3.addEventListener("click", ESTJ);
q1a3.addEventListener("click", ESTP);
q1a3.addEventListener("click", ESFJ);
q1a3.addEventListener("click", ESFP);
q1a3.addEventListener("click", ENFJ);
q1a3.addEventListener("click", ENFP);
q1a3.addEventListener("click", ENTJ);
q1a3.addEventListener("click", ENTJ);

q1a4.addEventListener("click", ESTJ);
q1a4.addEventListener("click", ESTP);
q1a4.addEventListener("click", ESFJ);
q1a4.addEventListener("click", ESFP);
q1a4.addEventListener("click", ENFJ);
q1a4.addEventListener("click", ENFP);
q1a4.addEventListener("click", ENTJ);
q1a4.addEventListener("click", ENTJ);

q2a1.addEventListener("click", ISTJ);
q2a1.addEventListener("click", ISTP);
q2a1.addEventListener("click", ISFJ);
q2a1.addEventListener("click", ISFP);
q2a1.addEventListener("click", ESFJ);
q2a1.addEventListener("click", ESFP);
q2a1.addEventListener("click", ESTJ);
q2a1.addEventListener("click", ESTJ);

q2a2.addEventListener("click", ISTJ);
q2a2.addEventListener("click", ISTP);
q2a2.addEventListener("click", ISFJ);
q2a2.addEventListener("click", ISFP);
q2a2.addEventListener("click", ESFJ);
q2a2.addEventListener("click", ESFP);
q2a2.addEventListener("click", ESTJ);
q2a2.addEventListener("click", ESTJ);

q2a3.addEventListener("click", INTJ);
q2a3.addEventListener("click", INTP);
q2a3.addEventListener("click", INFJ);
q2a3.addEventListener("click", INFP);
q2a3.addEventListener("click", ENFJ);
q2a3.addEventListener("click", ENFP);
q2a3.addEventListener("click", ENTJ);
q2a3.addEventListener("click", ENTJ);

q2a4.addEventListener("click", INTJ);
q2a4.addEventListener("click", INTP);
q2a4.addEventListener("click", INFJ);
q2a4.addEventListener("click", INFP);
q2a4.addEventListener("click", ENFJ);
q2a4.addEventListener("click", ENFP);
q2a4.addEventListener("click", ENTJ);
q2a4.addEventListener("click", ENTJ);

q3a1.addEventListener("click", ISTJ);
q3a1.addEventListener("click", ISTP);
q3a1.addEventListener("click", INTJ);
q3a1.addEventListener("click", INTP);
q3a1.addEventListener("click", ESTJ);
q3a1.addEventListener("click", ESTP);
q3a1.addEventListener("click", ENTJ);
q3a1.addEventListener("click", ENTP);

q3a2.addEventListener("click", ISTJ);
q3a2.addEventListener("click", ISTP);
q3a2.addEventListener("click", INTJ);
q3a2.addEventListener("click", INTP);
q3a2.addEventListener("click", ESTJ);
q3a2.addEventListener("click", ESTP);
q3a2.addEventListener("click", ENTJ);
q3a2.addEventListener("click", ENTP);

q3a3.addEventListener("click", ISFJ);
q3a3.addEventListener("click", ISFP);
q3a3.addEventListener("click", INFJ);
q3a3.addEventListener("click", INFP);
q3a3.addEventListener("click", ESFJ);
q3a3.addEventListener("click", ESFP);
q3a3.addEventListener("click", ENFJ);
q3a3.addEventListener("click", ENFP);

q3a4.addEventListener("click", ISFJ);
q3a4.addEventListener("click", ISFP);
q3a4.addEventListener("click", INFJ);
q3a4.addEventListener("click", INFP);
q3a4.addEventListener("click", ESFJ);
q3a4.addEventListener("click", ESFP);
q3a4.addEventListener("click", ENFJ);
q3a4.addEventListener("click", ENFP);

q4a1.addEventListener("click", ISFJ);
q4a1.addEventListener("click", ISTJ);
q4a1.addEventListener("click", INFJ);
q4a1.addEventListener("click", INTJ);
q4a1.addEventListener("click", ESFJ);
q4a1.addEventListener("click", ESTJ);
q4a1.addEventListener("click", ENFJ);
q4a1.addEventListener("click", ENTJ);

q4a2.addEventListener("click", ISFJ);
q4a2.addEventListener("click", ISTJ);
q4a2.addEventListener("click", INFJ);
q4a2.addEventListener("click", INTJ);
q4a2.addEventListener("click", ESFJ);
q4a2.addEventListener("click", ESTJ);
q4a2.addEventListener("click", ENFJ);
q4a2.addEventListener("click", ENTJ);

q4a3.addEventListener("click", ISFP);
q4a3.addEventListener("click", ISTP);
q4a3.addEventListener("click", INFP);
q4a3.addEventListener("click", INTP);
q4a3.addEventListener("click", ESFP);
q4a3.addEventListener("click", ESTP);
q4a3.addEventListener("click", ENFP);
q4a3.addEventListener("click", ENTP);

q4a4.addEventListener("click", ISFP);
q4a4.addEventListener("click", ISTP);
q4a4.addEventListener("click", INFP);
q4a4.addEventListener("click", INTP);
q4a4.addEventListener("click", ESFP);
q4a4.addEventListener("click", ESTP);
q4a4.addEventListener("click", ENFP);
q4a4.addEventListener("click", ENTP);

//#TODO: Define quiz functions here
function updateResult() {
  if (ISTJscore >= 3) {
  } else if (ISTPscore >= 3) {
    result.innerHTML = "ISTP!";
  } else if (ISFJscore >= 3) {
    result.innerHTML = "ISFJ!";
  } else if (ISFPscore >= 3) {
    result.innerHTML = "ISFP!";
  } else if (INFPscore >= 3) {
    result.innerHTML = "INFP!";
  } else if (INFJscore >= 3) {
    result.innerHTML = "INFJ!";
  } else if (INTJscore >= 3) {
    result.innerHTML = "INTJ!";
  } else if (INTPscore >= 3) {
    result.innerHTML = "INTP!";
  } else if (ESTJscore >= 3) {
    result.innerHTML = "ESTJ!";
  } else if (ESTPscore >= 3) {
    result.innerHTML = "ESTP!";
  } else if (ESFJscore >= 3) {
    result.innerHTML = "ESFJ!";
  } else if (ESFPscore >= 3) {
    result.innerHTML = "ESFP!";
  } else if (ENFPscore >= 3) {
    result.innerHTML = "ENFP!";
  } else if (ENFJscore >= 3) {
    result.innerHTML = "ENFJ!";
  } else if (ENTJscore >= 3) {
    result.innerHTML = "ENTJ!";
  } else if (ENTPscore >= 3) {
    result.innerHTML = "ENTP!";
  } else {
    result.innerHTML = "Hmm... Your personality is confusing... Try again.";
  }
}

function ISTJ() {
  ISTJscore += 1;
  questionCount += 1;
  //alert("One point to ISTJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ISTP() {
  ISTPscore += 1;
  questionCount += 1;
  //alert("One point to ISTP!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ISFJ() {
  ISFJscore += 1;
  questionCount += 1;
  //alert("One point to ISFJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ISFP() {
  ISFPscore += 1;
  questionCount += 1;
  // alert("One point to ISFP!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function INFP() {
  INFPscore += 1;
  questionCount += 1;
  //alert("One point to INFP!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function INFJ() {
  INFJscore += 1;
  questionCount += 1;
  //  alert("One point to INFJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function INTJ() {
  INTJscore += 1;
  questionCount += 1;
  // alert("One point to INTJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function INTP() {
  INTPscore += 1;
  questionCount += 1;
  // alert("One point to INTP!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ESTJ() {
  ESTJscore += 1;
  questionCount += 1;
  //alert("One point to ESTJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ESTP() {
  ESTPscore += 1;
  questionCount += 1;
  //alert("One point to ESTP!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ESFJ() {
  ESFJscore += 1;
  questionCount += 1;
  //alert("One point to ESFJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ESFP() {
  ESFPscore += 1;
  questionCount += 1;
  // alert("One point to ESFP!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ENFP() {
  ENFPscore += 1;
  questionCount += 1;
  // alert("One point to ENFP!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ENFJ() {
  ENFJscore += 1;
  questionCount += 1;
  // alert("One point to ENFJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ENTJ() {
  ENTJscore += 1;
  questionCount += 1;
  // alert("One point to ENTJ!");
  if (questionCount >= 16) {
    updateResult();
  }
}

function ENTP() {
  ENTPscore += 1;
  questionCount += 1;
  // alert("One point to ENTP!");
  if (questionCount >= 16) {
    updateResult();
  }
}
