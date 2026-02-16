# 🧠 Interactive JS Quiz Engine

A lightweight, dynamic quiz application built with **Vanilla JavaScript**, **HTML5**, and **CSS3**.  
This project features randomized question selection, real-time progress tracking, and an automated scoring system.

---

## 🚀 Features

### 🎲 Randomized Questions
Every round pulls a fresh set of **5 questions** from a larger pool, ensuring a unique experience every time.

### 🖥️ Dynamic UI
Uses **DOM manipulation** to inject questions and answers without page reloads.

### 📊 Progress Bar
Visual feedback showing how far the user is through the current round.

### ⚡ Instant Feedback
Highlights the correct and incorrect answers immediately after a selection is made.

### 🧮 Smart Scoring
Categorized result messages based on the final percentage achieved.

---

## 🛠️ Technical Overview

The application logic is broken down into four primary stages:

### 1️⃣ Initialization
Resets variables and shuffles the `quizQuestions` array.

### 2️⃣ Display
Renders the current question and maps answer objects to dynamic buttons.

### 3️⃣ Validation
Checks the `dataset.correct` attribute, updates the score, and provides visual CSS feedback.

### 4️⃣ Completion
Calculates the final percentage and displays a custom message based on performance.

---

## 📂 File Structure

```plaintext
├── index.html   # The structure (Start, Quiz, and Result screens)
├── style.css    # Layout and feedback animations (.correct, .incorrect)
└── script.js    # Core quiz logic and state management
```

## ⚙️ How to Run
### 1️⃣ Clone this repository
git clone https://github.com/dechavez-rm/quiz_time.git

### 2️⃣ Open the project

Open index.html in your favorite browser.

### 3️⃣ (Optional) Customize

Add your own questions to the quizQuestions array in script.js.

## 📝 Future Improvements

⏳ Add a countdown timer for each question

🏆 Implement a high-score leaderboard using localStorage

🗂️ Support for multiple quiz categories
