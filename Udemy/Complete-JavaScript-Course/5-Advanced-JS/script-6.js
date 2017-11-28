
//  Immediately Invoked Function Explorer

function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

game();

(function (goodluck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodluck);  
})(5); // by wrapping the funciton in parentheses we can trick hte parser into believing that the function is an expression and not a declaration. Score variable will always be inaccessible from outside of function scope. 

