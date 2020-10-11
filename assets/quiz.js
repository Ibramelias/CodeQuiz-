
var hideMe = document.querySelector("#startContainer");
var questionEl = document.querySelector("#question")
var optionListEl = document.querySelector("#option-list");
var questionResultEl = document.querySelector("#answer");
var timerEl = document.querySelector("#time");
var startBtn = document.getElementById("startBtn");
var showHighScore = document.getElementById("Highscores");

// Defind some variables //
var questionIndex = 0;
var correctCount = 0;

//  add variables to hold the time //

// var time = 20;


// Questions //
var questions = [
    {
        // Question 1 //
        question: "1- Commonly used data type DO NOT include: __________ ",
        choices: ["string", "booleans", "alerts", "numbers"],
        answer: "alerts",
    },

    {
        // Question 2 //
        question: "2- The condition in an if / else statment is enclosed within _______ ? ",
        choices: ["quotes", "curly brakets", "parentheses", "square brackets"],
        answer: "parentheses",
    },

    {
        // Question 3 //
        question: "3- String values must be enclosed within ________ when being assigned to variables?",
        choices: ["commas", "curley brackets", "quotes", "parentheses"],
        answer: "quotes",
    },

    {
        // Question 4 //
        question: "4- A very useful tool used during development and debugging for printing content to the debugger is: _________",
        choices: ["JavaScript", "terminal/bash", "for loops", "console.log()"],
        answer: "console.log()",
    },

    {
        // Question 5 // 
        question: "5- Arrays in Javascript can be used to store: ",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },

];

var time = questions.length * 5;
var interavlId;

// add Eventlistener to startBtn//
startBtn.addEventListener("click", function () {
    hideMe.style.display = "none";
    startBtn.style.display = "none";

    renderQuestion();

});


// start Questions //
function renderQuestion() {
    if (time === 0) {
        updateTime();
        return;
    }

    intervalId = setInterval(updateTime, 1000);
    questionEl.textContent = questions[questionIndex].question;

    optionListEl.innerHTML = "";
    questionResultEl.innerHTML = "";

    var choices = questions[questionIndex].choices;
    var choicesLenth = choices.length;

    for (var i = 0; i < choicesLenth; i++) {
        var questionListItem = document.createElement("li");
        questionListItem.textContent = choices[i];
        optionListEl.append(questionListItem);

    }

}

// Check Answer //
function checkAnswer(event) {
    clearInterval(interavlId);
    var target = event.target;
    if (target.matches("li")) {
        var answer = event.target.textContent;
        if (answer === questions[questionIndex].answer) {
            correctCount++;
            questionResultEl.textContent = "Correct";
        } else {
            correctCount--;
            time -= 2;
            questionResultEl.textContent = "Incorrect";
        }

    }

    setTimeout(nextQuestion, 2000);
}

// Nest Question //
function nextQuestion() {

    questionResultEl.textContent = "";

    questionIndex++;
    if (questionIndex === questions.length) {
        timer = 0;
        endQuiz();
    } else {
        renderQuestion();
    }


}

// Update Time //
function updateTime() {
    timerEl.textContent = time;
    time--;
    if (time === 0) {
        endQuiz();
    }

}

// End Quiz //
function endQuiz() {
    clearInterval(intervalId);
    var body = document.body;
    body.innerHTML = "Game over, You scored " + correctCount;
    setTimeout(showHighScore, 2000);
}


// renderQuestion();
optionListEl.addEventListener("click", checkAnswer);


