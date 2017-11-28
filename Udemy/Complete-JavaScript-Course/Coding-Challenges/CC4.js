
var Question = function (question, userAnswer, correctAnswer) {
    this.question = question,
    this.userAnswer = userAnswer,
    this.correctAnswer = correctAnswer
}


Question.prototype.displayQA = (function() {
    Question.prototype.questionNum = Math.floor(Math.random() * this.question.length);
    console.log(this.question[this.questionNum]);

    var userAnswerArrElem = this.userAnswer[this.questionNum].length;
    for (var i = 0; i < userAnswerArrElem; i++) {
        currentElem = this.userAnswer[this.questionNum][i];
        console.log((i + 1) + ': ' + currentElem);
    }
    practiceQuiz.checkAnswer();
});


Question.prototype.checkAnswer = (function() {
    userAnswer = prompt('Please enter your answer choice...');   
    console.log(this.correctAnswer[this.questionNum]);   
    if (userAnswer == this.correctAnswer[this.questionNum]) {
        console.log('Correct Answer!');
    }

    else {
        console.log('Incorrect Answer!');
    }
});


var questionArr = ['What was the first cryptocurrency named?', 'What is the pseudo-name of the Bitcoin whitepaper Author?', 'What is the underlying technology of Bitcoin, Ethereum, and Dash called?'];

var answerArr = [['Ethereum Classic', 'Bitcoin', 'Bitcoin Cash', 'Ethereum'], ['Vinny Gupta', 'Vitalik Buterin', 'Satoshi Nakamoto', 'Gavin Wood'], ['Hashcode', 'Tangle', 'Directed Acylic Graph', 'Blockchain']]

var correctAnsArr = [2, 3, 4];

var practiceQuiz = new Question(questionArr, answerArr, correctAnsArr);

practiceQuiz.displayQA(); 

// userAnswer = prompt('Please enter your answer choice...');
