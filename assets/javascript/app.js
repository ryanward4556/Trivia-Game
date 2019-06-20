//  Global Variables

var ansCorrect = 0;
var ansIncorrect = 0;
var ansUnanswered = 0;

//  Object array for each question
var arrQuestions = [
    {
        question: "At the beginning of the series, how many children do Ned and Catelyn Stark have?",
        choices: ["7", "6", "5", "4"],
        correctAns: 2
    },
    {
        question: "Arya's dire wolf is named __________.",
        choices: ["Ghost", "Needle", "Nimerya", "Shaggydog"],
        correctAns: 2
    },
    {
        question: "What is House Tyrell's sigil?",
        choices: ["The Lion", "The Kracken", "The Rose", "The Falcon"],
        correctAns: 2
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
    var randomArr = shuffle(arr);
    for (var i = 0; i < randomArr.length; i++) {
        var question = arrQuestions[i].question;
        document.write(question);
        var options = arrQuestions[i].choices;
        document.body.appendChild(document.createElement("br"));

        var correct = arrQuestions[i].correctAns;

        var name = "radio" + i;
        for (var opt in options) {
            var radioEle = document.createElement("input");
            radioEle.type = "radio";
            radioEle.value = options[opt];
            radioEle.name = name;
            document.body.appendChild(radioEle);
            var label = document.createElement("Label");
            label.innerHTML = options[opt];
            document.body.appendChild(label);
            document.body.appendChild(document.createElement("br"));
        }
        document.body.appendChild(document.createElement("br"));
        console.log(question);
        console.log(options);
        console.log(arrQuestions[i].correctAns);
    }

}

$(document).ready(function() {
    var isChecked = $("#input[type=radio]").prop("checked");
    var counter = 0;
    if (isChecked === true) {
        counter +=1;
        console.log(counter)
    }
    
})


//  Display Timer


//  Display questions and answers (radio buttons)


//  Track answers
function countScore() {

}


displayQuiz(arrQuestions);


