// IMPORT
import { quizQuestions } from "./question.js";

// DOM ELEMENTS
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");
const timerSpan = document.getElementById("timer-seconds");
const overlayShadow = document.getElementById("overlay-shadow");
const homeButton = document.getElementById("home-btn");

// VARIABLES
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;
let selectedQuestions = [];
let timerInterval;

const QUESTIONS_PER_ROUND = 5;
const TIMER_LIMIT = 10;

totalQuestionSpan.textContent = QUESTIONS_PER_ROUND;
maxScoreSpan.textContent = QUESTIONS_PER_ROUND;

// EVENT LISTENERS
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);
homeButton.addEventListener("click", returnToHome);

// SHUFFLE HELPER
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = 0;
  clearInterval(timerInterval);
  selectedQuestions = shuffleArray(quizQuestions).slice(0, QUESTIONS_PER_ROUND);
  startScreen.classList.remove("active");
  quizScreen.classList.add("active");
  showQuestion();
}

function showQuestion() {
  answersDisabled = false;
  const currentQuestion = selectedQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent =
    ((currentQuestionIndex + 1) / QUESTIONS_PER_ROUND) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;
  answersContainer.innerHTML = "";

  timerSpan.classList.remove("timer-low"); // ← FIXED: moved outside forEach

  const shuffledAnswers = shuffleArray(currentQuestion.answers);
  shuffledAnswers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });

  startTimer();
} // ← FIXED: closing brace for showQuestion was missing

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;
  clearInterval(timerInterval);

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS_PER_ROUND) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function startTimer() {
  let timeLeft = TIMER_LIMIT;
  timerSpan.textContent = timeLeft;
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    timerSpan.textContent = timeLeft;
    if (timeLeft <= 3) {
      timerSpan.classList.add("timer-low");
    }
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleTimeOut();
    }
  }, 1000);
}

function handleTimeOut() {
  answersDisabled = true;

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.style.cursor = "not-allowed";
  });

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < QUESTIONS_PER_ROUND) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  clearInterval(timerInterval);
  overlayShadow.classList.add("active");
  resultScreen.classList.add("active");
  finalScoreSpan.textContent = score;

  const percentage = (score / QUESTIONS_PER_ROUND) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  clearInterval(timerInterval);
  overlayShadow.classList.remove("active");
  quizScreen.classList.remove("active");
  resultScreen.classList.remove("active");
  startQuiz();
}

function returnToHome() {
  // Hide the results and the blur
  quizScreen.classList.remove("active");
  overlayShadow.classList.remove("active");
  resultScreen.classList.remove("active");

  // Back to square one
  startScreen.classList.add("active");

  // Reset quiz state just in case
  currentQuestionIndex = 0;
  score = 0;
}
