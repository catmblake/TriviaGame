//wrapping the script in the document ready function 
$(document).ready(function () {
    $("#game-container").hide();
    $("#game-results").hide();
    //creating start button and adding it to the start container. User clicks to begin the quiz
    var startBtn = $("<button>");
    $("#start-container").append(startBtn);
    $(startBtn).attr("id", "start");
    $("#start").html("Start Quiz");
    $("#start").on("click", start);
    //start function hides start container and calls timer and question functions to run the quiz
    function start() {
        $("#start-container").hide();
        askQuestions();
        runTimer();
    }
    //countdown timer that limits the users time to 30 seconds to complete the quiz
    var timeLeft = 30;
    var intervalId;
    function runTimer() {
        clearInterval(intervalId);
        intervalId = setInterval(countdown, 1000);
    }
    //function that ends the countdown timer either when time left is zero or player clicks submit 
    function stopTimer() {
        clearInterval(intervalId);
    }
    //countdown function that decrements the timer and populates html with time remaining
    function countdown() {
        timeLeft--;
        $("#countdown-timer").html("<h3>Time Remaining: " + timeLeft + " seconds</h3>");
        if (timeLeft === 0) {
            displayResults();
            stopTimer();
        }
    }
    //array containing question/answer objects 
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
    //ask question function that loops through the q/a array and populates the game-container with multiple choice trivia questions
    var questionNum = 1;
    function askQuestions() {
        $("#game-container").show();
        for (i = 0; i < myQuestions.length; i++) {
            $(".form").append("<label>" + questionNum + ". " + myQuestions[i].question + "</label><br>");
            $(".form").append('<input type="radio" name="question' + questionNum + '" value="a"> ' + myQuestions[i].answers.a + ' </input><input type="radio" name="question' + questionNum + '" value="b"> ' + myQuestions[i].answers.b + ' </input><input type="radio" name="question' + questionNum + '" value="c"> ' + myQuestions[i].answers.c + '</input><br>');
            questionNum++;
        }
    }
    //creating the submit button and adding it to the end of the game-container
    var submitBtn = $("<button>");
    $("#game-container").append(submitBtn);
    $(submitBtn).attr("id", "submit");
    $("#submit").html("Submit Answers");
    //for loop that checks users selections and tallies their results
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;
    function getCheckedValue() {
        for (var i = 0; i < myQuestions.length; i++) {
            if ($('input[name="question' + (i + 1) + '"]:checked').val() === undefined) {
                unanswered++;
            } else {
                if ($('input[name="question' + (i + 1) + '"]:checked').val() === myQuestions[i].correctAnswer) {
                    correctAnswers++;
                } else {
                    incorrectAnswers++;
                }
            }
        }
        //populating the game-results container with the users results
        $("#game-results").html("<h2> Quiz Complete! </h2><br><h3>Correct Answers: " + correctAnswers + "</h3><br><h3>Incorrect Answers: " + incorrectAnswers + "</h3><br><h3>Unanswered: " + unanswered + "</h3>");
    }
    //results function that ends the game and displays results to the user
    function displayResults() {
        stopTimer();
        getCheckedValue();
        $("#game-container").hide();
        $("#game-results").show();
    }
    $("#submit").on("click", displayResults)
});