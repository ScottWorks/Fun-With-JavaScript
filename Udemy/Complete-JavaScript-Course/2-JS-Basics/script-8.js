
// Lecture: Functions

function calculateAge(yearOfBirth){
    var age=2017-yearOfBirth;
    return age;
}

var myAge=calculateAge(1990);
var yourAge=calculateAge(1969);
var dogsAge=calculateAge(2011);

console.log(myAge);
console.log(yourAge);
console.log(dogsAge);

function yearsUntilRetirement(name, year){
    var age=calculateAge(year);
    var retirement=65-age;
    if(retirement<=0){
        console.log(name+' have already retired!');
    }
    else{
        console.log(name+' will retire in '+retirement+' years.');
    }
}

yearsUntilRetirement('I', 1990);
yearsUntilRetirement('You', 1900);
yearsUntilRetirement('Dog', 2011);