//  Global Variables

var ansCorrect = 0;
var ansIncorrect = 0;
var ansUnanswered = 0;
var timeId = document.getElementById("time-display");
var quizId = document.getElementById("quiz-display");
var resultsId = document.getElementById("results-display");
var submitBtn = document.getElementById("submit-button");
var startBtn = document.getElementById("start-button");
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
    },
    {
        question: "Who's fault was the final season?",
        choices: {
            a: "Aaron Rodgers",
            b: "Ed Sheeran",
            c: "George R. R. Martin",
            d: "David Benioff & D.B. Weiss"
        },
        correctAns: "d"
    },
    {
        question: "Who was the first character in the series to kill a white walker?",
        choices: {
            a: "Samwell Tarly",
            b: "Jon Snow",
            c: "Ned Stark",
            d: "Jeor Mormont"
        },
        correctAns: "a"
    },
    {
        question: "Missandei's original home is called ________.",
        choices: {
            a: "Naath",
            b: "Slaver's Bay",
            c: "Dorne",
            d: "King's Landing"
        },
        correctAns: "a"
    },
    {
        question: "Who created the white walkers?",
        choices: {
            a: "The First Men",
            b: "The Children of the Forest",
            c: "The Three-Eyed Raven",
            d: "Raeghar Targaryen"
        },
        correctAns: "b"
    },
    {
        question: "What is the full official title of the second person in the series to sit on the Iron Throne?",
        choices: {
            a: "His Grace, Joffrey of Houses Baratheon and Lannister, First of His Name, King of the Andals and the First Men, Lord of the Seven Kingdoms, and Protector of the Realm.",
            b: "His Grace, Geoffrey of Houses Lannister, First of His Name, King of the Andals and the First Men, Lord of the  Realm , and Protector of the Seven Kingdoms.",
            c: "His Grace, Joffrey of Houses Baratheon and Lannister, First of His Name, King of the Andals and the First Men, Lord of the Westeros, and Protector of the Realm.",
            d: "His Grace, Geoffrey of Houses Lannister, First of His Name, King of the Andals and the First Men, Lord of the Seven Kingdoms, and Protector of the Realm."
        },
        correctAns: "a"
    },
    {
        question: "Which dragon did the Night King steal from Dany?",
        choices: {
            a: "Viserion",
            b: "Drogon",
            c: "Rhaeghal",
            d: "Valyron"
        },
        correctAns: "a"
    }

]

//  Plays audio function on submit click, linked in html
function play() {
    var audio = document.getElementById("audio");
    audio.play();
}

//  Calls hide sumbit to not show on starting screen
hideSubmitBtn();

//  When Start Button is clicked, run display quiz and hide the start button
$("#start-button").on("click", function () {
    hideStartBtn();
    displayQuiz(arrQuestions, quizId, resultsId, submitBtn);
});

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

//  Hides each button when called
function hideStartBtn() {
    startBtn.setAttribute("style", "display: none;");
}
function hideSubmitBtn() {
    submitBtn.setAttribute("style", "display: none;");
}


//  Displays questions as text and each question's choices as buttons
function displayQuiz(arr, quizId, resultsId, submitBtn) {


    submitBtn.setAttribute("style", "display: auto;");


    //  Variable that will hold our setInterval that runs the stopwatch
    var intervalId;

    // Prevents the clock from being sped up unnecessarily
    var clockRunning = false;
    var time = 120;

    //  Starts timer
    function start() {
        $(timeId).text("Time Remaining: " + time);

        // Use setInterval to start the count here and set the clock to running
        if (!clockRunning) {
            intervalId = setInterval(count, 1000);
            clockRunning = true;
        }
    }

    function count() {

        // Increments time by 1
        time--;

        // Display time as it counts down
        $(timeId).text("Time Remaining: " + time);

        timeIsUp();
    }

    //  When time is less than 1, clearInterval, hid quiz, time and submit button and show results
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
                    + '<input type="radio" name="question' + i + '" value=" ' + letter + '">'
                    + ' '
                    + arr[i].choices[letter]
                    + '</label>'
                );
            }
            // adds each question and its choices to the output
            output.push(
                '<div class="question">' + arr[i].question + '</div>' + '<br>'
                + '<div class="choices">' + choices.join(' ') + '</div>' + '<hr>'
            );

        }
        // Combines output list into one string of html and add to html
        quiz.innerHTML = output.join('');

    }

    function addResults(arr, quiz, results) {

        // Gathers answer containers from  quiz
        var answers = quiz.querySelectorAll('.choices');

        var userChoice = '';
        for (var i = 0; i < arr.length; i++) {
            // Finds selected answer
            userChoice = (answers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            // If answer is correct
            if (userChoice === arr[i].correctAns) {
                ansCorrect++;

                //  If answer is incorrect
            } else if (answers[i].querySelector('input[type=radio]:checked') && userChoice != arr[i].correctAns) {
                ansIncorrect++;
            }

            // If answer is blank
            else {
                ansUnanswered++;
            }
        }

        // Displays number of correct answers out of total
        $(results).html("<p>").text('Total Correct: ' + ansCorrect + "   ");
        $(results).append('Total Incorrect: ' + ansIncorrect + "   ");
        $(results).append('Total Unanswered: ' + ansUnanswered);
    }

    addQuestions(array, quizId);

    // When submitBtn is clicked, show results
    submitBtn.onclick = function () {
        time = 0;
        timeIsUp();
    }
    // });
}





