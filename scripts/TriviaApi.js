'use strict';

class TriviaApi {
    constructor () {
        this.base_url = 'https://opentdb.com/api.php';
        this.amount = 10;
    }

    getQuestions() {
        return fetch(`${this.base_url}?amount=${this.amount}`)
            .then(res => { return res.json() })
            .then((resJson) => {
                return resJson.results;
            })
            .then((data) => {questions.push(data)});
    };

    
}

const questions = [];