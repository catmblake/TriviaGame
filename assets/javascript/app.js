$("#game-container").hide();
$("#start").on("click", start);

function start() {
    $("#start-container").hide();
    askQuestions();
    runTimer();
}

var timeLeft = 30;
var intervalId;

function runTimer() {
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function countdown() {
    timeLeft--;

    $("#countdown-timer").html("<h3>Time Remaining: " + timeLeft + " seconds</h3>");

    if (timeLeft === 0) {
        displayResults();
        stop();
    }
}
// create a trivia form w/ multiple choice questions
// player can only select one answer per question
// The game ends when the time runs out. 
// The page will reveal the number of questions that 
// players answer correctly and incorrectly.
// $("#game-container").text("Trivia Game")

// Question array containing question/answers as objects
var myQuestions = [
    {
        question: "What is the distance from the earth to the moon?",
        answers: {
            a: "39,300 miles",
            b: "283,700 miles",
            c: "238,900 miles"
        },
        correctAnswer: "c"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: {
            a: "Jupiter",
            b: "Mars",
            c: "Saturn"
        },
        correctAnswer: "a"
    },
    {
        question: "What planet is closest to the sun?",
        answers: {
            a: "Venus",
            b: "Mars",
            c: "Mercury"
        },
        correctAnswer: "c"
    },
    {
        question: "Who was the first man on the moon?",
        answers: {
            a: "Neil Armstrong",
            b: "Uri Gagarin",
            c: "Michael Collins"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the name of the galaxy we live in?",
        answers: {
            a: "The Solar System",
            b: "The Milky Way",
            c: "Andromeda"
        },
        correctAnswer: "b"
    },
]
function askQuestions() {
    $("#game-container").show();
    var questionNum = 1;

    for (i = 0; i < myQuestions.length; i++) {
        console.log(myQuestions[i].question);
        console.log(myQuestions[i].answers);
        $(".form").append("<label>" + questionNum + ". " + myQuestions[i].question + "</label><br>");
        $(".form").append('<input type="radio"> ' + myQuestions[i].answers.a + ' </input><input type="radio"> ' + myQuestions[i].answers.b + ' </input><input type="radio"> ' + myQuestions[i].answers.c + '</input><br>');
        questionNum++
    }
}

function displayResults() {
    $("#game-container").hide();
    $("#game-results").show();
}

$("#submit").on("click", displayResults);
