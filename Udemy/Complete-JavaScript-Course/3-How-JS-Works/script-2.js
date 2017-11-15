// Lecture: Scoping

var a='Hello!';
first();

function first(){
    var b='Hi!';
    second();

    function second(){
        var c='Hey!';
        console.log(a+b+c);
    }
}


var a='Hello!';
first();

function first(){
    var b='Hi!';
    second();

    function second(){
        var c='Hey!';
        third()
    }
}

// variables b and c are out of the scope chain, throws error
function third(){
    var d='John!';
    console.log(a+d);
}
