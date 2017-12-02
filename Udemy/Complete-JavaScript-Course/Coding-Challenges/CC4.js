

var Module = (function(){

    var Question = function(question, answer, correctAnswer){
        this.question = question,
        this.answer = answer,
        this.correctAnswer = correctAnswer
    }

    var Q1 = new Question('What was the first cryptocurrency named?', ['Ethereum Classic', 'Bitcoin', 'Bitcoin Cash', 'Ethereum'], 2);

    var Q2 = new Question('What is the pseudo-name of the Bitcoin whitepaper Author?', ['Vinny Gupta', 'Vitalik Buterin', 'Satoshi Nakamoto', 'Gavin Wood'], 3);

    var Q3 = new Question('What is the underlying technology of Bitcoin, Ethereum, and Dash called?', ['Hashcode', 'Tangle', 'Directed Acylic Graph', 'Blockchain'], 4);


    Question.prototype.displayQA = function(){
        console.log(this.question);

        var answerArrElem = this.answer.length;
        for (var i = 0; i < answerArrElem; i++) {
            currentElem = this.answer[i];
            console.log((i + 1) + ': ' + currentElem);
        }
    }

    Question.prototype.checkAnswer = function(response, callBack) {        
        console.log(response);   
        var score;

        if (response == this.correctAnswer) {
            console.log('Correct Answer!');
            score = callBack(true);
        }
    
        else {
            console.log('Incorrect Answer!');
            score = callBack(false);                
        }
        this.getScore(score);
    }

    Question.prototype.getScore = function(score){
        console.log('Current Score: ' + score);
        console.log('------------------------------------------------------------------------');
        console.log('------------------------------------------------------------------------');
        console.log('------------------------------------------------------------------------');
    }

    function scoreCount(){
        var score = 0;
        return function(correct){
            if(correct){
                score++;
            }
            return score; 
        }
    }

    var points = scoreCount();


    function getQuestion(){
        var questions = [Q1, Q2, Q3];
        
        var questionNum = Math.floor(Math.random() * questions.length); 
        
        questions[questionNum].displayQA();

        userResponse = prompt('Please enter your answer choice...');

        if(userResponse != 'exit'){
            questions[questionNum].checkAnswer(userResponse, points) 
            getQuestion();            
        } 
    }

    return{
        getQuestion: getQuestion
    }

})();

Module.getQuestion();