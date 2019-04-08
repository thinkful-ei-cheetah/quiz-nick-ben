'use strict';

/* global TriviaApi, Question */

// Attrs:
//   unasked (array of Question)
//   asked (array of Question)
//   score (integer)
//   scoreHistory (array of integers)
//   active (bool)

class Quiz {
  constructor() {
    this.unasked = [];
    this.asked = [];
    this.score = 0;
    this.scoreHistory = [];
    this.active = false;
  }

  initialize() {
    new TriviaApi().getQuestions().then((questions) => {questions.forEach(question => this.unasked.push(new Question(question)));});
  }

  askQuestion() {
    this.asked.push(this.unasked.pop());
  }

  incrementScore() {
    this.score++;
  }

  recordScore() {
    this.scoreHistory.push(this.score);
  }

  getHighScore() {
    let highScore = this.scoreHistory[0];

    for(let i=1; i<this.scoreHistory.length; i++) {
      if(this.scoreHistory[i] > highScore) {
        highScore = this.scoreHistory[i];
      }
    }

    return highScore;
  }

  toggleActive() {
    this.active = !this.active;
  }
}