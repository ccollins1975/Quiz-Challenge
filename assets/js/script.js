var startButtonElement= document.querySelector("#Start-Button")
var welcomeDivEl = document.querySelector("#welcome-card");
var questionCard = document.querySelector("#question-card");
var questionH4El = document.querySelector("#question");
var buttonDivEl = document.querySelector(".button-div");
var timerDivEl = document.querySelector("#timer-div");
var timerEl = document.querySelector("#timer");
var endCardEl = document.querySelector("#end-card");
var displayedScoreEl = document.querySelector("#displayed-score");


var questionsArrIndex = 0;
var timeInterval;
var time = 60

var questionsArr = [
    {
        question: "1.What gives a Fresnel fixture it’s name?",
        choices: ["a.The inventor", "b.The company", "c.The Lens", "d.The body style" ],
        answer: 2
    },
    {
        question: "2.What color is the ground wire?",
        choices: ["a.Plaid", "b.Blue", "c.Red", "d.Green" ],
        answer: 3
    },
    {
        question: "3.What can be used to change the color of a lighting fixture?",
        choices: ["a.Glass", "b.Metal", "c.Paper", "d.Gel" ],
        answer: 3
    },
    {
        question: "4.How many channels are in a single universe of DMX?",
        choices: ["a.1", "b.245", "c.1024", "d.512" ],
        answer: 3
    },
    {
        question: "5.How can you shape the beam of an ERS fixture?",
        choices: ["a.Barn Doors", "b.2x4", "c.Shudders", "d.Dimmer" ],
        answer: 2
    },
    
]

buttonDivEl.addEventListener("click", function (){
    if(event.target.id != questionsArr[questionsArrIndex].answer){
        time = time - 15;
    }
    questionsArrIndex++
    console.log("buttonDivEl")
    if(questionsArrIndex < questionsArr.length ){
        displayQuestions()
    }else{
        console.log("here")
        end();
    }
})

displayedScoreEl.addEventListener("click", saveToLocalStorageAndMoveUser);


startButtonElement.addEventListener("click", function (){
    welcomeDivEl.setAttribute("style", "display: none !important")
    questionCard.setAttribute("style", "display: block !important")
    timerDivEl.setAttribute("style", "display: block !important")
    timeInterval = setInterval(timer, 1000)
    
    displayQuestions()
})

function timer() {
    time--

    timerEl.textContent = "Time: " + time;

    if(time <=0){
        clearInterval(timeInterval)
        end()
    }
}

function end() {
    questionCard.setAttribute("style", "display: none !important")
    endCardEl.setAttribute("style","display:block !important")
    if(time < 0){
        time = 0;
    }
    displayedScoreEl.textContent = "Your Score: " + time;
}

function displayQuestions() {
    questionH4El.textContent = questionsArr[questionsArrIndex].question  

    for(var i=0; i<questionsArr[questionsArrIndex].choices.length; i++){
        document.getElementById(i).textContent = questionsArr[questionsArrIndex].choices[i]
    }
}

function saveToLocalStorageAndMoveUser() {
    // add saving to local storage

    window.location.href = "highscores.html";
}