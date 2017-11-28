
// Functions returning functions

function interviewQuestions(job) {
    if (job == 'designer') {
        return function(name) {
            console.log(name + ' , can you please explain what UX design is?');
        }
    }
    else if (job == 'teacher') {
        return function(name) {
            console.log('What subject do you teach, ' + name + '?');
        }
    }
    else {
        return function(name) {
            console.log('Hello , ' + name + ', wha do you do?');
       }
    }
}

var teacherQuestion = interviewQuestions('teacher');
teacherQuestion('John'); 

var designerQuestion = interviewQuestions('designer');
designerQuestion('Jane'); 
designerQuestion('Mark');
designerQuestion('Kemi'); 

interviewQuestions('teacher')('Mark');