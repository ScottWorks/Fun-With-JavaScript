
//  Closures

function retirement(retirementAge) {
    var a = ' years left until retirement';
    return function(yearOfBirth) { // inner function has access to outer function parameters 'retirementAge' and 'a' because these parameters remain in the scope chain even after retirement() has returned and contents popped off stack. 
        var age = 2017 - yearOfBirth;
        console.log((retirementAge - age) + a); 
    }
}

var retirementUS = retirement(66); 
retirementUS(1990);

retirement(66)(1990);



// Practice

function interviewQuestions(job) {
    var greet = 'Hello';
    return function(name) {
    if (job == 'UX Designer') {
            console.log(greet + ' ' + name + ', can you please explain what a ' + job + ' is?');
    }
    else if (job == 'teacher') {
            console.log(greet + ', what subject do you teach, ' + name + '?');
    }
    else {
            console.log(greet + ' ' + name + ', what do you do?');
        }
    }
}


var teacherQuestion = interviewQuestions('teacher');
teacherQuestion('John'); 

var designerQuestion = interviewQuestions('UX Designer');
designerQuestion('Jane'); 
designerQuestion('Mark');
designerQuestion('Kemi'); 

interviewQuestions('teacher')('Mark');