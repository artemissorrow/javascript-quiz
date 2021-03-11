var container = document.getElementById("quizcontainer");
var title = document.createElement("h1");
var intro = document.createElement("p");
var startButton = document.createElement("button");
var buttonBox = document.createElement("div")
// multiple choice buttons
var buttonA = document.createElement("button");
var buttonB = document.createElement("button");
var buttonC = document.createElement("button");
var buttonD = document.createElement("button");
// correct or wrong answer
var answer = document.createElement("p");
// set up the timer
var secondsLeft;
var timer = document.createElement("p");
// input for highscores
var initials = document.createElement("input");

var questions = [
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        correctAnswer: "parentheses",
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        correctAnswer: "console.log",
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        correctAnswer: "quotes"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        correctAnswer: "alerts",
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        correctAnswer: "all of the above",
    }
];

title.textContent = "Test Your Coding Knowledge";
intro.textContent = "Try to answer the following questions without Googling. For each incorrect answer, 10 seconds will be deducted from the timer.";
startButton.textContent = "Start Quiz!";
answer.textContent = "";

container.appendChild(title);
container.appendChild(intro);
container.appendChild(startButton);
container.appendChild(buttonBox);
container.appendChild(answer);

startButton.setAttribute("style", "position:relative; left:43%;")
title.setAttribute("style", "font-size:30px; padding:10px;")
intro.setAttribute("style", "font-size:20px; line-height:25px;")
answer.setAttribute("style", "font-size:25px; font-weight:bold; color:steelBlue;")

buttonA.setAttribute("class", "choice");
buttonB.setAttribute("class", "choice");
buttonC.setAttribute("class", "choice");
buttonD.setAttribute("class", "choice");

initials.setAttribute("type","textbox");
initials.setAttribute("placeholder", "AAA");

function timeUp() {
    title.textContent = "Game Over!"

    buttonBox.removeChild(buttonA);
    buttonBox.removeChild(buttonB);
    buttonBox.removeChild(buttonC);
    buttonBox.removeChild(buttonD);

    timer.setAttribute("style", "display:none;")

    startButton.setAttribute("style", "display:block; position:relative; left:43%;");
    startButton.textContent = "Try Again?"

}

var i;

function multipleChoice(number) {
    i = number;
    title.textContent = questions[i].question;
    buttonA.textContent = questions[i].choices[0];
    buttonB.textContent = questions[i].choices[1];
    buttonC.textContent = questions[i].choices[2];
    buttonD.textContent = questions[i].choices[3];

    console.log(questions[i].correctAnswer);
}

startButton.addEventListener("click", function () {
    startButton.setAttribute("style", "display:none;");
    intro.setAttribute("style", "display:none;");
    buttonBox.appendChild(buttonA);
    buttonBox.appendChild(buttonB);
    buttonBox.appendChild(buttonC);
    buttonBox.appendChild(buttonD);

    secondsLeft = 90;

    multipleChoice(0);

    container.appendChild(timer);

    var timerFunction = setInterval(function () {
        secondsLeft--;
        timer.textContent = secondsLeft + " seconds remaining";
        if (secondsLeft <= 0) {
            clearInterval(timerFunction);
            timeUp();
        }
    }, 1000);

    timer.setAttribute("style", "display:block; margin-top:100px;");
})

function nextQuestion() {
    if (i < 4) {
        i++
        multipleChoice(i);
    }
    setTimeout(function(){
        answer.textContent = "";
    }, 1000)

    if (i > 4) {
        // hide everything
        // textbox for initials --> high score when entered
        // high score screen w/ option to clear
        buttonBox.setAttribute = ("style", "display:none;")
    }
}

buttonA.addEventListener("click", function() {
    if (this.textContent === questions[i].correctAnswer) {
        answer.textContent = "Correct!";
    } else {
        answer.textContent = "Sorry, Incorrent!";
        secondsLeft -= 10;
    }
    nextQuestion();
})

buttonB.addEventListener("click", function() {
    if (this.textContent === questions[i].correctAnswer) {
        answer.textContent = "Correct!"
    } else {
        answer.textContent = "Sorry, Incorrent!"
        secondsLeft -= 10;
    }
    nextQuestion();
})

buttonC.addEventListener("click", function() {
    if (this.textContent === questions[i].correctAnswer) {
        answer.textContent = "Correct!"
    } else {
        answer.textContent = "Sorry, Incorrent!"
        secondsLeft -= 10;
    }
    nextQuestion();
})

buttonD.addEventListener("click", function() {
    if (this.textContent === questions[i].correctAnswer) {
        answer.textContent = "Correct!"
    } else {
        answer.textContent = "Sorry, Incorrent!"
        secondsLeft -= 10;
    }
    nextQuestion();
})







