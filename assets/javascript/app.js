$("#game-container").hide();
$("#game-results").hide();
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

function stopTimer() {
    clearInterval(intervalId);
}

function countdown() {
    timeLeft--;

    $("#countdown-timer").html("<h3>Time Remaining: " + timeLeft + " seconds</h3>");

    if (timeLeft === 0) {
        displayResults();
        stopTimer();
    }
}
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

var questionNum = 1;
function askQuestions() {
    $("#game-container").show();
    for (i = 0; i < myQuestions.length; i++) {
        $(".form").append("<label>" + questionNum + ". " + myQuestions[i].question + "</label><br>");
        $(".form").append('<input type="radio" name="question' + questionNum + '" value="a"> ' + myQuestions[i].answers.a + ' </input><input type="radio" name="question' + questionNum + '" value="b"> ' + myQuestions[i].answers.b + ' </input><input type="radio" name="question' + questionNum + '" value="c"> ' + myQuestions[i].answers.c + '</input><br>');
        questionNum++;
    }
}

var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;

function getCheckedValue() {
    for (var i = 0; i < myQuestions.length; i++) {
        if ($('input[name="question' + (i + 1) + '"]:checked').val() === undefined) {
            unanswered++;
            console.log("unanswered", unanswered);
        } else {
            if ($('input[name="question' + (i + 1) + '"]:checked').val() === myQuestions[i].correctAnswer) {
                correctAnswers++;
                console.log("correct", correctAnswers);
            } else {
                incorrectAnswers++;
                console.log("incorrect", incorrectAnswers);
            }
        }
    }
    $("#game-results").html("<h2> Quiz Complete! </h2><br><h3>Correct Answers: " + correctAnswers + "</h3><br><h3>Incorrect Answers: " + incorrectAnswers + "</h3><br><h3>Unanswered: " + unanswered + "</h3>");
}

function displayResults() {
    stopTimer();
    getCheckedValue();
    $("#game-container").hide();
    $("#game-results").show();
}

$("#submit").on("click", displayResults)