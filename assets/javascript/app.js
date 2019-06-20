//  Global Variables

var ansCorrect = 0;
var ansIncorrect = 0;
var ansUnanswered = 0;
var optionOneStr = "<input class='form-check-inline' type='radio' name='q-options' id='opt-1' value='option1'><label class='form-check-label' for='opt-1'></label>"

//  Display Timer

//  Display questions and answers (radio buttons)


//  Track answers


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

function displayQuiz(arr) {
    var randomArr = shuffle(arr);

    for (var i = 0; i < randomArr.length; i++) {
        var question = arrQuestions[i].question;
        document.write(question);
        var options = shuffle(arrQuestions[i].choices);
        document.body.appendChild(document.createElement("br"));
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
    }

}

displayQuiz(arrQuestions);


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

