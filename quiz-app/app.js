const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");
const questionTimerElement = document.getElementById("time");
const overallTimerElement = document.getElementById("overall-time");
const correctSound = document.getElementById("correct-sound");
const wrongSound = document.getElementById("wrong-sound");
const timerSound = document.getElementById("timer-sound");
const nameInputContainer = document.getElementById("name-input-container");
const quizContent = document.getElementById("quiz-content");
const playerNameDisplay = document.getElementById("player-name-display");
const playerNameInput = document.getElementById("player-name");
const restartButton = document.getElementById("restart-btn");
const topScoresList = document.getElementById("top-scores-list"); 

let shuffledQuestions, currentQuestionIndex;
let score = 0;
let questionTimer, overallTimer;
let overallTimeLeft = 30 * 60; // 30 minutes in seconds

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
restartButton.addEventListener("click", restartGame);

function startGame() {
  const playerName = playerNameInput.value.trim();
  if (!playerName) {
    alert("Please enter your name!");
    return;
  }
  playerNameDisplay.innerText = playerName;
  nameInputContainer.classList.add("hide");
  quizContent.classList.remove("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5).slice(0, 30); // Select 30 random questions
  currentQuestionIndex = 0;
  score = 0;
  overallTimeLeft = 30 * 60; // Reset overall timer
  updateOverallTimerDisplay();
  startOverallTimer();
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  startQuestionTimer();
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  // Shuffle the answers array
  const shuffledAnswers = question.answers.sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearInterval(questionTimer); // Clear the question timer
  timerSound.pause(); // Stop the ticking sound
  timerSound.currentTime = 0; // Reset the sound
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
    correctSound.play(); // Play correct sound
  } else {
    wrongSound.play(); // Play wrong sound
  }
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  clearInterval(questionTimer); // Stop the question timer
  timerSound.pause(); // Stop the ticking sound
  timerSound.currentTime = 0; // Reset the sound
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    endGame();
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct"); // Green for correct answer
  } else {
    element.classList.add("wrong"); // Red for wrong answer
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function startQuestionTimer() {
  let timeLeft = 20; // 20 seconds per question
  questionTimerElement.innerText = timeLeft;
  timerSound.play(); // Start the ticking sound
  questionTimer = setInterval(() => {
    timeLeft--;
    questionTimerElement.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      timerSound.pause(); // Stop the ticking sound
      timerSound.currentTime = 0; // Reset the sound
      if (shuffledQuestions.length > currentQuestionIndex + 1) {
        currentQuestionIndex++;
        setNextQuestion();
      } else {
        endGame();
      }
    }
  }, 1000);
}

function startOverallTimer() {
  overallTimer = setInterval(() => {
    overallTimeLeft--;
    updateOverallTimerDisplay();
    if (overallTimeLeft <= 0) {
      clearInterval(overallTimer);
      endGame();
    }
  }, 1000);
}

function updateOverallTimerDisplay() {
  const minutes = Math.floor(overallTimeLeft / 60);
  const seconds = overallTimeLeft % 60;
  overallTimerElement.innerText = `${minutes}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function endGame() {
  clearInterval(questionTimer); // Clear the question timer
  clearInterval(overallTimer); // Clear the overall timer
  timerSound.pause(); // Stop the ticking sound
  timerSound.currentTime = 0; // Reset the sound
  quizContent.classList.add("hide");
  scoreContainer.classList.remove("hide");
  scoreElement.innerText = score;
  totalQuestionsElement.innerText = shuffledQuestions.length;

  // Save the player's score to local storage
  saveScore(playerNameInput.value.trim(), score);

  // Display the top 5 scores
  displayTopScores();
}

function saveScore(playerName, score) {
  // Retrieve existing scores from local storage
  const scores = JSON.parse(localStorage.getItem("topScores")) || [];

  // Add the new score
  scores.push({ playerName, score });

  // Sort scores in descending order
  scores.sort((a, b) => b.score - a.score);

  // Keep only the top 5 scores
  const topScores = scores.slice(0, 5);

  // Save the updated scores back to local storage
  localStorage.setItem("topScores", JSON.stringify(topScores));
}

function displayTopScores() {
  // Retrieve the top scores from local storage
  const topScores = JSON.parse(localStorage.getItem("topScores")) || [];

  // Clear the existing list
  topScoresList.innerHTML = "";

  // Display the top scores
  topScores.forEach((score, index) => {
    const listItem = document.createElement("li");
    listItem.innerText = `${index + 1}. ${score.playerName}: ${score.score}`;
    topScoresList.appendChild(listItem);
  });
}

function restartGame() {
  scoreContainer.classList.add("hide");
  nameInputContainer.classList.remove("hide");
  playerNameInput.value = ""; // Clear the player name input
}
