// var startButtonElement= document.querySelector("#Start-Button")
// var welcomeDivEl = document.querySelector("#welcome-card");
// var questionCard = document.querySelector("#question-card");
// var questionH4El = document.querySelector("#question");
// var buttonDivEl = document.querySelector(".button-div");
// var timerDivEl = document.querySelector("#timer-div");
// var timerEl = document.querySelector("#timer");
// var endCardEl = document.querySelector("#end-card");
// var displayedScoreEl = document.querySelector("#displayed-score");






// buttonDivEl.addEventListener("click", function (){
//     if(event.target.id != questionsArr[questionsArrIndex].answer){
//         time = time - 15;
//     }
//     questionsArrIndex++
//     console.log("buttonDivEl")
//     if(questionsArrIndex < questionsArr.length ){
//         displayQuestions()
//     }else{
//         end();
//     }
// })

// displayedScoreEl.addEventListener("click", saveToLocalStorageAndMoveUser);


// startButtonElement.addEventListener("click", function (){
//     welcomeDivEl.setAttribute("style", "display: none !important")
//     questionCard.setAttribute("style", "display: block !important")
//     timerDivEl.setAttribute("style", "display: block !important")
//     timeInterval = setInterval(timer, 1000)
    
//     displayQuestions()
// })

// function timer() {
//     time--

//     timerEl.textContent = "Time: " + time;

//     if(time <=0){
//         clearInterval(timeInterval)
//         end()
//     }
// }

// function end() {
//     questionCard.setAttribute("style", "display: none !important")
//     endCardEl.setAttribute("style","display:block !important")
//     displayedScoreEl.textContent = "Your Score: " + time;
// }

// function displayQuestions() {
//     questionH4El.textContent = questionsArr[questionsArrIndex].question  

//     for(var i=0; i<questionsArr[questionsArrIndex].choices.length; i++){
//         document.getElementById(i).textContent = questionsArr[questionsArrIndex].choices[i]
//     }
// }

// function saveToLocalStorageAndMoveUser() {
//     // add saving to local storage

//     window.location.href = "https://highscores.html";
// }