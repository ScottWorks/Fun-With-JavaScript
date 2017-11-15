// Lecture: Hoisting


calculateAge(1990);

function calculateAge(year){
    console.log(2016-year);
}

// calculateAge(1990);

// retirement(1965);

var retirement=function(year){
    console.log(65-(2016-year));
}

// retirement(1990);

// console.log(age);
var age=23;
// console.log(age);

function foo(){
    // console.log(age);    
    var age=65;
    console.log(age);
}

foo();
console.log(age);