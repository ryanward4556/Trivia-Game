//  Global Variables

var ansCorrect = 0;
var ansIncorrect = 0;
var ansUnanswered = 0;
var timeId = $("#time-display");

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

    //  Randomizes arrQuestions
    var array = shuffle(arr);
    console.log(array);

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
        results.createElement = "p";
        $("p").text('Total Correct: ' + ansCorrect);
        console.log(results);
        results.innerHTML = 'Total Incorrect: ' + ansIncorrect;
        results.innerHTML = 'Total Unanswered: ' + ansUnanswered;
    }

    addQuestions(array, quizId);

    // on submit, show results
    submitBtn.onclick = function () {
        addResults(arr, quizId, resultsId);
    }

}



// }

// $(document).ready(function () {
//     var isChecked = $("#input[type=radio]").prop("checked");
//     var counter = 0;
//     if (isChecked === true) {
//         counter += 1;
//         console.log(counter)
//     }

// })


//  Display Timer


//  Display questions and answers (radio buttons)


//  Track answers
// function countScore() {

// }



displayQuiz(arrQuestions, quizId, resultsId, submitBtn);


