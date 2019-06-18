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
        question: "What is House Tyrell's sigil?",
        answers: {
            a: "The Lion",
            b: "The Kracken",
            c: "The Rose",
            d: "The Falcon"
        },
        correctAns: "c"
    }
]

function displayQuiz(arr) {
    var randomArr = shuffle(arr);
    var currentQuestion;
    var currentAnswers;
    var newQuestion;

    for (var i = 0; i < randomArr.length; i++) {
        newQuestion = $(".list-group").append("<li class='list-group-item'></li>")
        currentQuestion = randomArr[i].question;
        displayQuestion(currentQuestion);

        currentAnswers = randomArr[i].answers;
        var arrAnswers = [];
        arrAnswers.push(currentAnswers.a, currentAnswers.b, currentAnswers.c, currentAnswers.d);
        shuffle(arrAnswers);

        console.log(currentQuestion);
        console.log(arrAnswers);
        //  TO ADD **** for each question make an html div with a class 'question 1', 
        //  for each question in arrQuestions array (arrQuestions[i]), display the questions...

    }

}
function displayQuestion(question) {
    $(".list-group-item").each(function(){
        $(this).text(question);
    });
}
displayQuiz(arrQuestions);

// function appendText(question) {
//     // for (var i = 0; i < arr.length; i++) {
//         var newQuestion = $(".list-group").append("<li class='list-group-item'></li>")
//         newQuestion.text(question);
//     // }

// }


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

