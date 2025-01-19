
function checkAnswer() {
    let correctAnswer = 4;
}

let userAnswer = document.querySelector("#choice1").value;
console.log(userAnswer);


let feedback = document.getElementById("feedback");

if(userAnswer == correctAnswer){
    feedback.textContent = "Correct! Well done.";
}else{
    feedback.textContent = "That's incorrect. Try again!";
}

let submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener('click', checkAnswer);