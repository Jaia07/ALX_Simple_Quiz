function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4"; 
  
    // Retrieve the User's Answer
    const checkedRadio = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = checkedRadio.value;
  
    // Compare the User's Answer with the Correct Answer
    const feedbackElement = document.getElementById("feedback"); 
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  }
  
  // Add an Event Listener to the Submit Button
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer); 