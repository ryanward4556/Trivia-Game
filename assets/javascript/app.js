//  Global Variables

var ansCorrect = 0;
var ansIncorrect = 0;
var ansUnanswered = 0;

//  Display Timer

//  Display questions and answers (radio buttons)


//  Track answers


//  Object array for each question

var arrQuestions = [
    {
        question: "At the beginning of the series, how many children do Ned and Catelyn Stark have?",
        answers: {
            a: "7",
            b: "6",
            c: "5",
            d: "4"
        },
        correctAns: "c"
    },
    {
        question: "Arya's dire wolf is named __________.",
        answers: {
            a: "Ghost",
            b: "Needle",
            c: "Nimerya",
            d: "Shaggydog"
        },
        correctAns: "c"
    },
    {
        question: "What is House Tyrell's sigil?.",
        answers: {
            a: "The Lion",
            b: "The Kracken",
            c: "The Rose",
            d: "The Falcon"
        },
        correctAns: "c"
    }
]

function displayQuestions(arr) {
    var randomArr = shuffle(arr);
    var currentQuestion;
    var currentAnswers;

    for (var i = 0; i < randomArr.length; i++) {
        currentQuestion = randomArr[i].question;
        console.log(currentQuestion);
        currentAnswers = arr[i].answers;
        var arrAnswers = [];
        arrAnswers.push(currentAnswers.a, currentAnswers.b, currentAnswers.c, currentAnswers.d);
        shuffle(arrAnswers);
        console.log(arrAnswers);
        for (var j = 0; j < arrAnswers.length; j++) {
            appendText(arrAnswers[j]);
        }

    }
}
displayQuestions(arrQuestions);

function appendText(question) {
    $(".form-check").append("<input class='form-check-inline' type='radio' name='options' value='option1'>", "<label class='form-check-label'></label>");
    $(".form-check-label").html(question);
}


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

