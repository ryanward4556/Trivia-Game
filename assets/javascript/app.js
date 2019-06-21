//  Global Variables

var ansCorrect = 0;
var ansIncorrect = 0;
var ansUnanswered = 0;
var timeId = document.getElementById("time-display");
var quizId = document.getElementById("quiz-display");
var resultsId = document.getElementById("results-display");
var submitBtn = document.getElementById("submit-button");

//  Object array for each question
var arrQuestions = [
    {
        question: "At the beginning of the series, how many children do Ned and Catelyn Stark have?",
        choices: {
            a: "7",
            b: "6",
            c: "5",
            d: "4"
        },
        correctAns: "c"
    },
    {
        question: "Arya's dire wolf is named __________.",
        choices: {
            a: "Ghost",
            b: "Needle",
            c: "Nimerya",
            d: "Shaggydog"
        },
        correctAns: "c"
    },
    {
        question: "What is House Tyrell's sigil?",
        choices: {
            a: "The Lion",
            b: "The Kracken",
            c: "The Rose",
            d: "The Falcon"
        },
        correctAns: "c"
    }
]


var audio = new Audio("../images/got2.mp3");



//  Shuffles order of array items
function shuffle(arr) {
    var ctr = arr.length, temp, index;
    while (ctr > 0) {
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = arr[ctr];
        arr[ctr] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

//  Displays questions as text and each question's choices as buttons
function displayQuiz(arr) {

    // This code will run as soon as the page loads
    $(document).ready(function () {

        // audio.createSound({
        //     id: 'mySound',
        //     url: '/path/to/an.mp3'
        // });

        // ...and play it
    //     soundManager.play('mySound');
    // });

        audio.play();

        //  Variable that will hold our setInterval that runs the stopwatch
        var intervalId;

        // prevents the clock from being sped up unnecessarily
        var clockRunning = false;
        var time = 30;

        function start() {
            // DONE: Use setInterval to start the count here and set the clock to running.
            if (!clockRunning) {
                intervalId = setInterval(count, 1000);
                clockRunning = true;
            }
        }

        function count() {

            // DONE: increment time by 1, remember we cant use "this" here.
            time--;

            // DONE: Use the variable we just created to show the converted time in the "display" div.
            $(timeId).text("Time Remaining: " + time);
            timeIsUp();
        }

        function timeIsUp() {
            if (time < 1) {
                clearInterval(intervalId);
                clockRunning = false;
                quizId.setAttribute("style", "display: none;");
                timeId.setAttribute("style", "display: none;");
                submitBtn.setAttribute("style", "display: none;");
                addResults(arr, quizId, resultsId);
            }
        }

        start();


        //  Randomizes arrQuestions
        var array = shuffle(arr);

        //  Adds questions and choices as html elements
        function addQuestions(arr, quiz) {
            var output = [];
            var choices;
            // for each question...
            for (var i = 0; i < arr.length; i++) {
                // reset the list of choices
                choices = [];
                // for each choice to each question...
                for (letter in arr[i].choices) {
                    // adds as radio button
                    choices.push(
                        '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + arr[i].choices[letter]
                        + '</label>'
                    );
                }
                // adds each question and its choices to the output
                output.push(
                    '<div class="question">' + arr[i].question + '</div>' + '<br>'
                    + '<div class="choices">' + choices.join('') + '</div>' + '<hr>'
                );

            }
            // combines output list into one string of html and add to html
            quiz.innerHTML = output.join('');

        }

        function addResults(arr, quiz, results) {

            // gather answer containers from our quiz
            var answers = quiz.querySelectorAll('.choices');

            // keep track of user's answers
            var userChoice = '';

            // for each question...
            for (var i = 0; i < arr.length; i++) {
                // find selected answer
                userChoice = (answers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

                // if answer is correct
                if (userChoice === arr[i].correctAns) {
                    // add to the number of correct answers
                    ansCorrect++;

                    // color the answers green
                    answers[i].style.color = 'lightgreen';
                }
                // if answer is wrong or blank
                else {
                    // color the answers red
                    answers[i].style.color = 'red';
                    ansUnanswered++;
                }
            }

            // show number of correct answers out of total
            $(results).html("<p>").text('Total Correct: ' + ansCorrect);
            $(results).append('Total Incorrect: ' + ansIncorrect);
            $(results).append('Total Unanswered: ' + ansUnanswered);
        }

        addQuestions(array, quizId);

        // on submit, show results
        submitBtn.onclick = function () {
            time = 0;
            timeIsUp();
        }
    });
}
displayQuiz(arrQuestions, quizId, resultsId, submitBtn);


