// Trivia Game
// create a countdown timer for the game
// create a trivia form w/ multiple choice questions
// player can only select one answer per question
// The game ends when the time runs out. 
// The page will reveal the number of questions that 
// players answer correctly and incorrectly.
$("#game-container").text("Trivia Game")

var gameContainer = $("#game-container");
var resultsContainer = $("#game-results");
var submitButton = $("#submit");

function askQuestions () {
}

function displayResults () {
    console.log("results")
}

askQuestions ();

$("#submit").on("click", displayResults);
// Question array containing question/answers as objects
var myQuestions = [
    {
    question: "What is the distance from the earth to the moon?",
    answers:{
        a: "39,300 miles",
        b: "283,700 miles",
        c: "238,900 miles"
        },
        correctAnswer: "c"
    },
    {
    question: "What is the largest planet in our solar system?",
    answers:{
        a: "Jupiter",
        b: "Mars",
        c: "Saturn"
        },
        correctAnswer: "a"
    },
    {
    question: "What planet is closest to the sun?",
    answers:{
        a: "Venus",
        b: "Mars",
        c: "Mercury"
        },
        correctAnswer: "c"
    },
    {
        question: "Who was the first man on the moon?",
        answers:{
            a: "Neil Armstrong",
            b: "Uri Gagarin",
            c: "Michael Collins"
            },
            correctAnswer: "a"
        },
        {
            question: "What is the name of the galaxy we live in?",
            answers:{
                a: "The Solar System",
                b: "The Milky Way",
                c: "Andromeda"
                },
                correctAnswer: "b"
            },
]