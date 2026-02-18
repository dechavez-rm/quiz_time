# 🧠 Interactive JS Quiz Engine (v2.0)

A lightweight, high-performance quiz application built with Modular Vanilla JavaScript, HTML5, and CSS3. This version features advanced randomization algorithms, a pressurized timer system, and a modern "Floating Window" UI.

---

## 🚀 New & Enhanced Features

### 🎲 Double-Layer Randomization

Utilizes the Fisher-Yates (Knuth) Shuffle algorithm to randomize not only the order of the questions but also the order of the answers within each question, preventing pattern memorization.

### ⏳ Pressure Timer

A 10-second countdown per question. If the timer hits zero, the correct answer is revealed, and the quiz automatically advances, adding an extra layer of challenge.

### 🪟 Glassmorphism UI

The results screen is designed as a Floating Modal with a backdrop-blur effect (Glassmorphism), creating a modern, high-end feel without leaving the game context.

### 📂 Modular Architecture

Separates data from logic using ES6 Modules, making it easy to manage thousands of questions in a dedicated file without cluttering the core engine.

---

## 🛠️ Technical Overview

The application follows a synchronized lifecycle:

1. **Shuffling & Slicing** — The `shuffleArray()` helper creates a unique permutation of the master bank, and `.slice()` selects exactly 5 for the round.
2. **Timer & State Management** — The `startTimer()` and `clearInterval()` functions are synchronized with user input to ensure the clock resets perfectly between rounds.
3. **Background Dimming** — A dedicated `overlay-shadow` layer blurs and darkens the quiz background when the results are displayed, focusing the user's attention on their performance.

---

## 📂 File Structure

```plaintext
├── index.html     # The structure with a dedicated Modal Overlay layer
├── styles.css     # Glassmorphism, timer animations, and responsive layouts
├── script.js      # Core engine (Timer, Shuffle, and State management)
└── question.js    # Data module containing the master question bank
```

---

## ⚙️ How to Run

**1. Clone this repository**

```bash
git clone https://github.com/dechavez-rm/quiz_time.git
```

**2. Run with a Local Server**

Because this project uses **ES6 Modules (`type="module"`)**, you must run it through a local server (like VS Code's **Live Server** extension) to avoid CORS policy errors when loading `question.js`.

---

## 📝 Roadmap

- ✅ **Completed:** Timer system, Answer shuffling, Glassmorphism Modal.
- 🏆 **Next:** High-score leaderboard using `localStorage`.
- 🗂️ **Next:** Support for multiple quiz categories (Science, History, Tech).
